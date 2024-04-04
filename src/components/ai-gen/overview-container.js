import { useMemo } from "react";
import MenuContainer from "./menu-container";
import "./overview-container.css";

const OverviewContainer = ({
  jobDescription,
  colorPickerListItemTop,
  colorPickerListItemLeft,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      top: colorPickerListItemTop,
      left: colorPickerListItemLeft,
    };
  }, [colorPickerListItemTop, colorPickerListItemLeft]);

  return (
    <div className="overview-parent" style={frameDiv4Style}>
      <div className="overview">{jobDescription}</div>
      <div className="menu-bar-wrapper">
        <MenuContainer />
      </div>
    </div>
  );
};

export default OverviewContainer;
