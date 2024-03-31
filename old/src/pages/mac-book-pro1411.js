import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FRAMERootContainer from "../components/f-r-a-m-e-root-container";
import CandidateFilterContainer from "../components/candidate-filter-container";
import GroupComponent3 from "../components/group-component3";
import GroupComponent from "../components/group-component";
import GroupComponent2 from "../components/group-component2";
import GroupComponent1 from "../components/group-component1";
import FrameX1 from "../components/frame-x1";
import FrameX from "../components/frame-x";
import "./mac-book-pro1411.css";

const MacBookPro1411 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-4");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  return (
    <div className="jobs23">
      <FRAMERootContainer />
      <CandidateFilterContainer />
      <div className="group-parent3">
        <GroupComponent3
          emptyGroupSequence="9.8"
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
        <GroupComponent />
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
        <GroupComponent2 />
        <GroupComponent1 prop="9" />
        <GroupComponent1 prop="7.8" />
        <GroupComponent1 prop="7.1" />
        <GroupComponent2 groupDivLeft="826px" groupDivTop="576px" />
        <GroupComponent />
        <GroupComponent />
        <GroupComponent />
      </div>
      <div className="frame-parent22" onClick={onFrameContainer3Click}>
        <div className="frame-wrapper21">
          <div className="profile-wrapper19">
            <div className="profile21">PROFILE</div>
          </div>
        </div>
        <div className="general-parent17">
          <div className="general19">GENERAL</div>
          <div className="tab142">
            <div className="tab-child158" />
            <img className="vector-icon129" alt="" src="/vector1.svg" />
            <div className="dashboard21">Dashboard</div>
          </div>
          <div className="tab142">
            <div className="tab-child158" />
            <img className="vector-icon130" alt="" src="/vector2.svg" />
            <div className="dashboard21">Chat</div>
          </div>
          <div className="tab142">
            <div className="tab-child158" />
            <img className="calendar-icon19" alt="" src="/calendar.svg" />
            <div className="dashboard21">Calendar</div>
          </div>
        </div>
        <div className="company-parent19">
          <div className="company21">COMPANY</div>
          <div className="tab145">
            <div className="tab-child158" />
            <img className="calendar-icon19" alt="" src="/accountgroup.svg" />
            <div className="dashboard21">Team</div>
          </div>
        </div>
        <div className="recruitment-parent17">
          <div className="general19">RECRUITMENT</div>
          <div className="tab146">
            <div className="tab-child162" />
            <img className="briefcase-icon21" alt="" src="/briefcase.svg" />
            <div className="dashboard21">Jobs</div>
            <img className="tab-child163" alt="" src="/rectangle-268.svg" />
          </div>
          <div className="tab142">
            <div className="tab-child158" />
            <img className="vector-icon131" alt="" src="/vector3.svg" />
            <div className="dashboard21">Candidates</div>
          </div>
          <div className="tab142">
            <div className="tab-child158" />
            <img className="calendar-icon19" alt="" src="/creditcard.svg" />
            <div className="dashboard21">Career Site</div>
          </div>
        </div>
        <div className="visit-our-help21">Visit our help centre</div>
        <img className="settings-icon21" alt="" src="/settings.svg" />
        <div className="frame-child31" />
        <div className="frame-parent23">
          <div className="frame-wrapper22">
            <div className="profile-wrapper20">
              <div className="profile22">PROFILE</div>
            </div>
          </div>
          <FrameX1 />
          <div className="company-parent20">
            <div className="company21">COMPANY</div>
            <div className="tab145">
              <div className="tab-child158" />
              <img className="calendar-icon19" alt="" src="/accountgroup.svg" />
              <div className="dashboard21">Team</div>
            </div>
          </div>
          <FrameX />
          <div className="visit-our-help22">Visit our help centre</div>
          <img className="settings-icon21" alt="" src="/settings.svg" />
          <div className="frame-child31" />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro1411;
