import { useMemo } from "react";
import "./color-violet-theme-dark-image.css";

const ColorVioletThemeDarkImage = ({
  colorVioletThemeDarkImage,
  colorVioletThemeDarkIconWidth,
  colorVioletThemeDarkIconOverflow,
  colorVioletThemeDarkIconHeight,
  colorVioletThemeDarkIconPosition,
  colorVioletThemeDarkIconTop,
  colorVioletThemeDarkIconLeft,
}) => {
  const colorVioletThemeDarkIconStyle = useMemo(() => {
    return {
      width: colorVioletThemeDarkIconWidth,
      overflow: colorVioletThemeDarkIconOverflow,
      height: colorVioletThemeDarkIconHeight,
      position: colorVioletThemeDarkIconPosition,
      top: colorVioletThemeDarkIconTop,
      left: colorVioletThemeDarkIconLeft,
    };
  }, [
    colorVioletThemeDarkIconWidth,
    colorVioletThemeDarkIconOverflow,
    colorVioletThemeDarkIconHeight,
    colorVioletThemeDarkIconPosition,
    colorVioletThemeDarkIconTop,
    colorVioletThemeDarkIconLeft,
  ]);

  return (
    <img
      className="colorviolet-themedark-icon"
      alt=""
      src={colorVioletThemeDarkImage}
      style={colorVioletThemeDarkIconStyle}
    />
  );
};

export default ColorVioletThemeDarkImage;
