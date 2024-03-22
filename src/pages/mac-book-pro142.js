import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FilterFormContainer1 from "../components/filter-form-container1";
import FilterFormContainer from "../components/filter-form-container";
import OverviewContainer from "../components/overview-container";
import "./mac-book-pro142.css";
import Navbar from "../components/Navbar";

const MacBookPro142 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/createjobs-2");
  }, [navigate]);

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="create-a-job">
      <div className="ellipse-parent4">
        <div className="frame-child35" />
        <img
          className="bell-badge-outline-icon6"
          alt=""
          src="/bellbadgeoutline.svg"
        />
        <img className="frame-child36" alt="" src="/group-10.svg" />
        <div className="what-are-you6">what are you looking for?</div>
        <img className="vector-icon132" alt="" src="/vector10.svg" />
        <div className="chevron-left-parent4" onClick={onFrameContainerClick}>
          <img className="chevron-left-icon6" alt="" src="/chevronleft.svg" />
          <div className="back3">Back</div>
        </div>
      </div>
      <div className="create-job2">Create Job</div>
      <div className="frame-parent29">
        <div className="title-parent">
          <div className="title">Title</div>
          <div className="full-name-wrapper">
            <div className="full-name2">Full name</div>
          </div>
        </div>
        <div className="profession-parent">
          <div className="title">Profession</div>
          <div className="full-name-container">
            <div className="full-name2">Full name</div>
          </div>
        </div>
        <div className="discipline-parent">
          <div className="title">Discipline</div>
          <div className="full-name-container">
            <div className="full-name2">Full name</div>
          </div>
        </div>
        <FilterFormContainer1
          locationType="Worksite"
          siteDimensionsCode="/chevron.svg"
          workLocation="Onsite"
          workLocationType="Remote"
          workLocationType2="Hybrid"
        />
        <FilterFormContainer1
          locationType="City"
          siteDimensionsCode="/chevron1.svg"
          workLocation="Karachi"
          workLocationType="Lahore"
          workLocationType2="Islamabad"
          propLeft="648px"
          propBackgroundColor="unset"
          propTop="337px"
          propBorder="1px solid var(--text)"
          propColor="#757575"
        />
        <FilterFormContainer1
          locationType="Role Type"
          siteDimensionsCode="/chevron1.svg"
          workLocation="Team member"
          workLocationType="Team lead"
          workLocationType2="Individual Contributor"
          propLeft="56px"
          propBackgroundColor="unset"
          propTop="478px"
          propBorder="1px solid var(--text)"
          propColor="#666"
        />
        <FilterFormContainer jobDetailsType="Employment Type" />
        <OverviewContainer jobDescription="Overview" />
        <OverviewContainer
          jobDescription="Qualifications"
          colorPickerListItemTop="963px"
          colorPickerListItemLeft="69px"
        />
        <OverviewContainer
          jobDescription="Requirements"
          colorPickerListItemTop="1302px"
          colorPickerListItemLeft="66px"
        />
        <div className="next-container" onClick={onFrameContainer6Click}>
          <div className="next1">Next</div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default MacBookPro142;
