import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Header} from './Header'
import {Footer} from './Footer'
import {About, Sources, Home} from './pages'

import './App.css';

function App() {

    return (
        <Router>
            <div className="App">
                <div className="grid_container">
                    <Header/>

                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/sources' component={Sources}/>
                        {/* <Route path='/gallery' exact component={Gallery} />
                        <Route path='/gallery/:id' component={itemDetail} /> */}
                    </Switch>

                    <Footer/>
                </div>
            </div>
        </Router>
    );
};
export default App;
