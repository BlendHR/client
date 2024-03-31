import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationFormContainer from "../components/application-form-container";
import FilterFormContainer from "../components/filter-form-container";
import RecruiterFormContainer from "../components/recruiter-form-container";
import "./create-jobs.css";

const MacBookPro144 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/createajob");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/createjobs3");
  }, [navigate]);

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="create-jobs-2">
      <div className="ellipse-group">
        <div className="frame-child8" />
        <img
          className="bell-badge-outline-icon1"
          alt=""
          src="/bellbadgeoutline.svg"
        />
        <img className="frame-child9" alt="" src="/group-10.svg" />
        <div className="what-are-you1">what are you looking for?</div>
        <img className="vector-icon53" alt="" src="/vector10.svg" />
        <div className="chevron-left-group" onClick={onFrameContainerClick}>
          <img className="chevron-left-icon1" alt="" src="/chevronleft.svg" />
          <div className="back">Back</div>
        </div>
      </div>
      <div className="create-job">Create Job</div>
      <div className="frame-parent5">
        <div className="next-wrapper" onClick={onFrameContainer2Click}>
          <div className="next">Next</div>
        </div>
        <div className="add-wrapper">
          <div className="next">Add</div>
        </div>
        <ApplicationFormContainer
          applicationStatus="Applications"
          startFromText="Starts From"
          eventDateText="Deadline"
          dateLabelText="dd/mm/yyyy"
        />
        <ApplicationFormContainer
          applicationStatus="Interview 1"
          startFromText="Starts From"
          eventDateText="Starts From"
          dateLabelText="dd/mm/yyyy"
          propTop="832px"
          propLeft="108px"
          propHeight="27px"
          propBackgroundColor="unset"
        />
        <div className="duration-parent">
          <div className="duration">Duration</div>
          <div className="minutes-wrapper">
            <div className="minutes">minutes</div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="from-time-parent">
            <div className="duration">From Time</div>
            <div className="minutes-wrapper">
              <div className="minutes">minutes</div>
            </div>
          </div>
          <div className="from-time-parent">
            <div className="duration">From Time</div>
            <div className="minutes-wrapper">
              <div className="minutes">minutes</div>
            </div>
          </div>
        </div>
        <div className="senior-software-engineer-parent">
          <div className="senior-software-engineer">Edit Application Form</div>
          <img className="image-3-icon" alt="" src="/image-3@2x.png" />
        </div>
        <div className="add-test-stage-wrapper">
          <div className="add-test-stage">Add Test Stage</div>
        </div>
        <div className="add-interview-stage-wrapper">
          <div className="add-interview-stage">Add Interview Stage</div>
        </div>
        <FilterFormContainer
          jobDetailsType="Interview Type"
          propTop="1046px"
          propLeft="86px"
        />
        <div className="frame-wrapper6">
          <RecruiterFormContainer />
        </div>
      </div>
      <div className="frame-parent7">
        <div className="frame-wrapper7">
          <div className="profile-wrapper5">
            <div className="next">PROFILE</div>
          </div>
        </div>
        <div className="general-parent5">
          <div className="general7">GENERAL</div>
          <div className="tab49">
            <div className="tab-child53" />
            <img className="vector-icon54" alt="" src="/vector1.svg" />
            <div className="dashboard7">Dashboard</div>
          </div>
          <div className="tab49">
            <div className="tab-child53" />
            <img className="vector-icon55" alt="" src="/vector2.svg" />
            <div className="dashboard7">Chat</div>
          </div>
          <div className="tab49">
            <div className="tab-child53" />
            <img className="calendar-icon7" alt="" src="/calendar.svg" />
            <div className="dashboard7">Calendar</div>
          </div>
        </div>
        <div className="company-parent5">
          <div className="company7">COMPANY</div>
          <div className="tab52">
            <div className="tab-child53" />
            <img className="calendar-icon7" alt="" src="/accountgroup.svg" />
            <div className="dashboard7">Team</div>
          </div>
        </div>
        <div className="recruitment-parent5">
          <div className="general7">RECRUITMENT</div>
          <div className="tab53">
            <div className="tab-child57" />
            <img className="briefcase-icon7" alt="" src="/briefcase.svg" />
            <div className="dashboard7">Jobs</div>
            <img className="tab-child58" alt="" src="/rectangle-268.svg" />
          </div>
          <div className="tab49">
            <div className="tab-child53" />
            <img className="vector-icon56" alt="" src="/vector3.svg" />
            <div className="dashboard7">Candidates</div>
          </div>
          <div className="tab49">
            <div className="tab-child53" />
            <img className="calendar-icon7" alt="" src="/creditcard.svg" />
            <div className="dashboard7">Career Site</div>
          </div>
        </div>
        <div className="visit-our-help7">Visit our help centre</div>
        <img className="settings-icon7" alt="" src="/settings.svg" />
        <div className="frame-child10" />
        <div className="frame-parent8">
          <div className="frame-wrapper8">
            <div className="profile-wrapper6">
              <div className="profile8">PROFILE</div>
            </div>
          </div>
          <div className="general-parent5">
            <div className="general7">GENERAL</div>
            <div className="tab56" onClick={onTabContainerClick}>
              <div className="tab-child53" />
              <img className="vector-icon54" alt="" src="/vector1.svg" />
              <div className="dashboard7">Dashboard</div>
            </div>
            <div className="tab49">
              <div className="tab-child53" />
              <img className="vector-icon55" alt="" src="/vector2.svg" />
              <div className="dashboard7">Chat</div>
            </div>
            <div className="tab49">
              <div className="tab-child53" />
              <img className="calendar-icon7" alt="" src="/calendar.svg" />
              <div className="dashboard7">Calendar</div>
            </div>
          </div>
          <div className="company-parent5">
            <div className="company7">COMPANY</div>
            <div className="tab52">
              <div className="tab-child53" />
              <img className="calendar-icon7" alt="" src="/accountgroup.svg" />
              <div className="dashboard7">Team</div>
            </div>
          </div>
          <div className="recruitment-parent5">
            <div className="general7">RECRUITMENT</div>
            <div className="tab53">
              <div className="tab-child57" />
              <img className="briefcase-icon7" alt="" src="/briefcase.svg" />
              <div className="dashboard7">Jobs</div>
              <img className="tab-child58" alt="" src="/rectangle-268.svg" />
            </div>
            <div className="tab56" onClick={onTabContainer1Click}>
              <div className="tab-child53" />
              <img className="vector-icon56" alt="" src="/vector3.svg" />
              <div className="dashboard7">Candidates</div>
            </div>
            <div className="tab49">
              <div className="tab-child53" />
              <img className="calendar-icon7" alt="" src="/creditcard.svg" />
              <div className="dashboard7">Career Site</div>
            </div>
          </div>
          <div className="visit-our-help7">Visit our help centre</div>
          <img className="settings-icon7" alt="" src="/settings.svg" />
          <div className="frame-child10" />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro144;
