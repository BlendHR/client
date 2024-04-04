import { useMemo } from "react";
import "./statedefault6.css";

const Statedefault6 = ({
  icTextAlignLeft,
  text = "text",
  icon = true,
  statedefaultAlignSelf,
  statedefaultBackgroundColor,
  listItemLineHeight,
  listItemFontSize,
  listItemFontWeight,
}) => {
  const statedefault1Style = useMemo(() => {
    return {
      alignSelf: statedefaultAlignSelf,
      backgroundColor: statedefaultBackgroundColor,
    };
  }, [statedefaultAlignSelf, statedefaultBackgroundColor]);

  const listItemStyle = useMemo(() => {
    return {
      lineHeight: listItemLineHeight,
      fontSize: listItemFontSize,
      fontWeight: listItemFontWeight,
    };
  }, [listItemLineHeight, listItemFontSize, listItemFontWeight]);

  return (
    <div className="statedefault5" style={statedefault1Style}>
      {icon && (
        <img
          className="ic-text-align-left-icon1"
          alt=""
          src={icTextAlignLeft}
        />
      )}
      <div className="list-item" style={listItemStyle}>
        {text}
      </div>
    </div>
  );
};

export default Statedefault6;
