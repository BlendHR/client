import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DesignContainer1 from "../components/design-container1";
import DesignContainer from "../components/design-container";
import ColorGreenThemeLightImage from "../components/color-green-theme-light-image";
import GeneralContainer from "../components/general-container";
import "./job-infographics.css";
import Navbar from "../components/Navbar";

const JobInfographics = () => {
  
  return (
    <div className="job-infographics">
      <div className="ellipse-parent2">
        <div className="frame-child19" />
        <img
          className="bell-badge-outline-icon4"
          alt=""
          src="/bellbadgeoutline.svg"
        />
        <img className="frame-child20" alt="" src="/group-10.svg" />
        <div className="what-are-you4">what are you looking for?</div>
        <img className="vector-icon78" alt="" src="/vector10.svg" />
        <div className="chevron-left-parent2">
          <img className="chevron-left-icon4" alt="" src="/chevronleft.svg" />
          <div className="back-to-jobs1">Back to Jobs</div>
        </div>
      </div>
      <div className="active-jobs">5 Active Jobs</div>
      <DesignContainer1 />
      <DesignContainer
        jobRole="DESIGN"
        jobTitleText="UI/UX Designer"
        jobCount="2"
        jobExperienceYears="35"
        jobDimensionsCode="/chartpie1.svg"
      />
      <div className="marketing-parent">
        <div className="marketing">MARKETING</div>
        <div className="copywriter">Copywriter</div>
        <div className="candidates14">Candidates:</div>
        <div className="see-details">{`See details >`}</div>
        <div className="frame-child21" />
        <div className="new">
          <span className="new-txt">
            <p className="p">0</p>
            <p className="p">NEW</p>
          </span>
        </div>
        <img className="line-icon" alt="" src="/line-23.svg" />
        <div className="frame-child22" />
        <div className="old">
          <span className="new-txt">
            <p className="p">0</p>
            <p className="p">OLD</p>
          </span>
        </div>
        <img className="frame-child23" alt="" />
        <ColorGreenThemeLightImage
          colorGreenThemeLightImage="/avatars1@2x.png"
          colorGreenThemeLightIconWidth="78.2px"
          colorGreenThemeLightIconOverflow="unset"
          colorGreenThemeLightIconHeight="78.2px"
          colorGreenThemeLightIconPosition="absolute"
          colorGreenThemeLightIconTop="153px"
          colorGreenThemeLightIconLeft="118px"
        />
      </div>
      <DesignContainer
        jobRole="DEVELOPMENT"
        jobTitleText="Wordpress Developer"
        jobCount="20"
        jobExperienceYears="65"
        jobDimensionsCode="/chartpie2.svg"
        propTop="572px"
        propLeft="312px"
        propRight="115px"
        propWidth="104px"
      />
      <DesignContainer
        jobRole="DESIGN"
        jobTitleText="Junior Designer"
        jobCount="35"
        jobExperienceYears="40"
        jobDimensionsCode="/chartpie3.svg"
        propTop="574px"
        propLeft="674px"
        propRight="110.4px"
        propWidth="97.6px"
      />
      <Navbar />

    </div>
  );
};

export default JobInfographics;
