import { useMemo } from "react";
import "./statedefault2.css";

const Statedefault2 = ({
  statedefaultWidth,
  statedefaultHeight,
  statedefaultPosition,
}) => {
  const statedefaultStyle = useMemo(() => {
    return {
      width: statedefaultWidth,
      height: statedefaultHeight,
      position: statedefaultPosition,
    };
  }, [statedefaultWidth, statedefaultHeight, statedefaultPosition]);

  return (
    <div className="statedefault1" style={statedefaultStyle}>
      <div className="context-menu-color-picker-ch" />
      <div className="context-menu-color-picker-ch1" />
    </div>
  );
};

export default Statedefault2;
