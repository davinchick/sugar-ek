import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Footer, Header} from './components'
import {About, Sources, Home, Bookshelf, VideoGallery} from './pages'

import './App.css';

function App() {

    const [cursorAttribute, setCursorAttribute] = useState();

    return (
        <Router>
            <div className="App"
                 // onMouseMove={(e)=> setCursorAttribute(prev => {
                 //    return {'top': `${e.pageY - 10}px`, 'left': `${e.pageX - 10}px`}
                 // })}
            >
                <div className="grid_container">
                    {/*<div className="cursor" style={cursorAttribute}>*/}
                    {/*</div>*/}
                    <Header/>

                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/sources' component={Sources}/>
                        <Route path='/bookshelf' component={Bookshelf}/>
                        <Route path='/videoGallery' exact component={VideoGallery} />
                        {/* <Route path='/gallery/:id' component={itemDetail} /> */}
                    </Switch>

                    <Footer/>
                </div>
            </div>
        </Router>
    );
};

export default App;
