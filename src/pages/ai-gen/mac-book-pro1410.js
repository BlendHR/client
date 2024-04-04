import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationFormContainer from "../components/application-form-container";
import TimezoneSelectorContainer from "../components/timezone-selector-container";
import "./mac-book-pro1410.css";

const MacBookPro1410 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/createajob");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/createajob");
  }, [navigate]);

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="front-end-developer">
      <div className="ellipse-parent3">
        <div className="frame-child27" />
        <img
          className="bell-badge-outline-icon5"
          alt=""
          src="/bellbadgeoutline.svg"
        />
        <img className="frame-child28" alt="" src="/group-10.svg" />
        <div className="what-are-you5">what are you looking for?</div>
        <img className="vector-icon122" alt="" src="/vector10.svg" />
        <div className="chevron-left-parent3" onClick={onFrameContainerClick}>
          <img className="chevron-left-icon5" alt="" src="/chevronleft.svg" />
          <div className="back2">Back</div>
        </div>
      </div>
      <div className="front-end-developer1">
        Front End Developer Interview Scheduling
      </div>
      <div className="frame-parent19">
        <ApplicationFormContainer
          applicationStatus="Time Frame"
          startFromText="Starting Date"
          eventDateText="Ending Date"
          dateLabelText="01/01/2024"
          propTop="478px"
          propLeft="116px"
          propHeight="unset"
          propBackgroundColor="#f3f3f3"
        />
        <TimezoneSelectorContainer
          timeZoneText="09:00 PST"
          timeLabelText="12:00 PST"
        />
        <div className="time-for-each-interview-parent">
          <div className="time-for-each">Time For Each Interview</div>
          <div className="pst-wrapper">
            <div className="pst">09:00 PST</div>
          </div>
        </div>
        <div className="min-gap-parent">
          <div className="time-for-each">Min Gap</div>
          <div className="pst-wrapper">
            <div className="pst">09:00 PST</div>
          </div>
        </div>
        <TimezoneSelectorContainer
          timeZoneText="02:00 PST"
          timeLabelText="05:00 PST"
          propTop="1164px"
          propHeight="27px"
        />
        <div className="remember-me2">
          <div className="monday">Monday</div>
          <div className="check1" />
        </div>
        <div className="remember-me3">
          <div className="monday">Monday</div>
          <div className="check2" />
        </div>
        <div className="remember-me4">
          <div className="monday">Friday</div>
          <div className="check2" />
        </div>
        <div className="remember-me5">
          <div className="monday">Friday</div>
          <div className="check2" />
        </div>
        <div className="remember-me6">
          <div className="monday">Wednesday</div>
          <div className="check2" />
        </div>
        <div className="remember-me7">
          <div className="monday">Wednesday</div>
          <div className="check2" />
        </div>
        <div className="remember-me8">
          <div className="monday">Sunday</div>
          <div className="check2" />
        </div>
        <div className="remember-me9">
          <div className="monday">Sunday</div>
          <div className="check2" />
        </div>
        <div className="remember-me10">
          <div className="monday">Tuesday</div>
          <div className="check2" />
        </div>
        <div className="remember-me11">
          <div className="monday">Tuesday</div>
          <div className="check2" />
        </div>
        <div className="remember-me12">
          <div className="monday">Saturday</div>
          <div className="check2" />
        </div>
        <div className="remember-me13">
          <div className="monday">Saturday</div>
          <div className="check2" />
        </div>
        <div className="remember-me14">
          <div className="monday">Thursday</div>
          <div className="check2" />
        </div>
        <div className="remember-me15">
          <div className="monday">Thursday</div>
          <div className="check2" />
        </div>
        <div className="senior-software-engineer-container">
          <div className="senior-software-engineer2">Generated Schedule</div>
          <img className="image-3-icon2" alt="" src="/image-31@2x.png" />
        </div>
        <div
          className="notify-candidates-wrapper"
          onClick={onFrameContainer6Click}
        >
          <div className="notify-candidates">Notify Candidates</div>
        </div>
        <div
          className="generate-schedule-wrapper"
          onClick={onFrameContainer7Click}
        >
          <div className="generate-schedule">Generate Schedule</div>
        </div>
        <div className="candidates20">Candidates</div>
        <div className="div1">24</div>
        <div className="candidates-accomodated">Candidates Accomodated</div>
        <div className="div2">20</div>
      </div>
      <div className="frame-parent20">
        <div className="frame-wrapper19">
          <div className="profile-wrapper17">
            <div className="profile19">PROFILE</div>
          </div>
        </div>
        <div className="general-parent15">
          <div className="general17">GENERAL</div>
          <div className="tab128">
            <div className="tab-child142" />
            <img className="vector-icon123" alt="" src="/vector1.svg" />
            <div className="dashboard19">Dashboard</div>
          </div>
          <div className="tab128">
            <div className="tab-child142" />
            <img className="vector-icon124" alt="" src="/vector2.svg" />
            <div className="dashboard19">Chat</div>
          </div>
          <div className="tab128">
            <div className="tab-child142" />
            <img className="calendar-icon17" alt="" src="/calendar.svg" />
            <div className="dashboard19">Calendar</div>
          </div>
        </div>
        <div className="company-parent17">
          <div className="company19">COMPANY</div>
          <div className="tab131">
            <div className="tab-child142" />
            <img className="calendar-icon17" alt="" src="/accountgroup.svg" />
            <div className="dashboard19">Team</div>
          </div>
        </div>
        <div className="recruitment-parent15">
          <div className="general17">RECRUITMENT</div>
          <div className="tab132">
            <div className="tab-child146" />
            <img className="briefcase-icon19" alt="" src="/briefcase.svg" />
            <div className="dashboard19">Jobs</div>
            <img className="tab-child147" alt="" src="/rectangle-268.svg" />
          </div>
          <div className="tab128">
            <div className="tab-child142" />
            <img className="vector-icon125" alt="" src="/vector3.svg" />
            <div className="dashboard19">Candidates</div>
          </div>
          <div className="tab128">
            <div className="tab-child142" />
            <img className="calendar-icon17" alt="" src="/creditcard.svg" />
            <div className="dashboard19">Career Site</div>
          </div>
        </div>
        <div className="visit-our-help19">Visit our help centre</div>
        <img className="settings-icon19" alt="" src="/settings.svg" />
        <div className="frame-child29" />
        <div className="frame-parent21">
          <div className="frame-wrapper20">
            <div className="profile-wrapper18">
              <div className="profile20">PROFILE</div>
            </div>
          </div>
          <div className="general-parent15">
            <div className="general17">GENERAL</div>
            <div className="tab135" onClick={onTabContainerClick}>
              <div className="tab-child142" />
              <img className="vector-icon123" alt="" src="/vector1.svg" />
              <div className="dashboard19">Dashboard</div>
            </div>
            <div className="tab128">
              <div className="tab-child142" />
              <img className="vector-icon124" alt="" src="/vector2.svg" />
              <div className="dashboard19">Chat</div>
            </div>
            <div className="tab128">
              <div className="tab-child142" />
              <img className="calendar-icon17" alt="" src="/calendar.svg" />
              <div className="dashboard19">Calendar</div>
            </div>
          </div>
          <div className="company-parent17">
            <div className="company19">COMPANY</div>
            <div className="tab131">
              <div className="tab-child142" />
              <img className="calendar-icon17" alt="" src="/accountgroup.svg" />
              <div className="dashboard19">Team</div>
            </div>
          </div>
          <div className="recruitment-parent15">
            <div className="general17">RECRUITMENT</div>
            <div className="tab132">
              <div className="tab-child146" />
              <img className="briefcase-icon19" alt="" src="/briefcase.svg" />
              <div className="dashboard19">Jobs</div>
              <img className="tab-child147" alt="" src="/rectangle-268.svg" />
            </div>
            <div className="tab135" onClick={onTabContainer1Click}>
              <div className="tab-child142" />
              <img className="vector-icon125" alt="" src="/vector3.svg" />
              <div className="dashboard19">Candidates</div>
            </div>
            <div className="tab128">
              <div className="tab-child142" />
              <img className="calendar-icon17" alt="" src="/creditcard.svg" />
              <div className="dashboard19">Career Site</div>
            </div>
          </div>
          <div className="visit-our-help19">Visit our help centre</div>
          <img className="settings-icon19" alt="" src="/settings.svg" />
          <div className="frame-child29" />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro1410;
