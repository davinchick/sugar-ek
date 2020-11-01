import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className="item_3 item_md_8 item_lg_12 mt6">
            <div className="footer">
                <div className="grid">
                    <div className="item">
                        <p className="footer_logo">So sugary sin</p>
                    </div>
                    <div className="item">
                        <p>Project that has no one edge, and leads to eternity</p>
                    </div>
                    <div className="item">
                        <p>Contact us</p>
                        <p>email</p>
                        <p>hallygirl@</p>
                    </div>
                    <div className="item">
                        <p>All rules are under control, don't worry</p>
                        <p className="flex-center">Made by
                            <a href="https://github.com/davinchick" className="footer_madeBy" target="_blank" title="davinchick"><img
                            src="/img/github-logo.svg" alt="github"/></a></p>
                    </div>
                    <div className="item">
                        <p>If you have any emotional dissonance or just a questions</p>
                        <p>Contact us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}