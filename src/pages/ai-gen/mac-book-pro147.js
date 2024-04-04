import GroupComponent2 from "../components/group-component2";
import ScreeningContainer from "../components/screening-container";
import FrontEndDeveloperContainer from "../components/front-end-developer-container";
import "./mac-book-pro147.css";

const MacBookPro147 = () => {
  return (
    <div className="macbook-pro-14-11">
      <div className="group-container">
        <GroupComponent2 groupDivLeft="82px" groupDivTop="576px" />
        <GroupComponent2 groupDivLeft="454px" groupDivTop="42px" />
        <GroupComponent2 groupDivLeft="454px" groupDivTop="576px" />
        <GroupComponent2 groupDivLeft="826px" groupDivTop="42px" />
        <GroupComponent2 groupDivLeft="826px" groupDivTop="576px" />
        <GroupComponent2 groupDivLeft="82px" groupDivTop="220px" />
        <GroupComponent2 groupDivLeft="454px" groupDivTop="220px" />
        <GroupComponent2 groupDivLeft="826px" groupDivTop="220px" />
        <GroupComponent2 groupDivLeft="82px" groupDivTop="398px" />
        <GroupComponent2 groupDivLeft="454px" groupDivTop="398px" />
        <GroupComponent2 groupDivLeft="826px" groupDivTop="398px" />
      </div>
      <ScreeningContainer
        eventCountText="Screening             (5)"
        interviewCountText="Interview               (3)"
        propBorder="unset"
        propBorder1="unset"
        propBorder2="unset"
        propLeft="577px"
      />
      <FrontEndDeveloperContainer />
      <div className="frame-div">
        <div className="frame-wrapper1">
          <div className="profile-frame">
            <div className="profile2">PROFILE</div>
          </div>
        </div>
        <div className="general-container">
          <div className="general2">GENERAL</div>
          <div className="tab14">
            <div className="tab-child13" />
            <img className="vector-icon37" alt="" src="/vector1.svg" />
            <div className="dashboard2">Dashboard</div>
          </div>
          <div className="tab14">
            <div className="tab-child13" />
            <img className="vector-icon38" alt="" src="/vector2.svg" />
            <div className="dashboard2">Chat</div>
          </div>
          <div className="tab14">
            <div className="tab-child13" />
            <img className="calendar-icon2" alt="" src="/calendar.svg" />
            <div className="dashboard2">Calendar</div>
          </div>
        </div>
        <div className="company-container">
          <div className="company2">COMPANY</div>
          <div className="tab17">
            <div className="tab-child13" />
            <img className="calendar-icon2" alt="" src="/accountgroup.svg" />
            <div className="dashboard2">Team</div>
          </div>
        </div>
        <div className="recruitment-container">
          <div className="general2">RECRUITMENT</div>
          <div className="tab18">
            <div className="tab-child17" />
            <img className="briefcase-icon2" alt="" src="/briefcase.svg" />
            <div className="dashboard2">Jobs</div>
            <img className="tab-child18" alt="" src="/rectangle-268.svg" />
          </div>
          <div className="tab14">
            <div className="tab-child13" />
            <img className="vector-icon39" alt="" src="/vector3.svg" />
            <div className="dashboard2">Candidates</div>
          </div>
          <div className="tab14">
            <div className="tab-child13" />
            <img className="calendar-icon2" alt="" src="/creditcard.svg" />
            <div className="dashboard2">Career Site</div>
          </div>
        </div>
        <div className="visit-our-help2">Visit our help centre</div>
        <img className="settings-icon2" alt="" src="/settings.svg" />
        <div className="frame-child2" />
      </div>
    </div>
  );
};

export default MacBookPro147;
