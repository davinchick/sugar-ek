import React, {useEffect, useState} from 'react';
import {FewWords, PubMedComponent} from "../components";

export const Home = () => {

    return (
        <div className="relative">
            <FewWords/>
            <PubMedComponent />
        </div>
    )
}