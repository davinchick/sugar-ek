import React from 'react'
import {FewWords} from "../components";
import {thoughts} from '../docs'
import './pages.css'

export const About = () => {
    return (
        <>
            <FewWords/>
            <div className="grid_container mt3">
                {thoughts.map((el, ind) => (
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
        </>
    )
};