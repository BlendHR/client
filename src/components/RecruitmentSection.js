import React from "react";
import Tab from "./Tab";

const Recruitment = ({ onJobsClick, onCandidatesClick, onCareerSiteClick }) => {
  return (
    <div className="recruitment">
      <div className="recruitment-title">RECRUITMENT</div>
      <Tab icon="/briefcase.svg" title="Jobs" onClick={onJobsClick} />
      <Tab icon="/vector3.svg" title="Candidates" onClick={onCandidatesClick} />
      <Tab icon="/creditcard.svg" title="Career Site" onClick={onCareerSiteClick} />
    </div>
  );
};

export default Recruitment;
