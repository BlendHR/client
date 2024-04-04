import { useMemo } from "react";
import "./placeholder-text1.css";

const PlaceholderText1 = ({
  placeholderTextWidth,
  placeholderTextHeight,
  placeholderTextPosition,
  placeholderTextTop,
  placeholderTextRight,
  placeholderTextBottom,
  placeholderTextLeft,
  allFontSize,
}) => {
  const placeholderText1Style = useMemo(() => {
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

  const allStyle = useMemo(() => {
    return {
      fontSize: allFontSize,
    };
  }, [allFontSize]);

  return (
    <div className="placeholder-text1" style={placeholderText1Style}>
      <div className="all" style={allStyle}>
        All
      </div>
    </div>
  );
};

export default PlaceholderText1;
