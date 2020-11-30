import React, {useEffect, useState} from 'react';

export const Bookshelf = () => {

    return (
        <div className="grid_container">

            <div className="item_max">
                    <div className="item card mt6">
                        <a href="http://www.freemedicaljournals.com/">Free medical journals:</a>
                    </div>
                    <div className="item">
                        <a href="https://covidreference.com/comorbidities-diabetes-mellitus">Covidreference journals.
                            Article about Diabetes mellitus</a>
                    </div>
                    <div className="item">
                        <a href="https://www.bookdepository.com/Pure-White-Deadly-John-Yudkin/9780241257456">
                            Pure, White and Deadly : How Sugar Is Killing Us and What We Can Do to Stop It</a>
                    </div>
                    <div className="item">
                        <a href="https://apps.who.int/iris/handle/10665/150883">
                            Evaluation of certain food additives: seventy-ninth report of the Joint FAO/WHO Expert Committee on Food Additives
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://erj.ersjournals.com/content/50/1/1700073">
                            Maternal intake of sugar during pregnancy and childhood respiratory and atopic outcomes</a>
                    </div>
                    <div className="item">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/25322305/">
                            Soda and cell aging: associations between sugar-sweetened beverage consumption and leukocyte telomere length in healthy adults from the National Health and Nutrition Examination Surveys
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://www.researchgate.net/publication/319266735_Sugar_addiction_Is_it_real_A_narrative_review">
                            Sugar addiction: Is it real? A narrative review
                        </a>
                    </div>
                    <div className="item">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/26773022/">
                            Sugars and Dental Caries: Evidence for Setting a Recommended Threshold for Intake
                        </a>
                    </div>
            </div>
        </div>
    )
};