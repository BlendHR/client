import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HelpCentre from "./HelpCenter";
import Recruitment from "./RecruitmentSection";

const Navbar = () => {
    const navigate = useNavigate();

    const onTabContainerClick = useCallback(() => {
      navigate("/dashboard");
    }, [navigate]);
  
    const onTabContainer2Click = useCallback(() => {
      navigate("/macbook-pro-141");
    }, [navigate]);
  
    const onTabContainer1Click = useCallback(() => {
      navigate("/macbook-pro-148");
    }, [navigate]);
  
    const onTabContainer3Click = useCallback(() => {
      navigate("/macbook-pro-148");
    }, [navigate]);
  
    const onTabContainer12Click = useCallback(() => {
      navigate("/macbook-pro-148");
    }, [navigate]);

    // Add more navigation functions as needed

    return (
        <div className="frame-parent30">
        <div className="frame-wrapper25">
          <div className="profile-wrapper22">
            <div className="next1">PROFILE</div>
          </div>
        </div>
        <div className="general-parent18">
          <div className="general20">GENERAL</div>
          <div className="tab150">
            <div className="tab-child167" />
            <img className="vector-icon133" alt="" src="/vector1.svg" />
            <div className="dashboard22">Dashboard</div>
          </div>
          <div className="tab150">
            <div className="tab-child167" />
            <img className="vector-icon134" alt="" src="/vector2.svg" />
            <div className="dashboard22">Chat</div>
          </div>
          <div className="tab150">
            <div className="tab-child167" />
            <img className="calendar-icon20" alt="" src="/calendar.svg" />
            <div className="dashboard22">Calendar</div>
          </div>
        </div>
        <div className="company-parent21">
          <div className="company23">COMPANY</div>
          <div className="tab153">
            <div className="tab-child167" />
            <img className="calendar-icon20" alt="" src="/accountgroup.svg" />
            <div className="dashboard22">Team</div>
          </div>
        </div>
        <div className="recruitment-parent18">
          <div className="general20">RECRUITMENT</div>
          <div className="tab154">
            <div className="tab-child171" />
            <img className="briefcase-icon22" alt="" src="/briefcase.svg" />
            <div className="dashboard22">Jobs</div>
            <img className="tab-child172" alt="" src="/rectangle-268.svg" />
          </div>
          <div className="tab150">
            <div className="tab-child167" />
            <img className="vector-icon135" alt="" src="/vector3.svg" />
            <div className="dashboard22">Candidates</div>
          </div>
          <div className="tab150">
            <div className="tab-child167" />
            <img className="calendar-icon20" alt="" src="/creditcard.svg" />
            <div className="dashboard22">Career Site</div>
          </div>
        </div>
        <div className="visit-our-help25">Visit our help centre</div>
        <img className="settings-icon25" alt="" src="/settings.svg" />
        <div className="frame-child37" />
        <div className="frame-parent31">
          <div className="frame-wrapper26">
            <div className="profile-wrapper23">
              <div className="profile26">PROFILE</div>
            </div>
          </div>
          <div className="general-parent18">
            <div className="general20">GENERAL</div>
            <div className="tab157" onClick={onTabContainerClick}>
              <div className="tab-child167" />
              <img className="vector-icon133" alt="" src="/vector1.svg" />
              <div className="dashboard22">Dashboard</div>
            </div>
            <div className="tab150">
              <div className="tab-child167" />
              <img className="vector-icon134" alt="" src="/vector2.svg" />
              <div className="dashboard22">Chat</div>
            </div>
            <div className="tab150">
              <div className="tab-child167" />
              <img className="calendar-icon20" alt="" src="/calendar.svg" />
              <div className="dashboard22">Calendar</div>
            </div>
          </div>
          <div className="company-parent21">
            <div className="company23">COMPANY</div>
            <div className="tab153">
              <div className="tab-child167" />
              <img className="calendar-icon20" alt="" src="/accountgroup.svg" />
              <div className="dashboard22">Team</div>
            </div>
          </div>
          <div className="recruitment-parent18">
            {/* <Recruitment /> */}
            <div className="general20">RECRUITMENT</div>
            <div className="tab154">
              <div className="tab-child171" />
              <img className="briefcase-icon22" alt="" src="/briefcase.svg" />
              <div className="dashboard22">Jobs</div>
              <img className="tab-child172" alt="" src="/rectangle-268.svg" />
            </div>
            <div className="tab157" onClick={onTabContainer1Click}>
              <div className="tab-child167" />
              <img className="vector-icon135" alt="" src="/vector3.svg" />
              <div className="dashboard22">Candidates</div>
            </div>
            <div className="tab150">
              <div className="tab-child167" />
              <img className="calendar-icon20" alt="" src="/creditcard.svg" />
              <div className="dashboard22">Career Site</div>
            </div>
          </div>
            <HelpCentre />
        </div>
      </div>
    );
};

export default Navbar;