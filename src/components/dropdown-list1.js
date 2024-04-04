import { useMemo } from "react";
import Property1Default1 from "./property1-default1";
import "./dropdown-list1.css";

const DropdownList1 = ({
  dropdownListWidth,
  dropdownListPosition,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  dropdownListHeight,
  dropdownListOpacity,
}) => {
  const dropdownList1Style = useMemo(() => {
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
    <div className="dropdown-list1" style={dropdownList1Style}>
      <Property1Default1 item="Karachi" property1DefaultPosition="relative" />
      <Property1Default1 item="Lahore" property1DefaultPosition="relative" />
      <Property1Default1 item="Islamabad" property1DefaultPosition="relative" />
    </div>
  );
};

export default DropdownList1;
