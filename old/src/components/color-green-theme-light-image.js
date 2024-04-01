import { useMemo } from "react";
import "./color-green-theme-light-image.css";

const ColorGreenThemeLightImage = ({
  colorGreenThemeLightImage,
  colorGreenThemeLightIconWidth,
  colorGreenThemeLightIconOverflow,
  colorGreenThemeLightIconHeight,
  colorGreenThemeLightIconPosition,
  colorGreenThemeLightIconTop,
  colorGreenThemeLightIconLeft,
}) => {
  const colorGreenThemeLightIconStyle = useMemo(() => {
    return {
      width: colorGreenThemeLightIconWidth,
      overflow: colorGreenThemeLightIconOverflow,
      height: colorGreenThemeLightIconHeight,
      position: colorGreenThemeLightIconPosition,
      top: colorGreenThemeLightIconTop,
      left: colorGreenThemeLightIconLeft,
    };
  }, [
    colorGreenThemeLightIconWidth,
    colorGreenThemeLightIconOverflow,
    colorGreenThemeLightIconHeight,
    colorGreenThemeLightIconPosition,
    colorGreenThemeLightIconTop,
    colorGreenThemeLightIconLeft,
  ]);

  return (
    <img
      className="colorgreen-themelight-icon"
      alt=""
      src={colorGreenThemeLightImage}
      style={colorGreenThemeLightIconStyle}
    />
  );
};

export default ColorGreenThemeLightImage;
