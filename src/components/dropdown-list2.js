import { useMemo } from "react";
import Property1Default1 from "./property1-default1";
import "./dropdown-list2.css";

const DropdownList2 = ({
  dropdownListWidth,
  dropdownListPosition,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  dropdownListHeight,
  dropdownListOpacity,
}) => {
  const dropdownList2Style = useMemo(() => {
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
    <div className="dropdown-list2" style={dropdownList2Style}>
      <Property1Default1
        item="Team member"
        property1DefaultPosition="relative"
      />
      <Property1Default1 item="Team lead" property1DefaultPosition="relative" />
      <Property1Default1
        item="Individual Contributor"
        property1DefaultPosition="relative"
      />
    </div>
  );
};

export default DropdownList2;
