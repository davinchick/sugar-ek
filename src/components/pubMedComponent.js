import React, {useEffect, useState} from 'react';

import './components.css';

export function PubMedComponent() {

    const [countOfOverlap, setCountOfOverlap] = useState(0);
    const [listOfIdOverlaps, setListOfIdOverlaps] = useState([]);

    const [inputSearchValue, setInputSearchValue] = useState('sugar intake');
    const [selectedValueId, setSelectedValueId] = useState(listOfIdOverlaps[0]);

    const apiPub = `http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=1000&term=${inputSearchValue.split(' ').join('+')}&field=title`;
    const fetchMoreFromId = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${selectedValueId}`;
    const searchArticleById = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${selectedValueId}&retmode=json`;
    const [isFoundArticle, setIsFoundArticle] = useState(false);
    const [articleText, setArticleText] = useState();
    const [articleCitation, setArticleCitation] = useState('');

    useEffect(() => {
        searchItemsByInputValue();
    }, []);

    const searchItemsByInputValue = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/${apiPub}`);
        const res = await data.json();
        console.log(res);
        setCountOfOverlap(res.esearchresult.count);
        setListOfIdOverlaps(res.esearchresult.idlist);
    };

    const searchItemsBySelectedId = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/${searchArticleById}`);
        const res = await data.json();

        const resultJson = res.result[selectedValueId];
        console.log(resultJson);
        if (resultJson) {
            const article = <div className="item_1_5 item_md_2 item_lg_3 flex-full">
                <h4>{res.result[selectedValueId].title}</h4>
                <p>{res.result[selectedValueId].pubdate}</p>
                <p>Source: {res.result[selectedValueId].source}</p>
                <p>From journal: {res.result[selectedValueId].fulljournalname}</p>
                <p>Authors: {res.result[selectedValueId].authors.map(el => el.name).join(', ')}</p>
            </div>;
            setArticleText(article)
            setIsFoundArticle(true)
        } else {
            const message = <p>Not found any information .. or it's private article</p>
            setArticleText(message)
            setIsFoundArticle(false)
        }
    };

    const fetchMoreFromSelectedId = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/${fetchMoreFromId}`);
        const res = await data.text();
        let textCitation = '';
        if (res) {
            const text = res.split('abstract')[1];
            if (text) {
                textCitation = text.split('pmid')[0];
            } else {
                textCitation = text
            }
        } else {
            textCitation = "Not found any citation";
        }
        setArticleCitation(textCitation);
    };

    const setIdFromSelect = (e) => {
        setSelectedValueId(e.target.value);
        searchItemsBySelectedId();
        fetchMoreFromSelectedId();
    };

    return (
        <div className="grid_container mt6 zIndex">
            <img className="gradient_abs gradient_abs__top" src={'/img/gradients/gradient_blue.svg'} alt="gradient"/>
            <div className="grid">
                <div className="item_1_4 item_md_4 item_lg_4 mt3 item_skinny">
                    <h2>Data from <a href="https://http://www.ncbi.nlm.nih.gov" target="_blank">PubMed Central</a>
                    </h2>

                    <div className="boxShadow m0">
                        <form action="" onSubmit={searchItemsByInputValue}>
                            <input type="text" className="searchInput" onChange={setInputSearchValue}
                                   value={inputSearchValue}/>
                            <button className="submitInputSearch">Find</button>
                        </form>

                        <p>There are now <em>{countOfOverlap}</em> overlaps according to search by
                            phrase <b>'{inputSearchValue}'</b></p>
                        <p>List of Id</p>
                        <select name="selectTheId" id="" className="searchSelect" onChange={(e) => setIdFromSelect(e)}>
                            {listOfIdOverlaps.map(el => {
                                return <option key={el}>{el}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="boxShadow item_fluid">
                    <div className="item_1_5 item_md_2 item_lg_3">
                        <h3 className={isFoundArticle ? 'colored_green' : 'colored_red'}>PMED_ID: {selectedValueId}</h3>
                        {articleText}
                        <p>{articleCitation}</p>
                    </div>
                </div>
            </div>
            <img className="gradient_abs gradient_abs__bottom" src={'/img/gradients/gradient_blue.svg'} alt="gradient"/>
        </div>
    );
};
