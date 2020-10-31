import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return (
        <div className="header item_3 item_md_8 item_lg_12">
                    <div className="boxShadow">
                        <div className="grid">
                            <div className="item">

                                <div className="item_max">
                                    <div className="grid">
                                        <Link to='/' className="item navLink">home</Link>
                                        <Link to='/sources' className="item navLink">sources</Link>
                                        <Link to='/gallery' className="item navLink">video gallery</Link>
                                        <Link to='/bookshelf' className="item navLink">bookshelf</Link>
                                        <Link to='/about' className="item navLink">about project</Link>
                                    </div>
                                </div>

                                <h2 className="showOn">
                                    <h4 className="sm">White crystals</h4>
                                    <h4 className="md">You'd better don't eat them</h4>
                                    <h4 className="lg">So sugary sin</h4>
                                </h2>


                            </div>
                            <div className="item_3 item_md_4 item_lg_4">
                                <div className="showOn">
                                    <div className="imageLogo_container">
                                        <img className="imageLogo" src="/img/mainPage/img_logo.jpg" alt="img_logo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}