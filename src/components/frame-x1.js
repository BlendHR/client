import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-x1.css";

const FrameX1 = () => {
  const navigate = useNavigate();

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="general-parent21">
      <div className="general23">GENERAL</div>
      <div className="tab167" onClick={onTabContainerClick}>
        <div className="tab-child186" />
        <img className="vector-icon166" alt="" src="/vector1.svg" />
        <div className="dashboard25">Dashboard</div>
      </div>
      <div className="tab168">
        <div className="tab-child186" />
        <img className="vector-icon167" alt="" src="/vector2.svg" />
        <div className="dashboard25">Chat</div>
      </div>
      <div className="tab168">
        <div className="tab-child186" />
        <img className="calendar-icon23" alt="" src="/calendar.svg" />
        <div className="dashboard25">Calendar</div>
      </div>
    </div>
  );
};

export default FrameX1;
