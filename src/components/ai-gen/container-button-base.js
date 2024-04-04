import IcHorizontalRule from "./ic-horizontal-rule";
import "./container-button-base.css";

const ContainerButtonBase = ({
  displayText = "text",
  uniqueIdText,
  colorPicker = false,
  dropdown = false,
  icon = true,
  text = false,
}) => {
  return (
    <div className="menu-bar-button-base1">
      {text && <div className="text3">{displayText}</div>}
      <IcHorizontalRule
        icHorizontalRuleWidth="20px"
        icHorizontalRuleHeight="20px"
        icHorizontalRulePosition="relative"
        rectangleDivHeight="6.5%"
        rectangleDivTop="47%"
        rectangleDivBottom="46.5%"
      />
      {colorPicker && (
        <div className="color-picker-list-item">
          <div className="context-menu-color-picker-ch2" />
          <div className="context-menu-color-picker-ch3" />
        </div>
      )}
      {dropdown && (
        <img className="ic-chevron-down-icon1" alt="" src={uniqueIdText} />
      )}
    </div>
  );
};

export default ContainerButtonBase;
