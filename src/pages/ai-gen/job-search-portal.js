import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateDefault from "../components/state-default";
import "./job-search-portal.css";

const JobSearchPortal = () => {
  const navigate = useNavigate();

  const onCardContainerClick = useCallback(() => {
    navigate("/apply-to-job");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    // Please sync "MacBook Pro 16" - 15" to the project
  }, []);

  return (
    <div className="job-search-portal-1">
      <div className="job-search-portal-1-child" onClick={onRectangleClick} />
      <div className="frame">
        <div className="frame-parent32">
          <div className="frame1">
            <StateDefault
              rectangle1="/rectangle-1@2x.png"
              cardTitle="Senior Software Engineer"
              stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
              discount70HariIni="100k - 120k"
              stateDefaultWidth="unset"
              stateDefaultPosition="unset"
              stateDefaultHeight="439.1px"
              stateDefaultTop="unset"
              stateDefaultRight="unset"
              stateDefaultBottom="unset"
              stateDefaultLeft="unset"
              stateDefaultFlex="1"
              onCardContainer1Click={onCardContainerClick}
            />
            <StateDefault
              rectangle1="/rectangle-1@2x.png"
              cardTitle="Senior Software Engineer"
              stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
              discount70HariIni="100k - 120k"
              stateDefaultWidth="unset"
              stateDefaultPosition="unset"
              stateDefaultHeight="439.1px"
              stateDefaultTop="unset"
              stateDefaultRight="unset"
              stateDefaultBottom="unset"
              stateDefaultLeft="unset"
              stateDefaultFlex="1"
            />
            <StateDefault
              rectangle1="/rectangle-1@2x.png"
              cardTitle="Senior Software Engineer"
              stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
              discount70HariIni="100k - 120k"
              stateDefaultWidth="unset"
              stateDefaultPosition="unset"
              stateDefaultHeight="439.1px"
              stateDefaultTop="unset"
              stateDefaultRight="unset"
              stateDefaultBottom="unset"
              stateDefaultLeft="unset"
              stateDefaultFlex="1"
            />
          </div>
          <div className="frame1">
            <StateDefault
              rectangle1="/rectangle-1@2x.png"
              cardTitle="Senior Software Engineer"
              stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
              discount70HariIni="100k - 120k"
              stateDefaultWidth="unset"
              stateDefaultPosition="unset"
              stateDefaultHeight="439.1px"
              stateDefaultTop="unset"
              stateDefaultRight="unset"
              stateDefaultBottom="unset"
              stateDefaultLeft="unset"
              stateDefaultFlex="1"
            />
            <StateDefault
              rectangle1="/rectangle-1@2x.png"
              cardTitle="Senior Software Engineer"
              stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
              discount70HariIni="100k - 120k"
              stateDefaultWidth="unset"
              stateDefaultPosition="unset"
              stateDefaultHeight="439.1px"
              stateDefaultTop="unset"
              stateDefaultRight="unset"
              stateDefaultBottom="unset"
              stateDefaultLeft="unset"
              stateDefaultFlex="1"
            />
            <StateDefault
              rectangle1="/rectangle-1@2x.png"
              cardTitle="Senior Software Engineer"
              stickyNotesSerbagunaIndah="Design and maintain applications and database. Provide robust integration of app with AWS and Azure Cloud technologies"
              discount70HariIni="100k - 120k"
              stateDefaultWidth="unset"
              stateDefaultPosition="unset"
              stateDefaultHeight="439.1px"
              stateDefaultTop="unset"
              stateDefaultRight="unset"
              stateDefaultBottom="unset"
              stateDefaultLeft="unset"
              stateDefaultFlex="1"
            />
          </div>
        </div>
      </div>
      <div className="frame3">
        <div className="frame4">
          <div className="frame4">
            <div className="frame6">
              <div className="careers-at-jbs">Careers at JBS</div>
              <div className="frame-child39" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchPortal;
