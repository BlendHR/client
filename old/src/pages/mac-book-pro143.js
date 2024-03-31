import Header from "../components/header";
import BackButtonContainer from "../components/back-button-container";
import ContainerGeneralButtons1 from "../components/container-general-buttons1";
import CompanyContainerButtons from "../components/company-container-buttons";
import RecruitmentFormContainer1 from "../components/recruitment-form-container1";
import ContainerGeneralButtons from "../components/container-general-buttons";
import RecruitmentFormContainer from "../components/recruitment-form-container";
import "./mac-book-pro143.css";

const MacBookPro143 = () => {
  return (
    <div className="macbook-pro-14-4">
      <Header />
      <BackButtonContainer />
      <div className="frame-parent24">
        <button className="candidate-profile-wrapper">
          <div className="candidate-profile">Candidate Profile</div>
        </button>
        <button className="documents-wrapper">
          <div className="candidate-profile">Documents</div>
        </button>
        <button className="documents-wrapper">
          <div className="candidate-profile">Performance</div>
        </button>
        <button className="documents-wrapper">
          <div className="candidate-profile">Timeline</div>
        </button>
      </div>
      <div className="frame-parent25">
        <div className="candidate-information-wrapper">
          <div className="candidate-information">Candidate Information</div>
        </div>
        <div className="full-name-parent">
          <div className="full-name">Full Name</div>
          <div className="leonard-campbell">Leonard Campbell</div>
        </div>
        <div className="status-parent">
          <div className="full-name">Status</div>
          <div className="leonard-campbell">Hired</div>
        </div>
        <div className="rank-parent">
          <div className="full-name">Rank</div>
          <div className="leonard-campbell">3</div>
        </div>
        <div className="applied-on-parent">
          <div className="full-name">Applied On</div>
          <div className="leonard-campbell">June 2, 2023</div>
        </div>
        <div className="gender-parent">
          <div className="full-name">Gender</div>
          <div className="leonard-campbell">Male</div>
        </div>
        <div className="age-parent">
          <div className="full-name">Age</div>
          <div className="leonard-campbell">28</div>
        </div>
        <div className="age-group">
          <div className="full-name">Age</div>
          <div className="leonard-campbell">28</div>
        </div>
      </div>
      <div className="frame-parent26">
        <div className="candidate-information-container">
          <div className="candidate-information">Candidate Information</div>
        </div>
        <div className="full-name-group">
          <div className="full-name">Full Name</div>
          <div className="leonard-campbell">Leonard Campbell</div>
        </div>
        <div className="status-group">
          <div className="full-name">Status</div>
          <div className="leonard-campbell">Fresh Applicant</div>
        </div>
        <div className="rank-group">
          <div className="full-name">Rank</div>
          <div className="leonard-campbell">3</div>
        </div>
        <div className="applied-on-group">
          <div className="full-name">Applied On</div>
          <div className="leonard-campbell">June 2, 2023</div>
        </div>
        <div className="gender-group">
          <div className="full-name">Gender</div>
          <div className="leonard-campbell">Male</div>
        </div>
        <div className="age-container">
          <div className="full-name">Age</div>
          <div className="leonard-campbell">25</div>
        </div>
        <div className="education-parent">
          <div className="full-name">Education</div>
          <div className="computer-science-">Computer Science - Bachelors</div>
        </div>
        <div className="education-institute-parent">
          <div className="full-name">Education Institute</div>
          <div className="leonard-campbell">Harvey Mudd College</div>
        </div>
        <div className="work-experience-parent">
          <div className="full-name">Work Experience</div>
          <img className="frame-icon" alt="" src="/frame-1.svg" />
          <div className="junior-ui-designer-container">
            <span className="junior-ui-designer-container1">
              <p className="junior-ui-designer">Junior UI Designer</p>
              <p className="airbnb-inc-">Airbnb, Inc - Fulltime</p>
            </span>
          </div>
        </div>
        <div className="years">1.2 years</div>
        <div className="years1">2 years</div>
        <div className="frame-child33" />
        <div className="top-skills">Top Skills</div>
        <div className="project-management">Project Management</div>
        <div className="text-wrapper">
          <div className="full-name">{` `}</div>
        </div>
        <div className="ux-design">UX Design</div>
        <div className="text-parent">
          <div className="full-name">{` `}</div>
          <div className="cg-and-animation">CG and Animation</div>
        </div>
        <div className="intern-ui-designer-container">
          <span className="junior-ui-designer-container1">
            <p className="junior-ui-designer">Intern UI Designer</p>
            <p className="airbnb-inc-">Interlock, Inc - Fulltime</p>
          </span>
        </div>
        <img className="logomark-icon" alt="" src="/logomark.svg" />
      </div>
      <div className="frame-parent27">
        <div className="frame-wrapper23">
          <label className="frame-label">
            <div className="profile23">PROFILE</div>
          </label>
        </div>
        <ContainerGeneralButtons1 />
        <CompanyContainerButtons />
        <RecruitmentFormContainer1 />
        <div className="visit-our-help23">Visit our help centre</div>
        <img className="settings-icon23" alt="" src="/settings.svg" />
        <div className="frame-child34" />
        <div className="frame-parent28">
          <div className="frame-wrapper23">
            <label className="profile-wrapper21">
              <div className="profile24">PROFILE</div>
            </label>
          </div>
          <ContainerGeneralButtons />
          <CompanyContainerButtons />
          <RecruitmentFormContainer />
          <div className="visit-our-help23">Visit our help centre</div>
          <img className="settings-icon23" alt="" src="/settings.svg" />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro143;
