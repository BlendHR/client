import { useMemo } from "react";
import Property1Default1 from "./property1-default1";
import "./dropdown-list.css";

const DropdownList = ({
  dropdownListWidth,
  dropdownListPosition,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  dropdownListHeight,
  dropdownListOpacity,
}) => {
  const dropdownListStyle = useMemo(() => {
    return {
      width: dropdownListWidth,
      position: dropdownListPosition,
      top: dropdownListTop,
      right: dropdownListRight,
      left: dropdownListLeft,
      height: dropdownListHeight,
      opacity: dropdownListOpacity,
    };
  }, [
    dropdownListWidth,
    dropdownListPosition,
    dropdownListTop,
    dropdownListRight,
    dropdownListLeft,
    dropdownListHeight,
    dropdownListOpacity,
  ]);

  return (
    <div className="dropdown-list" style={dropdownListStyle}>
      <Property1Default1 item="Onsite" property1DefaultPosition="relative" />
      <Property1Default1 item="Remote" property1DefaultPosition="relative" />
      <Property1Default1 item="Hybrid" property1DefaultPosition="relative" />
    </div>
  );
};

export default DropdownList;
