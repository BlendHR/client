import { useMemo } from "react";
import ListBoxTitle4 from "./list-box-title4";
import PlaceholderText1 from "./placeholder-text1";
import DropdownList5 from "./dropdown-list5";
import "./property1-default5.css";

const Property1Default5 = ({
  chevron,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  listBoxBGBorder,
  allFontSize,
}) => {
  const property1Default5Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const listBoxBG4Style = useMemo(() => {
    return {
      border: listBoxBGBorder,
    };
  }, [listBoxBGBorder]);

  const allStyle = useMemo(() => {
    return {
      fontSize: allFontSize,
    };
  }, [allFontSize]);

  return (
    <div className="property-1default5" style={property1Default5Style}>
      <ListBoxTitle4
        listBoxTitleWidth="90.91%"
        listBoxTitleHeight="6.92%"
        listBoxTitlePosition="absolute"
        listBoxTitleTop="0%"
        listBoxTitleRight="4.55%"
        listBoxTitleBottom="93.08%"
        listBoxTitleLeft="4.55%"
      />
      <div className="listbox-main4">
        <div className="listboxbg4" style={listBoxBG4Style} />
        <img className="chevron-icon4" alt="" src={chevron} />
        <PlaceholderText1
          placeholderTextWidth="65.71%"
          placeholderTextHeight="33.33%"
          placeholderTextPosition="absolute"
          placeholderTextTop="33.33%"
          placeholderTextRight="28.57%"
          placeholderTextBottom="33.33%"
          placeholderTextLeft="5.71%"
          allFontSize="16px"
        />
      </div>
      <div className="clip-list4">
        <DropdownList5
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

export default Property1Default5;
