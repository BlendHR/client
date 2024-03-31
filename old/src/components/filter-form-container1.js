import { useMemo } from "react";
import ListBoxTitle from "./list-box-title";
import PlaceholderText from "./placeholder-text";
import DropdownList from "./dropdown-list";
import "./filter-form-container1.css";

const FilterFormContainer1 = ({
  locationType,
  siteDimensionsCode,
  workLocation,
  workLocationType,
  workLocationType2,
  propLeft,
  propBackgroundColor,
  propTop,
  propBorder,
  propColor,
}) => {
  const listboxComponentStyle = useMemo(() => {
    return {
      left: propLeft,
      backgroundColor: propBackgroundColor,
      top: propTop,
    };
  }, [propLeft, propBackgroundColor, propTop]);

  const listBoxBG5Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const selectStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="listbox-component" style={listboxComponentStyle}>
      <ListBoxTitle
        listBoxTitleWidth="90.91%"
        listBoxTitleHeight="6.92%"
        listBoxTitlePosition="absolute"
        listBoxTitleTop="0%"
        listBoxTitleRight="4.55%"
        listBoxTitleBottom="93.08%"
        listBoxTitleLeft="4.55%"
      />
      <div className="listbox-main5">
        <div className="listboxbg5" style={listBoxBG5Style} />
        <img className="chevron-icon5" alt="" src={siteDimensionsCode} />
        <PlaceholderText
          placeholderTextWidth="65.71%"
          placeholderTextHeight="33.33%"
          placeholderTextPosition="absolute"
          placeholderTextTop="33.33%"
          placeholderTextRight="28.57%"
          placeholderTextBottom="33.33%"
          placeholderTextLeft="5.71%"
          selectFontSize="20px"
          selectColor="#757575"
        />
      </div>
      <div className="clip-list5">
        <DropdownList
          dropdownListWidth="90.91%"
          dropdownListPosition="absolute"
          dropdownListTop="68px"
          dropdownListRight="4.55%"
          dropdownListLeft="4.55%"
          dropdownListHeight="1px"
          dropdownListOpacity="0"
        />
      </div>
    </div>
  );
};

export default FilterFormContainer1;
