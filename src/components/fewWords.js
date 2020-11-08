import React from 'react'
import './components.css'

export const FewWords = () => {
    return (
        <div className="grid_container mt6">

            <div className="item_1_4 item_md_4 item_lg_4">
                <div className="card height18">
                    <div className="grid">
                        <div className="item_auto">
                            <div className="item_3_imageContainer">
                                <img src="/img/mainPage/sugarPack.jpg" alt="sugarPack"/>
                            </div>
                        </div>
                        <div className="item">
                            <h3 className="background__grey item_title__mt1">Just boring fact:</h3>
                            <p className="background__grey fz_middle">Sugar intake from sweet food/beverages may increases the
                                chance of incident mood disorders</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item_1_4 item_md_4 item_lg_4">
                <div className="card height18">
                    <div className="grid">
                        <div className="item_auto">
                            <div className="item_3_imageContainer">
                                <img src="/img/mainPage/nightmare.jpg" alt="nightmare"/>
                            </div>
                        </div>
                        <div className="item">
                            <h3 className="background__grey item_title__mt1">Just boring fact:</h3>
                            <p className="background__grey fz_middle">Consuming sugar or carbohydrates primarily raises your blood
                                sugar levels, which gives you a burst of energy that may make you stay up later than you
                                would like, especially if you eat them too close to sleep</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="item_1_4 item_md_4 item_lg_4">
                <div className="card height18">
                    <div className="grid">
                        <div className="item_auto">
                            <div className="item_3_imageContainer">
                                <img src="/img/mainPage/habits.jpg" alt="habits"/>
                            </div>
                        </div>
                        <div className="item">
                            <h3 className="background__grey item_title__mt1">Just boring fact:</h3>
                            <p className="background__grey fz_middle">People who tend to quickly form their habits may become
                                highly addicted to sugar and sweets and just any unhealthy food.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};