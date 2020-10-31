import React, {useEffect, useState} from 'react';
import {Header} from './Header'
import {Footer} from './Footer'
import {About, Sources} from './pages'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';

function App() {

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
        if(resultJson) {
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
        if(res) {
            const text = res.split('abstract')[1];
            if(text) {
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
        <Router>
            <div className="App">
                <div className="grid_container">
                    <Header/>

                    <Switch>
                        <Route path='/' exact/>
                        <Route path='/about' component={About}/>
                        <Route path='/sources' component={Sources}/>
                        {/* <Route path='/gallery' exact component={Gallery} />
                        <Route path='/gallery/:id' component={itemDetail} /> */}
                    </Switch>

                    <div className="item_1_5 item_md_2 item_lg_3 flex-full">
                        <h3>Data from <a href="https://http://www.ncbi.nlm.nih.gov" target="_blank">PubMed Central</a>
                        </h3>
                        <form action="" onSubmit={searchItemsByInputValue}>
                            <input type="text" className="searchInput" onChange={setInputSearchValue} value={inputSearchValue}/>
                            <button className="submitInputSearch">Find</button>
                        </form>

                        <div className="boxShadow">
                            <p>There are now <em>{countOfOverlap}</em> overlaps according to search by phrase <b>'{inputSearchValue}'</b></p>
                            <p>List of Id</p>
                            <select name="selectTheId" id="" onChange={(e) => setIdFromSelect(e)}>
                                {listOfIdOverlaps.map(el => {
                                    return <option key={el}>{el}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="grid boxShadow">
                        <div className="item_1_5 item_md_2 item_lg_3 flex-full">
                            <h3 className={isFoundArticle ? 'colored_green' : 'colored_red'}>PMED_ID: {selectedValueId}</h3>
                            {articleText}
                            <p>{articleCitation}</p>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        </Router>
    );
}

export default App;
