import { useMemo } from "react";
import "./timezone-selector-container.css";

const TimezoneSelectorContainer = ({
  timeZoneText,
  timeLabelText,
  propTop,
  propHeight,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const pSTStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="frame-wrapper27" style={frameDiv3Style}>
      <div className="frame-wrapper28">
        <div className="frame-parent36">
          <div className="start-parent">
            <div className="start">Start</div>
            <div className="pst-frame">
              <div className="pst2" style={pSTStyle}>
                {timeZoneText}
              </div>
            </div>
          </div>
          <div className="start-parent">
            <div className="start">End</div>
            <div className="pst-frame">
              <div className="pst3">{timeLabelText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimezoneSelectorContainer;
