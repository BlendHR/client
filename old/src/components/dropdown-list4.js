import { useMemo } from "react";
import Property1Default1 from "./property1-default1";
import "./dropdown-list4.css";

const DropdownList4 = ({
  dropdownListWidth,
  dropdownListPosition,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  dropdownListHeight,
  dropdownListOpacity,
}) => {
  const dropdownList4Style = useMemo(() => {
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
    <div className="dropdown-list4" style={dropdownList4Style}>
      <Property1Default1 item="Accepted" property1DefaultPosition="relative" />
      <Property1Default1 item="Rejected" property1DefaultPosition="relative" />
      <Property1Default1
        item="In process"
        property1DefaultPosition="relative"
      />
    </div>
  );
};

export default DropdownList4;
