import { useMemo } from "react";
import "./property1-default1.css";

const Property1Default1 = ({ item, property1DefaultPosition }) => {
  const property1Default1Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div className="property-1default1" style={property1Default1Style}>
      <div className="item">{item}</div>
    </div>
  );
};

export default Property1Default1;
