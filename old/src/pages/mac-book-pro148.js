import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent3 from "../components/group-component3";
import GroupComponent2 from "../components/group-component2";
import GroupComponent from "../components/group-component";
import ScreeningContainer from "../components/screening-container";
import FrontEndDeveloperContainer from "../components/front-end-developer-container";
import "./mac-book-pro148.css";

const MacBookPro148 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-4");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/macbook-pro-14-13");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="macbook-pro-14-12">
      <div className="group-parent1">
        <GroupComponent3
          emptyGroupSequence="10"
          propColor="#000"
          groupDivTop="43px"
          groupDivLeft="82px"
          ayeshaMasroorWidth="192px"
          vectorIconTop="21.28%"
          vectorIconBottom="75.18%"
          vectorIconTop1="76.6%"
          vectorIconBottom1="9.22%"
          vectorIconTop2="77.3%"
          vectorIconBottom2="9.36%"
          divOpacity="unset"
          onGroupContainerClick={onGroupContainerClick}
        />
        <GroupComponent3
          emptyGroupSequence="8"
          propColor="#000"
          groupDivTop="220px"
          groupDivLeft="79px"
          ayeshaMasroorWidth="192px"
          vectorIconTop="21.28%"
          vectorIconBottom="75.18%"
          vectorIconTop1="76.6%"
          vectorIconBottom1="9.22%"
          vectorIconTop2="77.3%"
          vectorIconBottom2="9.36%"
          divOpacity="0.8"
        />
        <GroupComponent3
          emptyGroupSequence="8"
          propColor="#000"
          groupDivTop="398px"
          groupDivLeft="79px"
          ayeshaMasroorWidth="192px"
          vectorIconTop="21.28%"
          vectorIconBottom="75.18%"
          vectorIconTop1="76.6%"
          vectorIconBottom1="9.22%"
          vectorIconTop2="77.3%"
          vectorIconBottom2="9.36%"
          divOpacity="0.8"
        />
        <GroupComponent3
          emptyGroupSequence="7.8"
          propColor="#000"
          groupDivTop="576px"
          groupDivLeft="82px"
          ayeshaMasroorWidth="160px"
          vectorIconTop="20.57%"
          vectorIconBottom="75.89%"
          vectorIconTop1="75.89%"
          vectorIconBottom1="9.93%"
          vectorIconTop2="76.6%"
          vectorIconBottom2="10.07%"
          divOpacity="unset"
        />
        <GroupComponent2 groupDivLeft="454px" groupDivTop="576px" />
        <GroupComponent3
          emptyGroupSequence="9"
          propColor="#000"
          groupDivTop="43px"
          groupDivLeft="826px"
          ayeshaMasroorWidth="160px"
          vectorIconTop="20.57%"
          vectorIconBottom="75.89%"
          vectorIconTop1="75.89%"
          vectorIconBottom1="9.93%"
          vectorIconTop2="76.6%"
          vectorIconBottom2="10.07%"
          divOpacity="unset"
        />
        <GroupComponent3
          emptyGroupSequence="7.8"
          propColor="#000"
          groupDivTop="220px"
          groupDivLeft="823px"
          ayeshaMasroorWidth="160px"
          vectorIconTop="20.57%"
          vectorIconBottom="75.89%"
          vectorIconTop1="75.89%"
          vectorIconBottom1="9.93%"
          vectorIconTop2="76.6%"
          vectorIconBottom2="10.07%"
          divOpacity="unset"
        />
        <GroupComponent3
          emptyGroupSequence="7.8"
          propColor="#000"
          groupDivTop="398px"
          groupDivLeft="823px"
          ayeshaMasroorWidth="160px"
          vectorIconTop="20.57%"
          vectorIconBottom="75.89%"
          vectorIconTop1="75.89%"
          vectorIconBottom1="9.93%"
          vectorIconTop2="76.6%"
          vectorIconBottom2="10.07%"
          divOpacity="unset"
        />
        <GroupComponent2 groupDivLeft="826px" groupDivTop="576px" />
        <GroupComponent />
        <GroupComponent />
        <GroupComponent />
      </div>
      <ScreeningContainer
        eventCountText="Screening             (24)"
        interviewCountText="Interview             (12)"
        propBorder="unset"
        propBorder1="1px solid var(--t1)"
        propBorder2="unset"
        propLeft="572px"
        onRectangle2Click={onRectangle2Click}
      />
      <FrontEndDeveloperContainer
        onFrameContainer3Click={onFrameContainer3Click}
      />
      <div className="frame-parent1">
        <div className="frame-wrapper2">
          <div className="profile-wrapper1">
            <div className="profile3">PROFILE</div>
          </div>
        </div>
        <div className="general-parent1">
          <div className="general3">GENERAL</div>
          <div className="tab21">
            <div className="tab-child21" />
            <img className="vector-icon40" alt="" src="/vector1.svg" />
            <div className="dashboard3">Dashboard</div>
          </div>
          <div className="tab21">
            <div className="tab-child21" />
            <img className="vector-icon41" alt="" src="/vector2.svg" />
            <div className="dashboard3">Chat</div>
          </div>
          <div className="tab21">
            <div className="tab-child21" />
            <img className="calendar-icon3" alt="" src="/calendar.svg" />
            <div className="dashboard3">Calendar</div>
          </div>
        </div>
        <div className="company-parent1">
          <div className="company3">COMPANY</div>
          <div className="tab24">
            <div className="tab-child21" />
            <img className="calendar-icon3" alt="" src="/accountgroup.svg" />
            <div className="dashboard3">Team</div>
          </div>
        </div>
        <div className="recruitment-parent1">
          <div className="general3">RECRUITMENT</div>
          <div className="tab25">
            <div className="tab-child25" />
            <img className="briefcase-icon3" alt="" src="/briefcase.svg" />
            <div className="dashboard3">Jobs</div>
            <img className="tab-child26" alt="" src="/rectangle-268.svg" />
          </div>
          <div className="tab21">
            <div className="tab-child21" />
            <img className="vector-icon42" alt="" src="/vector3.svg" />
            <div className="dashboard3">Candidates</div>
          </div>
          <div className="tab21">
            <div className="tab-child21" />
            <img className="calendar-icon3" alt="" src="/creditcard.svg" />
            <div className="dashboard3">Career Site</div>
          </div>
        </div>
        <div className="visit-our-help3">Visit our help centre</div>
        <img className="settings-icon3" alt="" src="/settings.svg" />
        <div className="frame-child3" />
        <div className="frame-parent2">
          <div className="frame-wrapper3">
            <div className="profile-wrapper2">
              <div className="profile4">PROFILE</div>
            </div>
          </div>
          <div className="general-parent1">
            <div className="general3">GENERAL</div>
            <div className="tab28" onClick={onTabContainerClick}>
              <div className="tab-child21" />
              <img className="vector-icon40" alt="" src="/vector1.svg" />
              <div className="dashboard3">Dashboard</div>
            </div>
            <div className="tab21">
              <div className="tab-child21" />
              <img className="vector-icon41" alt="" src="/vector2.svg" />
              <div className="dashboard3">Chat</div>
            </div>
            <div className="tab21">
              <div className="tab-child21" />
              <img className="calendar-icon3" alt="" src="/calendar.svg" />
              <div className="dashboard3">Calendar</div>
            </div>
          </div>
          <div className="company-parent1">
            <div className="company3">COMPANY</div>
            <div className="tab24">
              <div className="tab-child21" />
              <img className="calendar-icon3" alt="" src="/accountgroup.svg" />
              <div className="dashboard3">Team</div>
            </div>
          </div>
          <div className="recruitment-parent1">
            <div className="general3">RECRUITMENT</div>
            <div className="tab25">
              <div className="tab-child25" />
              <img className="briefcase-icon3" alt="" src="/briefcase.svg" />
              <div className="dashboard3">Jobs</div>
              <img className="tab-child26" alt="" src="/rectangle-268.svg" />
            </div>
            <div className="tab28" onClick={onTabContainer1Click}>
              <div className="tab-child21" />
              <img className="vector-icon42" alt="" src="/vector3.svg" />
              <div className="dashboard3">Candidates</div>
            </div>
            <div className="tab21">
              <div className="tab-child21" />
              <img className="calendar-icon3" alt="" src="/creditcard.svg" />
              <div className="dashboard3">Career Site</div>
            </div>
          </div>
          <div className="visit-our-help3">Visit our help centre</div>
          <img className="settings-icon3" alt="" src="/settings.svg" />
          <div className="frame-child3" />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro148;
