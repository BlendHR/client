import { useMemo } from "react";
import Property1Default1 from "./property1-default1";
import "./dropdown-list5.css";

const DropdownList5 = ({
  dropdownListWidth,
  dropdownListPosition,
  dropdownListTop,
  dropdownListRight,
  dropdownListLeft,
  dropdownListHeight,
  dropdownListOpacity,
}) => {
  const dropdownList5Style = useMemo(() => {
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
    <div className="dropdown-list5" style={dropdownList5Style}>
      <Property1Default1
        item="Data Analytics Engineer"
        property1DefaultPosition="relative"
      />
      <Property1Default1
        item="Marketing Head"
        property1DefaultPosition="relative"
      />
      <Property1Default1
        item="Graphic Design Expert"
        property1DefaultPosition="relative"
      />
      <Property1Default1
        item="Copy Writer"
        property1DefaultPosition="relative"
      />
      <Property1Default1
        item="Business Strategy Officer"
        property1DefaultPosition="relative"
      />
      <Property1Default1
        item="Senior Software Engineer"
        property1DefaultPosition="relative"
      />
    </div>
  );
};

export default DropdownList5;
