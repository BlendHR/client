import { useMemo } from "react";
import "./design-container.css";

const DesignContainer = ({
  jobRole,
  jobTitleText,
  jobCount,
  jobExperienceYears,
  jobDimensionsCode,
  propTop,
  propLeft,
  propRight,
  propWidth,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const chartpieIcon1Style = useMemo(() => {
    return {
      right: propRight,
      width: propWidth,
    };
  }, [propRight, propWidth]);

  return (
    <div className="design-group" style={frameDiv2Style}>
      <div className="design2">{jobRole}</div>
      <div className="uiux-designer">{jobTitleText}</div>
      <div className="candidates28">Candidates:</div>
      <div className="see-details2">{`See details >`}</div>
      <div className="frame-child57" />
      <div className="new4">
        <span className="new-txt2">
          <p className="p4">{jobCount}</p>
          <p className="p4">NEW</p>
        </span>
      </div>
      <img className="frame-child58" alt="" src="/line-23.svg" />
      <div className="frame-child59" />
      <div className="old4">
        <span className="new-txt2">
          <p className="p4">{jobExperienceYears}</p>
          <p className="p4">OLD</p>
        </span>
      </div>
      <img className="frame-child60" alt="" />
      <img
        className="chartpie-icon2"
        alt=""
        src={jobDimensionsCode}
        style={chartpieIcon1Style}
      />
    </div>
  );
};

export default DesignContainer;
