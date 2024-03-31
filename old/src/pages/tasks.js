import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GeneralContainer from "../components/general-container";
import "./tasks.css";

const Tasks = () => {
  const navigate = useNavigate();

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer2Click = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  const onTabContainer3Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  const onTabContainer12Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  const onTabContainer4Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onEllipse1Click = useCallback(() => {
    navigate("/job-infographics");
  }, [navigate]);

  return (
    <div className="dashboard11">
      <div className="frame-parent11">
        <div className="general-parent9">
          <div className="general11">GENERAL</div>
          <div className="tab77">
            <div className="tab-child85" />
            <img className="vector-icon67" alt="" src="/vector1.svg" />
            <div className="dashboard12">Dashboard</div>
            <img className="tab-child86" alt="" src="/group-25.svg" />
          </div>
          <div className="tab77">
            <div className="tab-child85" />
            <img className="vector-icon68" alt="" src="/vector2.svg" />
            <div className="dashboard12">Chat</div>
          </div>
          <div className="tab77">
            <div className="tab-child85" />
            <img className="calendar-icon11" alt="" src="/calendar.svg" />
            <div className="dashboard12">Calendar</div>
          </div>
        </div>
        <div className="frame-wrapper11">
          <div className="profile-wrapper9">
            <div className="profile11">PROFILE</div>
          </div>
        </div>
        <div className="company-parent9">
          <div className="company11">COMPANY</div>
          <div className="tab80">
            <div className="tab-child85" />
            <img className="calendar-icon11" alt="" src="/accountgroup.svg" />
            <div className="dashboard12">Team</div>
          </div>
        </div>
        <div className="recruitment11">RECRUITMENT</div>
        <div className="tab81" onClick={onTabContainer2Click}>
          <div className="tab-child90" />
          <img className="briefcase-icon11" alt="" src="/briefcase.svg" />
          <div className="jobs11">Jobs</div>
        </div>
        <div className="tab82" onClick={onTabContainer1Click}>
          <div className="tab-child85" />
          <img className="vector-icon69" alt="" src="/vector3.svg" />
          <div className="dashboard12">Candidates</div>
        </div>
        <div className="tab83">
          <div className="tab-child85" />
          <img className="calendar-icon11" alt="" src="/creditcard.svg" />
          <div className="dashboard12">Career Site</div>
        </div>
        <div className="visit-our-help11">Visit our help centre</div>
        <img className="settings-icon11" alt="" src="/settings.svg" />
        <div className="frame-parent12">
          <div className="frame-wrapper12">
            <div className="profile-wrapper10">
              <div className="profile11">PROFILE</div>
            </div>
          </div>
          <div className="general-parent10">
            <div className="general11">GENERAL</div>
            <div className="tab77">
              <div className="tab-child85" />
              <img className="vector-icon67" alt="" src="/vector1.svg" />
              <div className="dashboard12">Dashboard</div>
            </div>
            <div className="tab77">
              <div className="tab-child85" />
              <img className="vector-icon68" alt="" src="/vector2.svg" />
              <div className="dashboard12">Chat</div>
            </div>
            <div className="tab77">
              <div className="tab-child85" />
              <img className="calendar-icon11" alt="" src="/calendar.svg" />
              <div className="dashboard12">Calendar</div>
            </div>
          </div>
          <div className="company-parent10">
            <div className="company11">COMPANY</div>
            <div className="tab80">
              <div className="tab-child85" />
              <img className="calendar-icon11" alt="" src="/accountgroup.svg" />
              <div className="dashboard12">Team</div>
            </div>
          </div>
          <div className="recruitment-parent9">
            <div className="general11">RECRUITMENT</div>
            <div className="tab88">
              <div className="tab-child97" />
              <img className="briefcase-icon12" alt="" src="/briefcase.svg" />
              <div className="dashboard12">Jobs</div>
              <img className="tab-child98" alt="" src="/rectangle-268.svg" />
            </div>
            <div className="tab77">
              <div className="tab-child85" />
              <img className="vector-icon69" alt="" src="/vector3.svg" />
              <div className="dashboard12">Candidates</div>
            </div>
            <div className="tab77">
              <div className="tab-child85" />
              <img className="calendar-icon11" alt="" src="/creditcard.svg" />
              <div className="dashboard12">Career Site</div>
            </div>
          </div>
          <div className="visit-our-help12">Visit our help centre</div>
          <img className="settings-icon11" alt="" src="/settings.svg" />
          <div className="frame-child16" />
          <div className="frame-parent13">
            <div className="frame-wrapper13">
              <div className="profile-wrapper11">
                <div className="profile13">PROFILE</div>
              </div>
            </div>
            <GeneralContainer onTabContainer2Click={onTabContainerClick} />
            <div className="company-parent10">
              <div className="company11">COMPANY</div>
              <div className="tab80">
                <div className="tab-child85" />
                <img
                  className="calendar-icon11"
                  alt=""
                  src="/accountgroup.svg"
                />
                <div className="dashboard12">Team</div>
              </div>
            </div>
            <div className="recruitment-parent9">
              <div className="general11">RECRUITMENT</div>
              <div className="tab92" onClick={onTabContainer3Click}>
                <div className="tab-child85" />
                <img className="briefcase-icon13" alt="" src="/briefcase.svg" />
                <div className="dashboard12">Jobs</div>
              </div>
              <div className="tab92" onClick={onTabContainer12Click}>
                <div className="tab-child85" />
                <img className="vector-icon69" alt="" src="/vector3.svg" />
                <div className="dashboard12">Candidates</div>
              </div>
              <div className="tab77">
                <div className="tab-child85" />
                <img className="calendar-icon11" alt="" src="/creditcard.svg" />
                <div className="dashboard12">Career Site</div>
              </div>
            </div>
            <div className="visit-our-help12">Visit our help centre</div>
            <img className="settings-icon11" alt="" src="/settings.svg" />
          </div>
        </div>
      </div>
      <div className="tab95" onClick={onTabContainer4Click}>
        <div className="tab-child85" />
        <img className="vector-icon67" alt="" src="/vector1.svg" />
        <div className="dashboard12">Dashboard</div>
      </div>
      <div className="ellipse-parent1">
        <div className="frame-child17" />
        <img
          className="bell-badge-outline-icon3"
          alt=""
          src="/bellbadgeoutline.svg"
        />
        <img className="frame-child18" alt="" src="/group-10.svg" />
        <div className="what-are-you3">what are you looking for?</div>
        <img className="vector-icon75" alt="" src="/vector10.svg" />
        <div className="chevron-left-parent1">
          <img className="chevron-left-icon3" alt="" src="/chevronleft.svg" />
          <div className="back1">Back</div>
        </div>
      </div>
      <div className="analytics">Analytics</div>
      <div className="dashboard-child" />
      <div className="dashboard-item" />
      <div className="dashboard-inner" />
      <div className="dashboard-child1" />
      <div className="dashboard-child2" />
      <div className="dashboard-child3" />
      <div className="dashboard-child4" />
      <div className="dashboard-child5" />
      <div className="hiring-pipeline">Hiring Pipeline</div>
      <div className="dashboard-child6" />
      <div className="type-of-job">Type of job</div>
      <img className="vector-icon76" alt="" src="/vector17.svg" />
      <div className="jobs14">Jobs</div>
      <div className="total-applications-10-container">
        <span>
          <span>Total applications</span>
          <span className="span">{` `}</span>
        </span>
        <span className="span">
          <span className="span2">10</span>
        </span>
      </div>
      <div className="total-applications-10-container1">
        <span>
          <span>Total applications</span>
          <span className="span">{` `}</span>
        </span>
        <span className="span">
          <span className="span2">10</span>
        </span>
      </div>
      <div className="total-applications-10-container2">
        <span>
          <span>Total applications</span>
          <span className="span">{` `}</span>
        </span>
        <span className="span">
          <span className="span2">10</span>
        </span>
      </div>
      <div className="total-applications-10-container3">
        <span>
          <span>Total applications</span>
          <span className="span">{` `}</span>
        </span>
        <span className="span">
          <span className="span2">10</span>
        </span>
      </div>
      <div className="xyz-designer">xyz designer</div>
      <div className="xyz-designer1">xyz designer</div>
      <div className="xyz-designer2">xyz designer</div>
      <div className="xyz-designer3">xyz designer</div>
      <div className="my-task">My task</div>
      <div className="dashboard-child7" />
      <div className="dashboard-child8" />
      <div className="today">Today</div>
      <div className="completed">Completed</div>
      <div className="dashboard-child9" />
      <div className="dashboard-child10" />
      <img className="vector-icon77" alt="" src="/vector18.svg" />
      <div className="add1">add</div>
      <div className="pm-do-task">07:00 - 08:00 pm do task xyz</div>
      <div className="pm-do-task1">07:00 - 08:00 pm do task xyz</div>
      <div className="pm-do-task2">07:00 - 08:00 pm do task xyz</div>
      <div className="pm-do-task3">07:00 - 08:00 pm do task xyz</div>
      <div className="job-summary">Job Summary</div>
      <div className="employee">Employee</div>
      <div className="dashboard-child11" />
      <img
        className="dashboard-child12"
        alt=""
        src="/ellipse-105.svg"
        onClick={onEllipse1Click}
      />
      <div className="div">15</div>
      <div className="total-jobs">Total jobs</div>
      <div className="view-all">View All</div>
      <div className="published-5">
        <span className="published">{`Published      `}</span>
        <span className="span2">5</span>
      </div>
      <div className="on-hold-4-container">
        <span className="published">{`On hold      `}</span>
        <span className="span2">4</span>
      </div>
      <div className="internal-3">
        <span className="published">{`Internal      `}</span>
        <span className="span2">3</span>
      </div>
      <div className="closed-1">Closed 1</div>
      <div className="private-2">Private 2</div>
      <div className="dashboard-child13" />
      <div className="dashboard-child14" />
      <div className="dashboard-child15" />
      <div className="dashboard-child16" />
      <div className="design-team">Design Team</div>
      <div className="design-team1">Design Team</div>
      <div className="design-team2">Design Team</div>
      <div className="design-team3">Design Team</div>
      <div className="total-members-10">Total Members 10</div>
      <div className="total-members-101">Total Members 10</div>
      <div className="total-members-102">Total Members 10</div>
      <div className="total-members-103">Total Members 10</div>
      <img className="clock-icon" alt="" src="/clock.svg" />
      <img className="clock-icon1" alt="" src="/clock.svg" />
      <img className="clock-icon2" alt="" src="/clock.svg" />
      <img className="clock-icon3" alt="" src="/clock.svg" />
    </div>
  );
};

export default Tasks;
