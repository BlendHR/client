import { useMemo } from "react";
import ListBoxTitle3 from "./list-box-title3";
import PlaceholderText1 from "./placeholder-text1";
import DropdownList4 from "./dropdown-list4";
import "./property1-default4.css";

const Property1Default4 = ({
  chevron,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  listBoxTitleHeight,
  listBoxTitleWidth,
  listBoxTitleBottom,
  listBoxMainHeight,
  listBoxMainWidth,
  listBoxMainBottom,
  listBoxBGBorder,
  chevronIconHeight,
  chevronIconWidth,
  chevronIconTop,
  chevronIconRight,
  chevronIconBottom,
  chevronIconLeft,
  placeholderTextHeight,
  placeholderTextWidth,
  placeholderTextTop,
  placeholderTextRight,
  placeholderTextBottom,
  placeholderTextLeft,
  allFontSize,
  dropdownListWidth,
}) => {
  const property1Default4Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const listBoxTitle3Style = useMemo(() => {
    return {
      height: listBoxTitleHeight,
      width: listBoxTitleWidth,
      bottom: listBoxTitleBottom,
    };
  }, [listBoxTitleHeight, listBoxTitleWidth, listBoxTitleBottom]);

  const listBoxMainStyle = useMemo(() => {
    return {
      height: listBoxMainHeight,
      width: listBoxMainWidth,
      bottom: listBoxMainBottom,
    };
  }, [listBoxMainHeight, listBoxMainWidth, listBoxMainBottom]);

  const listBoxBG3Style = useMemo(() => {
    return {
      border: listBoxBGBorder,
    };
  }, [listBoxBGBorder]);

  const chevronIconStyle = useMemo(() => {
    return {
      height: chevronIconHeight,
      width: chevronIconWidth,
      top: chevronIconTop,
      right: chevronIconRight,
      bottom: chevronIconBottom,
      left: chevronIconLeft,
    };
  }, [
    chevronIconHeight,
    chevronIconWidth,
    chevronIconTop,
    chevronIconRight,
    chevronIconBottom,
    chevronIconLeft,
  ]);

  const placeholderText1Style = useMemo(() => {
    return {
      height: placeholderTextHeight,
      width: placeholderTextWidth,
      top: placeholderTextTop,
      right: placeholderTextRight,
      bottom: placeholderTextBottom,
      left: placeholderTextLeft,
    };
  }, [
    placeholderTextHeight,
    placeholderTextWidth,
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

  const dropdownList4Style = useMemo(() => {
    return {
      width: dropdownListWidth,
    };
  }, [dropdownListWidth]);

  return (
    <div className="property-1default4" style={property1Default4Style}>
      <ListBoxTitle3
        listBoxTitleWidth="90.91%"
        listBoxTitleHeight="6.92%"
        listBoxTitlePosition="absolute"
        listBoxTitleTop="0%"
        listBoxTitleRight="4.55%"
        listBoxTitleBottom="93.08%"
        listBoxTitleLeft="4.55%"
      />
      <div className="listbox-main3" style={listBoxMainStyle}>
        <div className="listboxbg3" style={listBoxBG3Style} />
        <img
          className="chevron-icon3"
          alt=""
          src={chevron}
          style={chevronIconStyle}
        />
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
      <div className="clip-list3">
        <DropdownList4
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

export default Property1Default4;
