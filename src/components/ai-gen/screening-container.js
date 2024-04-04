import { useMemo } from "react";
import "./screening-container.css";

const ScreeningContainer = ({
  eventCountText,
  interviewCountText,
  propBorder,
  propBorder1,
  propBorder2,
  propLeft,
  onRectangle1Click,
  onRectangle2Click,
}) => {
  const rectangleDiv2Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      border: propBorder2,
    };
  }, [propBorder2]);

  const interview12Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="rectangle-parent18">
      <div className="frame-child47" style={rectangleDiv2Style} />
      <div
        className="frame-child48"
        onClick={onRectangle1Click}
        style={rectangleDiv3Style}
      />
      <div
        className="frame-child49"
        onClick={onRectangle2Click}
        style={rectangleDiv4Style}
      />
      <div className="frame-child50" />
      <div className="fresh-applicants-10">Fresh Applicants (10)</div>
      <div className="screening-24">{eventCountText}</div>
      <div className="interview-12" style={interview12Style}>
        {interviewCountText}
      </div>
      <div className="offer-4">Offer (4)</div>
    </div>
  );
};

export default ScreeningContainer;
