import { useMemo } from "react";
import "./state-default.css";

const StateDefault = ({
  rectangle1,
  cardTitle,
  stickyNotesSerbagunaIndah,
  discount70HariIni,
  stateDefaultWidth,
  stateDefaultPosition,
  stateDefaultHeight,
  stateDefaultTop,
  stateDefaultRight,
  stateDefaultBottom,
  stateDefaultLeft,
  stateDefaultFlex,
  onCardContainer1Click,
  onRectangleImageClick,
  onTextContainerClick,
}) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      width: stateDefaultWidth,
      position: stateDefaultPosition,
      height: stateDefaultHeight,
      top: stateDefaultTop,
      right: stateDefaultRight,
      bottom: stateDefaultBottom,
      left: stateDefaultLeft,
      flex: stateDefaultFlex,
    };
  }, [
    stateDefaultWidth,
    stateDefaultPosition,
    stateDefaultHeight,
    stateDefaultTop,
    stateDefaultRight,
    stateDefaultBottom,
    stateDefaultLeft,
    stateDefaultFlex,
  ]);

  return (
    <div
      className="statedefault6"
      style={stateDefaultStyle}
      onClick={onCardContainer1Click}
    >
      <img
        className="statedefault-child"
        alt=""
        src={rectangle1}
        onClick={onRectangleImageClick}
      />
      <div className="text-container" onClick={onTextContainerClick}>
        <div className="card-title-parent">
          <div className="card-title">{cardTitle}</div>
          <div className="sticky-notes-serbaguna">
            {stickyNotesSerbagunaIndah}
          </div>
        </div>
        <div className="discount-70-hari">{discount70HariIni}</div>
      </div>
    </div>
  );
};

export default StateDefault;
