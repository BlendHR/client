import { useMemo } from "react";
import "./variants-left-activefalse.css";

const VariantsLeftActivefalse = ({
  variantsLeftActivefalsePosition,
  variantsLeftActivefalseTop,
  variantsLeftActivefalseLeft,
}) => {
  const variantsLeftActivefalseStyle = useMemo(() => {
    return {
      position: variantsLeftActivefalsePosition,
      top: variantsLeftActivefalseTop,
      left: variantsLeftActivefalseLeft,
    };
  }, [
    variantsLeftActivefalsePosition,
    variantsLeftActivefalseTop,
    variantsLeftActivefalseLeft,
  ]);

  return (
    <div
      className="variantsleftactivefalse"
      style={variantsLeftActivefalseStyle}
    >
      <img
        className="variantsleftactivefalse-child"
        alt=""
        src="/group-1.svg"
      />
      <div className="variantsleftactivefalse-item" />
    </div>
  );
};

export default VariantsLeftActivefalse;
