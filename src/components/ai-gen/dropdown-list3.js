import { useMemo } from "react";
import Statedefault6 from "./statedefault6";
import "./dropdown-list3.css";

const DropdownList3 = ({
  icTextAlignLeft,
  listItem,
  icTextAlignLeft1,
  listItem1,
  icTextAlignLeft2,
  listItem2,
  icTextAlignLeft3,
  listItem3,
  showIcTextAlignLeftIcon,
  icTextAlignLeftIconVisible,
  icTextAlignLeftIconVisible1,
  icTextAlignLeftIconVisible2,
  dropdownListAlignSelf,
  dropdownListFlex,
  dropdownListItemAlignSelf,
  dropdownListItemBackgroundColor,
  listItemLineHeight,
  dropdownListItemAlignSelf1,
  listItemFontSize,
  listItemFontWeight,
  dropdownListItemAlignSelf2,
  listItemFontSize1,
  listItemFontWeight1,
  dropdownListItemAlignSelf3,
  listItemFontWeight2,
}) => {
  const dropdownList3Style = useMemo(() => {
    return {
      alignSelf: dropdownListAlignSelf,
      flex: dropdownListFlex,
    };
  }, [dropdownListAlignSelf, dropdownListFlex]);

  const statedefault1Style = useMemo(() => {
    return {
      alignSelf: dropdownListItemAlignSelf,
      backgroundColor: dropdownListItemBackgroundColor,
    };
  }, [dropdownListItemAlignSelf, dropdownListItemBackgroundColor]);

  const listItemStyle = useMemo(() => {
    return {
      lineHeight: listItemLineHeight,
    };
  }, [listItemLineHeight]);

  const statedefault1Style1 = useMemo(() => {
    return {
      alignSelf: dropdownListItemAlignSelf1,
    };
  }, [dropdownListItemAlignSelf1]);

  const listItemStyle1 = useMemo(() => {
    return {
      fontSize: listItemFontSize,
      fontWeight: listItemFontWeight,
    };
  }, [listItemFontSize, listItemFontWeight]);

  const statedefault1Style2 = useMemo(() => {
    return {
      alignSelf: dropdownListItemAlignSelf2,
    };
  }, [dropdownListItemAlignSelf2]);

  const listItemStyle2 = useMemo(() => {
    return {
      fontSize: listItemFontSize1,
      fontWeight: listItemFontWeight1,
    };
  }, [listItemFontSize1, listItemFontWeight1]);

  const statedefault1Style3 = useMemo(() => {
    return {
      alignSelf: dropdownListItemAlignSelf3,
    };
  }, [dropdownListItemAlignSelf3]);

  const listItemStyle3 = useMemo(() => {
    return {
      fontWeight: listItemFontWeight2,
    };
  }, [listItemFontWeight2]);

  return (
    <div className="dropdown-list3" style={dropdownList3Style}>
      <Statedefault6
        icTextAlignLeft="/ic-textalignleft2.svg"
        text="text"
        icon
        statedefaultAlignSelf="unset"
        statedefaultBackgroundColor="unset"
        listItemLineHeight="125%"
        listItemFontSize="14px"
        listItemFontWeight="unset"
      />
      <Statedefault6
        icTextAlignLeft="/ic-textalignleft2.svg"
        text="text"
        icon
        statedefaultAlignSelf="unset"
        statedefaultBackgroundColor="unset"
        listItemLineHeight="125%"
        listItemFontSize="14px"
        listItemFontWeight="unset"
      />
      <Statedefault6
        icTextAlignLeft="/ic-textalignleft2.svg"
        text="text"
        icon
        statedefaultAlignSelf="unset"
        statedefaultBackgroundColor="unset"
        listItemLineHeight="125%"
        listItemFontSize="14px"
        listItemFontWeight="unset"
      />
      <Statedefault6
        icTextAlignLeft="/ic-textalignleft2.svg"
        text="text"
        icon
        statedefaultAlignSelf="unset"
        statedefaultBackgroundColor="unset"
        listItemLineHeight="125%"
        listItemFontSize="14px"
        listItemFontWeight="unset"
      />
    </div>
  );
};

export default DropdownList3;
