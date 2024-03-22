import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./container-general-buttons.css";

const ContainerGeneralButtons = () => {
  const navigate = useNavigate();

  const onTabClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="general-parent23">
      <div className="general25">GENERAL</div>
      <button className="tab183" onClick={onTabClick}>
        <div className="tab-child204" />
        <img className="vector-icon175" alt="" src="/vector1.svg" />
        <div className="dashboard27">Dashboard</div>
      </button>
      <div className="tab184">
        <div className="tab-child204" />
        <img className="vector-icon176" alt="" src="/vector2.svg" />
        <div className="chat25">Chat</div>
      </div>
      <div className="tab184">
        <div className="tab-child204" />
        <img className="calendar-icon25" alt="" src="/calendar.svg" />
        <div className="chat25">Calendar</div>
      </div>
    </div>
  );
};

export default ContainerGeneralButtons;
