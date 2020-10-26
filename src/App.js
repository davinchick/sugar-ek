import React from 'react';
import { Header } from './Header'
import { Footer } from './Footer'
import { Home, About, Sources } from './pages'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="grid_container">
                    <Header />

                    <Switch>
                        <Route path='/home' exact component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/sources' component={Sources} />
                        {/* <Route path='/gallery' exact component={Gallery} />
                        <Route path='/gallery/:id' component={itemDetail} /> */}
                    </Switch>

                        <div className="item_1_5 item_md_2 item_lg_3">
                            <div className="card">
                                <div className="grid">
                                    <div className="item_3">
                                        <div className="showOn">
                                            <div className="sm">
                                                <div className="placeholder_9x16"></div>
                                            </div>
                                            <div className="md">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                            <div className="lg">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3>title</h3>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item_1_5 item_md_2 item_lg_3">
                            <div className="card">
                                <div className="grid">
                                    <div className="item_3">
                                        <div className="showOn">
                                            <div className="sm">
                                                <div className="placeholder_9x16"></div>
                                            </div>
                                            <div className="md">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                            <div className="lg">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3>title</h3>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item_1_5 item_md_2 item_lg_3">
                            <div className="card">
                                <div className="grid">
                                    <div className="item_3">
                                        <div className="showOn">
                                            <div className="sm">
                                                <div className="placeholder_9x16"></div>
                                            </div>
                                            <div className="md">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                            <div className="lg">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3>title</h3>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item_1_5 item_md_2 item_lg_3">
                            <div className="card">
                                <div className="grid">
                                    <div className="item_3">
                                        <div className="showOn">
                                            <div className="sm">
                                                <div className="placeholder_9x16"></div>
                                            </div>
                                            <div className="md">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                            <div className="lg">
                                                <div className="placeholder_1x1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <h3>title</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="item_3 item_md_8 item_lg_12">
                            <div className="grid">
                                <div className="item_skinny">
                                    skinny
                                </div>
                                <div className="item_skinny">
                                    skinny
                                </div>
                                <div className="item_skinny">
                                    skinny
                                </div>
                                <div className="item_skinny">
                                    skinny
                                </div>
                                <div className="item_fluid">fluid</div>
                            </div>
                        </div>

                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>
                        <div className="item">item</div>

                        <div className="item_max">
                            <div className="grid_3">
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                                <div className="item">item</div>
                            </div>
                        </div>

                        <div className="grid">
                            <div className="item">item</div>
                            <div className="item">item</div>
                            <div className="item">item</div>
                            <div className="item">item</div>
                        </div>
                    <Footer />

                </div>
            </div>
        </Router>
    );
}

export default App;
