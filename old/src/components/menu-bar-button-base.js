import { useMemo } from "react";
import Statedefault2 from "./statedefault2";
import "./menu-bar-button-base.css";

const MenuBarButtonBase = ({
  text = "text",
  icTextAlignLeft,
  icChevronDown,
  colorPicker = true,
  dropdown = true,
  icon = true,
  showText,
  menuBarButtonBasePadding,
  menuBarButtonBaseBackgroundColor,
  textWidth,
  textColor,
}) => {
  const menuBarButtonBaseStyle = useMemo(() => {
    return {
      padding: menuBarButtonBasePadding,
      backgroundColor: menuBarButtonBaseBackgroundColor,
    };
  }, [menuBarButtonBasePadding, menuBarButtonBaseBackgroundColor]);

  const textStyle = useMemo(() => {
    return {
      width: textWidth,
      color: textColor,
    };
  }, [textWidth, textColor]);

  return (
    <div className="menu-bar-button-base" style={menuBarButtonBaseStyle}>
      {showText && (
        <div className="text" style={textStyle}>
          {text}
        </div>
      )}
      {icon && (
        <img className="ic-text-align-left-icon" alt="" src={icTextAlignLeft} />
      )}
      <Statedefault2
        statedefaultWidth="20px"
        statedefaultHeight="20px"
        statedefaultPosition="relative"
      />
      {dropdown && (
        <img className="ic-chevron-down-icon" alt="" src={icChevronDown} />
      )}
    </div>
  );
};

export default MenuBarButtonBase;
