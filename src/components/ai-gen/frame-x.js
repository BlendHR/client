import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./frame-x.css";

const FrameX = () => {
  const navigate = useNavigate();

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="recruitment-parent20">
      <div className="recruitment24">RECRUITMENT</div>
      <div className="tab170">
        <div className="tab-child189" />
        <img className="briefcase-icon24" alt="" src="/briefcase.svg" />
        <div className="jobs27">Jobs</div>
        <img className="tab-child190" alt="" src="/rectangle-268.svg" />
      </div>
      <div className="tab171" onClick={onTabContainer1Click}>
        <div className="tab-child191" />
        <img className="vector-icon168" alt="" src="/vector3.svg" />
        <div className="jobs27">Candidates</div>
      </div>
      <div className="tab172">
        <div className="tab-child191" />
        <img className="credit-card-icon24" alt="" src="/creditcard.svg" />
        <div className="jobs27">Career Site</div>
      </div>
    </div>
  );
};

export default FrameX;
