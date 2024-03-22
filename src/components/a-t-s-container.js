import "./a-t-s-container.css";

const ATSContainer = () => {
  return (
    <div className="welcome-to-applicant-tracking-wrapper">
      <div className="welcome-to-applicant-container1">
        <p className="welcome-to1">
          <span className="welcome-to2">
            <span>{`Welcome to `}</span>
          </span>
        </p>
        <p className="applicant-tracking-system">
          <span className="welcome-to2">
            <span> Applicant Tracking System</span>
          </span>
        </p>
        <p className="welcome-to1">
          <span>
            <span className="blank-line2">&nbsp;</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ATSContainer;
