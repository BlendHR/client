import "./general-container.css";

const GeneralContainer = ({ onTabContainer2Click }) => {
  return (
    <div className="general-parent20">
      <div className="general22">GENERAL</div>
      <div className="tab-parent">
        <div className="tab164" onClick={onTabContainer2Click}>
          <div className="tab-child183" />
          <img className="vector-icon145" alt="" src="/vector1.svg" />
          <div className="dashboard24">Dashboard</div>
        </div>
        <img className="frame-child51" alt="" src="/rectangle-268.svg" />
        <div className="frame-child52" />
      </div>
      <div className="tab165">
        <div className="tab-child183" />
        <img className="vector-icon146" alt="" src="/vector2.svg" />
        <div className="dashboard24">Chat</div>
      </div>
      <div className="tab165">
        <div className="tab-child183" />
        <img className="calendar-icon22" alt="" src="/calendar.svg" />
        <div className="dashboard24">Calendar</div>
      </div>
    </div>
  );
};

export default GeneralContainer;
