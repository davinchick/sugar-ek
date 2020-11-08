import React from 'react'
import './pages.css'
import Thoughts from '../docs/thoughts'

export const About = () => {
    return (
        <div className="grid_container mt3">
            {Thoughts.map((el, ind) => (
                <div className="item_1_2 item_md_2 item_lg_4">
                    <div className={`bluish_card ${ind % 2 === 0 ? 'bluish_card_odd' : ''}`}>
                        <div className="grid">
                            <div className="item">
                                <p> {el}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};