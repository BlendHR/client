import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./recruitment-form-container.css";

const RecruitmentFormContainer = () => {
  const navigate = useNavigate();

  const onTabContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  const onTabContainer2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="recruitment-parent22">
      <div className="recruitment26">RECRUITMENT</div>
      <div className="tab186" onClick={onTabContainerClick}>
        <div className="tab-child207" />
        <img className="briefcase-icon26" alt="" src="/briefcase.svg" />
        <div className="jobs29">Jobs</div>
      </div>
      <button className="tab-wrapper">
        <div className="tab187" onClick={onTabContainer2Click}>
          <div className="tab-child207" />
          <img className="vector-icon177" alt="" src="/vector3.svg" />
          <div className="candidates31">Candidates</div>
        </div>
      </button>
      <div className="tab188">
        <div className="tab-child207" />
        <img className="credit-card-icon26" alt="" src="/creditcard.svg" />
        <div className="jobs29">Career Site</div>
      </div>
    </div>
  );
};

export default RecruitmentFormContainer;
