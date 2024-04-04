import { useMemo } from "react";
import "./variants-left-inactivetrue.css";

const VariantsLeftInactivetrue = ({
  showRectangleDiv,
  variantsLeftInactivetruePosition,
  variantsLeftInactivetrueTop,
  variantsLeftInactivetrueLeft,
  rectangleDivFlex,
  rectangleDivWidth,
}) => {
  const variantsLeftInactivetrueStyle = useMemo(() => {
    return {
      position: variantsLeftInactivetruePosition,
      top: variantsLeftInactivetrueTop,
      left: variantsLeftInactivetrueLeft,
    };
  }, [
    variantsLeftInactivetruePosition,
    variantsLeftInactivetrueTop,
    variantsLeftInactivetrueLeft,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      flex: rectangleDivFlex,
      width: rectangleDivWidth,
    };
  }, [rectangleDivFlex, rectangleDivWidth]);

  return (
    <div
      className="variantsleftinactivetrue"
      style={variantsLeftInactivetrueStyle}
    >
      <img
        className="variantsleftinactivetrue-child"
        alt=""
        src="/group-1.svg"
      />
      {showRectangleDiv && (
        <div
          className="variantsleftinactivetrue-item"
          style={rectangleDiv1Style}
        />
      )}
    </div>
  );
};

export default VariantsLeftInactivetrue;
