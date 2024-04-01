import { useMemo } from "react";
import "./placeholder-text.css";

const PlaceholderText = ({
  placeholderTextWidth,
  placeholderTextHeight,
  placeholderTextPosition,
  placeholderTextTop,
  placeholderTextRight,
  placeholderTextBottom,
  placeholderTextLeft,
  selectFontSize,
  selectColor,
}) => {
  const placeholderTextStyle = useMemo(() => {
    return {
      width: placeholderTextWidth,
      height: placeholderTextHeight,
      position: placeholderTextPosition,
      top: placeholderTextTop,
      right: placeholderTextRight,
      bottom: placeholderTextBottom,
      left: placeholderTextLeft,
    };
  }, [
    placeholderTextWidth,
    placeholderTextHeight,
    placeholderTextPosition,
    placeholderTextTop,
    placeholderTextRight,
    placeholderTextBottom,
    placeholderTextLeft,
  ]);

  const selectStyle = useMemo(() => {
    return {
      fontSize: selectFontSize,
      color: selectColor,
    };
  }, [selectFontSize, selectColor]);

  return (
    <div className="placeholder-text" style={placeholderTextStyle}>
      <div className="select" style={selectStyle}>
        Select
      </div>
    </div>
  );
};

export default PlaceholderText;
