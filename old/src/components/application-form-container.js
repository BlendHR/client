import { useMemo } from "react";
import "./application-form-container.css";

const ApplicationFormContainer = ({
  applicationStatus,
  startFromText,
  eventDateText,
  dateLabelText,
  propTop,
  propLeft,
  propHeight,
  propBackgroundColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const deadlineStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="applications-parent" style={frameDivStyle}>
      <div className="applications">{applicationStatus}</div>
      <div className="frame-parent35">
        <div className="starts-from-parent">
          <div className="starts-from">{startFromText}</div>
          <div className="ddmmyyyy-wrapper">
            <div className="ddmmyyyy">dd/mm/yyyy</div>
          </div>
        </div>
        <div className="starts-from-parent">
          <div className="starts-from" style={deadlineStyle}>
            {eventDateText}
          </div>
          <div className="ddmmyyyy-wrapper" style={frameDiv1Style}>
            <div className="ddmmyyyy">{dateLabelText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormContainer;
