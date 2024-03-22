import { useMemo } from "react";
import ListBoxTitle2 from "./list-box-title2";
import PlaceholderText from "./placeholder-text";
import DropdownList2 from "./dropdown-list2";
import "./filter-form-container.css";

const FilterFormContainer = ({ jobDetailsType, propTop, propLeft }) => {
  const listboxComponent1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="listbox-component1" style={listboxComponent1Style}>
      <ListBoxTitle2
        roleType="Employment Type"
        listBoxTitleWidth="90.91%"
        listBoxTitleHeight="6.92%"
        listBoxTitlePosition="absolute"
        listBoxTitleTop="0%"
        listBoxTitleRight="4.55%"
        listBoxTitleBottom="93.08%"
        listBoxTitleLeft="4.55%"
      />
      <div className="listbox-main6">
        <div className="listboxbg6" />
        <img className="chevron-icon6" alt="" src="/chevron1.svg" />
        <PlaceholderText
          placeholderTextWidth="65.71%"
          placeholderTextHeight="33.33%"
          placeholderTextPosition="absolute"
          placeholderTextTop="33.33%"
          placeholderTextRight="28.57%"
          placeholderTextBottom="33.33%"
          placeholderTextLeft="5.71%"
          selectFontSize="20px"
          selectColor="#666"
        />
      </div>
      <div className="clip-list6">
        <DropdownList2
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

export default FilterFormContainer;
