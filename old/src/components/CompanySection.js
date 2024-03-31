import React from "react";
import Tab from "./Tab";

const Company = ({ onTeamClick }) => {
  return (
    <div className="company">
      <div className="company-title">COMPANY</div>
      <Tab icon="/accountgroup.svg" title="Team" onClick={onTeamClick} />
    </div>
  );
};

export default Company;
