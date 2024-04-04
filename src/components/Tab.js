import React from "react";

const Tab = ({ icon, title, onClick }) => {
  return (
    <div className="tab150" onClick={onClick}>
      <img className="tab-icon" alt="" src={icon} />
      <div className="tab-title">{title}</div>
    </div>
  );
};

export default Tab;


