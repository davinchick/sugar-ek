import React, {useEffect, useState} from 'react';

import './components.css';

export function ClinicalTrialscomponent() {

    const [countOfOverlap, setCountOfOverlap] = useState(0);
    const [listOfIdOverlaps, setListOfIdOverlaps] = useState([]);

    const max_rank = 30;
    const [query, setQuery] = useState('sugar intake');
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [selectedValueId, setSelectedValueId] = useState(listOfIdOverlaps[0] || null);

    const apiPub = `https://clinicaltrials.gov/api/query/full_studies?expr=${query.split(' ').join('+')}&min_rnk=1&max_rnk=${max_rank}&fmt=json`;
    const [articleCitation, setArticleCitation] = useState();

    useEffect(() => {
        getDataFromSearch();
    }, [query]);

    const getDataFromSearch = async () => {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/${apiPub}`);
        const res = await response.json();
        setCountOfOverlap(max_rank);
        setListOfIdOverlaps(res.FullStudiesResponse.FullStudies);
    };

    const changeInputSearch = (e) => {
        setInputSearchValue(e.target.value)
    };

    const searchItemsByInputValue = (e) => {
        e.preventDefault();
        setCountOfOverlap(0);
        setQuery(inputSearchValue);
        setInputSearchValue('');
    };

    const fetchMoreFromSelectedId = (el) => {
        console.log(el);
        const text = `<div>
            <p>Title: ${el.Study.ProtocolSection.IdentificationModule.BriefTitle}</p>
            <p>NCTId: ${el.Study.ProtocolSection.IdentificationModule.NCTId}</p>
            <p>Organization: ${el.Study.ProtocolSection.IdentificationModule.Organization.OrgFullName}</p>
            <hr/>
            <p>Conditions:</p>
            ${el.Study.DerivedSection.ConditionBrowseModule ?
                `<p>ConditionBrowseBranch: 
                ${el.Study.DerivedSection.ConditionBrowseModule.ConditionBrowseBranchList.ConditionBrowseBranch 
                ? el.Study.DerivedSection.ConditionBrowseModule.ConditionBrowseBranchList.ConditionBrowseBranch.map(el => `<span>${el.ConditionBrowseBranchName}, </span>`)
                : ''}</p>`
            : ''}
            <p>Protocol:</p>
            <p>LocationCountry: ${el.Study.ProtocolSection.ContactsLocationsModule.LocationList ? 
               `<span>${el.Study.ProtocolSection.ContactsLocationsModule.LocationList.Location[0].LocationCountry}, 
                ${el.Study.ProtocolSection.ContactsLocationsModule.LocationList.Location[0].LocationCity}</span>`
                : ''}
            </p>
            <p>DescriptionModule: ${el.Study.ProtocolSection.DescriptionModule.DetailedDescription}</p>
            <p>EligibilityCriteria: ${el.Study.ProtocolSection.EligibilityModule.EligibilityCriteria}</p>
            ${el.Study.ProtocolSection.IdentificationModule.OrgStudyIdInfo.OrgStudyIdLink ? 
                `<p>Link: <a href='${el.Study.ProtocolSection.IdentificationModule.OrgStudyIdInfo.OrgStudyIdLink}' target="_blank">${el.Study.ProtocolSection.IdentificationModule.OrgStudyIdInfo.OrgStudyIdLink}</a></p>`
             : ''}
            <p>ReferencesModule: ${el.Study.ProtocolSection.ReferencesModule ? el.Study.ProtocolSection.ReferencesModule.ReferenceList.Reference[0].ReferencePMID : ''}</p>
            <p>SponsorCollaborators: ${el.Study.ProtocolSection.SponsorCollaboratorsModule.LeadSponsor.LeadSponsorName}</p>
            <p>SponsorCollaborators: ${el.Study.ProtocolSection.StatusModule.StudyFirstSubmitDate}</p>
            <hr/>
            <p>Results:</p>
            ${el.Study.ResultsSection ? 
                `<p>BaselinePopulationDescription: ${el.Study.ResultsSection.BaselineCharacteristicsModule.BaselinePopulationDescription}</p>
                    <p>OutcomeMeasure: ${el.Study.ResultsSection.OutcomeMeasuresModule.OutcomeMeasureList.OutcomeMeasure 
                    ? el.Study.ResultsSection.OutcomeMeasuresModule.OutcomeMeasureList.OutcomeMeasure.map(el => `<span>${el.OutcomeMeasureDescription}</span>`) 
                    : ''}</p>
                    <p>FlowPreAssignmentDetails: ${el.Study.ResultsSection.ParticipantFlowModule.FlowPreAssignmentDetails}</p>`
            : ''}
         </div>
       `;
        setArticleCitation(<div dangerouslySetInnerHTML={{ __html: text}} />);
    };

    const setIdFromSelect = (e) => {
        const selectedResearch = listOfIdOverlaps.find(el => el.Rank === +e.target.value);
        setSelectedValueId(selectedResearch.Rank);
        fetchMoreFromSelectedId(selectedResearch);
    };

    return (
        <div className="grid_container mt6 zIndex relative">
            <img className="gradient_abs gradient_abs__top" src={'/img/gradients/gradient_green.svg'} alt="gradient"/>

            <div className="item_1_4 item_md_4 item_lg_4">
                <h2>Data from <a href="https://clinicaltrials.gov/" target="_blank">Clinicaltrials.gov</a>
                </h2>

                <div className="boxShadow m0">
                    <form action="" className="searchForm" onSubmit={searchItemsByInputValue}>
                        <input type="text" className="searchInput" onChange={(e) => changeInputSearch(e)}
                               value={inputSearchValue} placeholder={"sugar intake"}/>
                        <button className="submitInputSearch">Find</button>
                    </form>

                    <p className="fz_middle">List of <em className="undescore">{countOfOverlap}</em> overlaps
                        according to search by phrase <b>'{query}'</b></p>
                    <p className="fz_middle searchSelect_label">List of Searches</p>
                    <select name="selectTheId" id="" className="searchSelect" onChange={(e) => setIdFromSelect(e)}>
                        <option value="0">{'--select--'}</option>
                        {listOfIdOverlaps ? listOfIdOverlaps.map((el) => {
                            return <option key={el.Rank}>{el.Rank}</option>
                        }) : null}
                    </select>
                </div>
            </div>

            <div className="bg_light boxShadow item_fluid">
                <h3 className={`searchItemTitle`}>Research № {selectedValueId}</h3>
                {articleCitation ? <span className="undescore">Abstract:</span> : null}
                {articleCitation}
            </div>
            <img className="gradient_abs gradient_abs__bottom" src={'/img/gradients/gradient_green.svg'} alt="gradient"/>
        </div>
    );
};
