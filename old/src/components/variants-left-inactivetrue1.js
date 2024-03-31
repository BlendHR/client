import { useMemo } from "react";
import "./variants-left-inactivetrue1.css";

const VariantsLeftInactivetrue = ({
  showRectangleDiv,
  propLeft,
  propFlex,
  propWidth,
}) => {
  const variantsLeftInactivetrue1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const rectangleDiv5Style = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div
      className="variantsleftinactivetrue1"
      style={variantsLeftInactivetrue1Style}
    >
      <img
        className="variantsleftinactivetrue-inner"
        alt=""
        src="/group-1.svg"
      />
      {showRectangleDiv && (
        <div
          className="variantsleftinactivetrue-child1"
          style={rectangleDiv5Style}
        />
      )}
    </div>
  );
};

export default VariantsLeftInactivetrue;
