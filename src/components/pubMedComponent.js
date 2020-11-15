import React, {useEffect, useState} from 'react';

import './components.css';

export function PubMedComponent() {

    const [countOfOverlap, setCountOfOverlap] = useState(0);
    const [listOfIdOverlaps, setListOfIdOverlaps] = useState([]);

    const [query, setQuery] = useState('sugar intake');
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [selectedValueId, setSelectedValueId] = useState(listOfIdOverlaps[0] || null);

    const apiPub = `http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&retmax=1000&term=${query.split(' ').join('+')}&field=title`;
    const fetchMoreFromId = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${selectedValueId}`;
    const searchArticleById = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${selectedValueId}&retmode=json`;
    const [isFoundArticle, setIsFoundArticle] = useState(false);
    const [articleText, setArticleText] = useState();
    const [articleCitation, setArticleCitation] = useState('');

    useEffect(() => {
        getDataFromSearch();
    }, [query]);

    const getDataFromSearch = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${apiPub}`);
        const res = await response.json();
        // console.log(data.hits);
        setCountOfOverlap(res.esearchresult.count);
        setListOfIdOverlaps(res.esearchresult.idlist);
    };

    const changeInputSearch = (e) => {
        setInputSearchValue(e.target.value)
    };

    const searchItemsByInputValue = (e) => {
        e.preventDefault();
        setCountOfOverlap(0);
        setQuery(inputSearchValue);
        setInputSearchValue('');
    };

    const searchItemsBySelectedId = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/${searchArticleById}`);
        const res = await data.json();

        const resultJson = res.result[selectedValueId];
        // console.log(resultJson);
        if (resultJson) {
            const article = <div className="item_1_5 item_md_2 item_lg_3 flex-full">
                <h4 className="article_title">{res.result[selectedValueId].title}</h4>
                <p className="article_date">{res.result[selectedValueId].pubdate}</p>
                <p className="article_source"><span
                    className="undescore">Source:</span> {res.result[selectedValueId].source}</p>
                <p className="article_journal"><span
                    className="undescore">From journal:</span> {res.result[selectedValueId].fulljournalname}</p>
                <p className="article_authors"><span
                    className="undescore">Authors:</span> {res.result[selectedValueId].authors.map(el => el.name).join(', ')}
                </p>
            </div>;
            setArticleText(article);
            setIsFoundArticle(true)
        } else {
            const message = <p className="notFound">Not found any information .. or it's private article</p>
            setArticleText(message);
            setIsFoundArticle(false)
        }
    };

    const fetchMoreFromSelectedId = async () => {
        const data = await fetch(`https://cors-anywhere.herokuapp.com/${fetchMoreFromId}`);
        const res = await data.text();
        let textCitation = '';
        // console.log(res);
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
        <div className="grid_container mt6 zIndex relative">
            <img className="gradient_abs gradient_abs__top" src={'/img/gradients/gradient_blue.svg'} alt="gradient"/>

            <div className="item_1_4 item_md_4 item_lg_4">
                <h2>Data from <a href="https://http://www.ncbi.nlm.nih.gov" target="_blank">PubMed Central</a>
                </h2>

                <div className="boxShadow m0">
                    <form action="" className="searchForm" onSubmit={searchItemsByInputValue}>
                        <input type="text" className="searchInput" onChange={(e) => changeInputSearch(e)}
                               value={inputSearchValue} placeholder={"sugar intake"}/>
                        <button className="submitInputSearch">Find</button>
                    </form>

                    <p className="fz_middle">There are now <em className="undescore">{countOfOverlap}</em> overlaps
                        according to search by
                        phrase <b>'{query}'</b></p>
                    <p className="fz_middle searchSelect_label">List of Id</p>
                    <select name="selectTheId" id="" className="searchSelect" onChange={(e) => setIdFromSelect(e)}>
                        <option value="0">{'--select--'}</option>
                        {listOfIdOverlaps ? listOfIdOverlaps.map((el, ind) => {
                            return <option key={el}>{ind}) {el}</option>
                        }) : null}
                    </select>
                </div>
            </div>

            <div className="bg_light boxShadow item_fluid">
                <h3 className={`searchItemTitle ${isFoundArticle ? 'colored_green' : 'colored_red'}`}>PMED_ID: {selectedValueId}</h3>
                {articleText}
                {articleCitation ?
                    <p className="articleCitation">
                        <span className="undescore">Abstract:</span>
                        {articleCitation}
                    </p>
                    : null}
            </div>
            <img className="gradient_abs gradient_abs__bottom" src={'/img/gradients/gradient_blue.svg'} alt="gradient"/>
        </div>
    );
};
