import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrontEndDeveloperContainer from "../components/front-end-developer-container";
import ScreeningContainer from "../components/screening-container";
import "./mac-book-pro141.css";
import Navbar from "../components/Navbar";

const MacBookPro141 = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/macbook-pro-14-1");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/macbook-pro-14-12");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/macbook-pro-14-13");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/macbook-pro-14-4");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-4");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/macbook-pro-14-4");
  }, [navigate]);

  const onTabContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTabContainer1Click = useCallback(() => {
    navigate("/macbook-pro-14-8");
  }, [navigate]);

  return (
    <div className="macbook-pro-14-3">
      <FrontEndDeveloperContainer
        onFrameContainer3Click={onFrameContainer3Click}
      />
      <div className="group-parent">
        <div className="rectangle-group" onClick={onGroupContainerClick}>
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-container" onClick={onGroupContainer1Click}>
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="group-div">
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-parent2" onClick={onGroupContainer4Click}>
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-parent3">
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-parent4">
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-parent5">
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-parent6">
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
        <div className="rectangle-parent7">
          <div className="group-child" />
          <div className="group-child" />
          <div className="group-inner" />
          <img className="ellipse-icon" alt="" src="/ellipse-91.svg" />
          <b className="abc-xyz">Abc Xyz</b>
          <div className="applied-on-2nd">Applied on 2nd June</div>
          <div className="star-outline" />
          <div className="star-outline1" />
          <div className="star-outline2" />
          <div className="star-outline3" />
          <img className="vector-icon1" alt="" src="/vector7.svg" />
          <div className="email-box" />
          <img className="vector-icon2" alt="" src="/vector8.svg" />
          <img className="vector-icon3" alt="" src="/vector9.svg" />
          <div className="resume">Resume</div>
        </div>
      </div>
      <ScreeningContainer
        eventCountText="Screening             (24)"
        interviewCountText="Interview             (12)"
        onRectangle1Click={onRectangle1Click}
        onRectangle2Click={onRectangle2Click}
      />
      <Navbar />
    </div>
  );
};

export default MacBookPro141;
