import { useCallback } from "react";
import "./nav-bar.css";

const Frame = () => {
  const onNavbarContainerClick = useCallback(() => {
    // Please sync "MacBook Pro 14" - 1" to the project
  }, []);

  const onTabContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  return (
    <div className="navbar" onClick={onNavbarContainerClick}>
      <div className="navbar-inner">
        <div className="profile-wrapper">
          <div className="profile">PROFILE</div>
        </div>
      </div>
      <div className="general-parent">
        <div className="general">GENERAL</div>
        <div className="tab">
          <div className="tab-child" />
          <img className="vector-icon" alt="" src="/vector1.svg" />
          <div className="dashboard">Dashboard</div>
        </div>
        <div className="tab1">
          <div className="tab-item" />
          <img className="vector-icon1" alt="" src="/vector2.svg" />
          <div className="chat">Chat</div>
        </div>
        <div className="tab2">
          <div className="tab-inner">
          <img className="calendar-icon" alt="" src="/calendar.svg" />
          <div className="calendar">Calendar</div>
        </div>
      </div>
      <div className="company-parent">
        <div className="company">COMPANY</div>
        <div className="tab3">
          <div className="rectangle-div" />
          <img className="account-group-icon" alt="" src="/accountgroup.svg" />
          <div className="team">Team</div>
        </div>
      </div>
      <div className="recruitment-parent">
        <div className="recruitment">RECRUITMENT</div>
        <div className="tab4">
          <div className="tab-child1" />
          <img className="briefcase-icon" alt="" src="/briefcase.svg" />
          <div className="jobs">Jobs</div>
          <img className="rectangle-icon" alt="" src="/rectangle-268.svg" />
        </div>
        <div className="tab5">
          <div className="tab-child2" />
          <img className="vector-icon2" alt="" src="/vector3.svg" />
          <div className="candidates">Candidates</div>
        </div>
        <div className="tab6">
          <div className="tab-child3" />
          <img className="credit-card-icon" alt="" src="/creditcard.svg" />
          <div className="career-site">Career Site</div>
        </div>
      </div>
      <div className="visit-our-help">Visit our help centre</div>
      <img className="settings-icon" alt="" src="/settings.svg" />
      <div className="navbar-child" />
      <section className="parent">
        <div className="parent-inner">
          <div className="profile-container">
            <h3 className="profile1">PROFILE</h3>
          </div>
        </div>
        <div className="general-group">
          <div className="general1">GENERAL</div>
          <div className="tab7" onClick={onTabContainerClick}>
            <div className="tab-child4" />
            <img
              className="vector-icon3"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <div className="dashboard1">Dashboard</div>
          </div>
          <div className="tab8">
            <div className="tab-child5" />
            <img
              className="vector-icon4"
              loading="lazy"
              alt=""
              src="/vector2.svg"
            />
            <div className="chat1">Chat</div>
          </div>
          <div className="tab9">
            <div className="tab-child6" />
            <img
              className="calendar-icon1"
              loading="lazy"
              alt=""
              src="/calendar.svg"
            />
            <div className="calendar1">Calendar</div>
          </div>
        </div>
        <div className="settings-frame">
          <div className="frame-parent">
            <div className="settings-wrapper">
              <img
                className="settings-icon1"
                loading="lazy"
                alt=""
                src="/settings.svg"
              />
            </div>
            <div className="visit-our-help1">Visit our help centre</div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Frame;