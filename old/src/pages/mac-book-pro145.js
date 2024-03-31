import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./mac-book-pro145.css";

const MacBookPro145 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="create-jobs-3">
      <div className="ellipse-container">
        <div className="frame-child12" />
        <img
          className="bell-badge-outline-icon2"
          alt=""
          src="/bellbadgeoutline.svg"
        />
        <img className="frame-child13" alt="" src="/group-10.svg" />
        <div className="what-are-you2">what are you looking for?</div>
        <img className="vector-icon60" alt="" src="/vector10.svg" />
        <div className="chevron-left-container" onClick={onFrameContainerClick}>
          <img className="chevron-left-icon2" alt="" src="/chevronleft.svg" />
          <div className="back-to-jobs">Back to Jobs</div>
        </div>
      </div>
      <div className="create-job1">Create Job</div>
      <div className="your-job-has">Your Job Has been posted</div>
      <div className="senior-software-engineer-group">
        <div className="senior-software-engineer1">View</div>
        <img className="image-3-icon1" alt="" src="/image-3@2x.png" />
      </div>
      <div className="frame-parent9">
        <div className="frame-wrapper9">
          <div className="profile-wrapper7">
            <div className="profile9">PROFILE</div>
          </div>
        </div>
        <div className="general-parent7">
          <div className="general9">GENERAL</div>
          <div className="tab63">
            <div className="tab-child69" />
            <img className="vector-icon61" alt="" src="/vector1.svg" />
            <div className="dashboard9">Dashboard</div>
          </div>
          <div className="tab63">
            <div className="tab-child69" />
            <img className="vector-icon62" alt="" src="/vector2.svg" />
            <div className="dashboard9">Chat</div>
          </div>
          <div className="tab63">
            <div className="tab-child69" />
            <img className="calendar-icon9" alt="" src="/calendar.svg" />
            <div className="dashboard9">Calendar</div>
          </div>
        </div>
        <div className="company-parent7">
          <div className="company9">COMPANY</div>
          <div className="tab66">
            <div className="tab-child69" />
            <img className="calendar-icon9" alt="" src="/accountgroup.svg" />
            <div className="dashboard9">Team</div>
          </div>
        </div>
        <div className="recruitment-parent7">
          <div className="general9">RECRUITMENT</div>
          <div className="tab67">
            <div className="tab-child73" />
            <img className="briefcase-icon9" alt="" src="/briefcase.svg" />
            <div className="dashboard9">Jobs</div>
            <img className="tab-child74" alt="" src="/rectangle-268.svg" />
          </div>
          <div className="tab63">
            <div className="tab-child69" />
            <img className="vector-icon63" alt="" src="/vector3.svg" />
            <div className="dashboard9">Candidates</div>
          </div>
          <div className="tab63">
            <div className="tab-child69" />
            <img className="calendar-icon9" alt="" src="/creditcard.svg" />
            <div className="dashboard9">Career Site</div>
          </div>
        </div>
        <div className="visit-our-help9">Visit our help centre</div>
        <img className="settings-icon9" alt="" src="/settings.svg" />
        <div className="frame-child14" />
        <div className="frame-parent10">
          <div className="frame-wrapper10">
            <div className="profile-wrapper8">
              <div className="profile10">PROFILE</div>
            </div>
          </div>
          <div className="general-parent7">
            <div className="general9">GENERAL</div>
            <div className="tab70" onClick={onTabContainerClick}>
              <div className="tab-child69" />
              <img className="vector-icon61" alt="" src="/vector1.svg" />
              <div className="dashboard9">Dashboard</div>
            </div>
            <div className="tab63">
              <div className="tab-child69" />
              <img className="vector-icon62" alt="" src="/vector2.svg" />
              <div className="dashboard9">Chat</div>
            </div>
            <div className="tab63">
              <div className="tab-child69" />
              <img className="calendar-icon9" alt="" src="/calendar.svg" />
              <div className="dashboard9">Calendar</div>
            </div>
          </div>
          <div className="company-parent7">
            <div className="company9">COMPANY</div>
            <div className="tab66">
              <div className="tab-child69" />
              <img className="calendar-icon9" alt="" src="/accountgroup.svg" />
              <div className="dashboard9">Team</div>
            </div>
          </div>
          <div className="recruitment-parent7">
            <div className="general9">RECRUITMENT</div>
            <div className="tab67">
              <div className="tab-child73" />
              <img className="briefcase-icon9" alt="" src="/briefcase.svg" />
              <div className="dashboard9">Jobs</div>
              <img className="tab-child74" alt="" src="/rectangle-268.svg" />
            </div>
            <div className="tab70" onClick={onTabContainer1Click}>
              <div className="tab-child69" />
              <img className="vector-icon63" alt="" src="/vector3.svg" />
              <div className="dashboard9">Candidates</div>
            </div>
            <div className="tab63">
              <div className="tab-child69" />
              <img className="calendar-icon9" alt="" src="/creditcard.svg" />
              <div className="dashboard9">Career Site</div>
            </div>
          </div>
          <div className="visit-our-help9">Visit our help centre</div>
          <img className="settings-icon9" alt="" src="/settings.svg" />
          <div className="frame-child14" />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro145;
