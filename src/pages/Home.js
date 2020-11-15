import React from 'react';
import {PubMedComponent, ClinicalTrialscomponent} from "../components";

export const Home = () => {

    return (
        <div className="flex_center">
            <PubMedComponent />
            <ClinicalTrialscomponent />
        </div>
    )
};