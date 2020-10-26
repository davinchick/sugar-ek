import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="item_3 item_md_8 item_lg_12">
                    <div className="card">
                        <div className="grid">
                            <div className="item">

                                <div className="item_max">
                                    <div className="grid">
                                        <Link to='/home' className="item">home</Link>
                                        <Link to='/sources' className="item">sources</Link>
                                        <Link to='/gallery' className="item">video gallery</Link>
                                        <Link to='/bookshelf' className="item">bookshelf</Link>
                                        <Link to='/about' className="item">about project</Link>
                                    </div>
                                </div>

                                <h2 className="showOn">
                                    <div className="sm">White crystals</div>
                                    <div className="md">You'd better don't eat them</div>
                                    <div className="lg">So sugary sin</div>
                                </h2>


                            </div>
                            <div className="item_3 item_md_4 item_lg_4">
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
                        </div>
                    </div>
                </div>
    )
}