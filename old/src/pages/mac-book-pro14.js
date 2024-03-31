import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateDefault from "../components/state-default";
import "./mac-book-pro14.css";
import Navbar from "../components/Navbar";

const MacBookPro14 = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/macbook-pro-14-3");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-3");
  }, [navigate]);

  const onCardContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-3");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/createajob");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="macbook-pro-14-1">
      <div className="card-parent">
        <StateDefault
          rectangle1="/rectangle-1@2x.png"
          cardTitle="Senior Software Engineer"
          stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
          discount70HariIni="100k - 120k"
          stateDefaultWidth="22.29%"
          stateDefaultPosition="absolute"
          stateDefaultHeight="38.03%"
          stateDefaultTop="7.59%"
          stateDefaultRight="68.38%"
          stateDefaultBottom="54.38%"
          stateDefaultLeft="9.32%"
          stateDefaultFlex="unset"
          onRectangleImageClick={onRectangleImageClick}
          onTextContainerClick={onTextContainerClick}
        />
        <StateDefault
          rectangle1="/rectangle-11@2x.png"
          cardTitle="Senior Software Engineer"
          stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
          discount70HariIni="100k - 120k"
          stateDefaultWidth="22.29%"
          stateDefaultPosition="absolute"
          stateDefaultHeight="38.03%"
          stateDefaultTop="7.59%"
          stateDefaultRight="38.82%"
          stateDefaultBottom="54.38%"
          stateDefaultLeft="38.89%"
          stateDefaultFlex="unset"
          onCardContainer1Click={onCardContainer1Click}
        />
        <StateDefault
          rectangle1="/rectangle-12@2x.png"
          cardTitle="Senior Software Engineer"
          stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
          discount70HariIni="100k - 120k"
          stateDefaultWidth="22.29%"
          stateDefaultPosition="absolute"
          stateDefaultHeight="38.03%"
          stateDefaultTop="7.59%"
          stateDefaultRight="9.25%"
          stateDefaultBottom="54.38%"
          stateDefaultLeft="68.45%"
          stateDefaultFlex="unset"
        />
        <StateDefault
          rectangle1="/rectangle-13@2x.png"
          cardTitle="Senior Software Engineer"
          stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
          discount70HariIni="100k - 120k"
          stateDefaultWidth="22.29%"
          stateDefaultPosition="absolute"
          stateDefaultHeight="38.03%"
          stateDefaultTop="54.38%"
          stateDefaultRight="68.38%"
          stateDefaultBottom="7.59%"
          stateDefaultLeft="9.32%"
          stateDefaultFlex="unset"
        />
        <StateDefault
          rectangle1="/rectangle-14@2x.png"
          cardTitle="Senior Software Engineer"
          stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
          discount70HariIni="100k - 120k"
          stateDefaultWidth="22.29%"
          stateDefaultPosition="absolute"
          stateDefaultHeight="38.03%"
          stateDefaultTop="54.38%"
          stateDefaultRight="38.82%"
          stateDefaultBottom="7.59%"
          stateDefaultLeft="38.89%"
          stateDefaultFlex="unset"
        />
        <StateDefault
          rectangle1="/rectangle-15@2x.png"
          cardTitle="Senior Software Engineer"
          stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
          discount70HariIni="100k - 120k"
          stateDefaultWidth="22.29%"
          stateDefaultPosition="absolute"
          stateDefaultHeight="38.03%"
          stateDefaultTop="54.38%"
          stateDefaultRight="9.25%"
          stateDefaultBottom="7.59%"
          stateDefaultLeft="68.45%"
          stateDefaultFlex="unset"
        />
      </div>
      <div className="browse-jobs">Browse Jobs</div>
      <div className="post-a-job-wrapper" onClick={onFrameContainer1Click}>
        <div className="post-a-job">Post a Job</div>
      </div>
      <div className="ellipse-parent">
        <div className="ellipse-div" />
        <img
          className="bell-badge-outline-icon"
          alt=""
          src="/bellbadgeoutline.svg"
        />
        <img className="frame-child5" alt="" src="/group-10.svg" />
        <div className="what-are-you">what are you looking for?</div>
        <img className="vector-icon46" alt="" src="/vector10.svg" />
        <div className="chevron-left-parent" onClick={onFrameContainerClick}>
          <img className="chevron-left-icon" alt="" src="/chevronleft.svg" />
          <div className="back-to-dashboard">Back to Dashboard</div>
        </div>
      </div>
      <Navbar />
      </div>
  );
};

export default MacBookPro14;
