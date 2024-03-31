import React from "react";
import Tab from "./Tab";

const General = ({ onDashboardClick, onChatClick, onCalendarClick }) => {
  return (
    <div className="general">
      <div className="general-title">GENERAL</div>
      <Tab icon="/vector1.svg" title="Dashboard" onClick={onDashboardClick} />
      <Tab icon="/vector2.svg" title="Chat" onClick={onChatClick} />
      <Tab icon="/calendar.svg" title="Calendar" onClick={onCalendarClick} />
    </div>
  );
};

export default General;
