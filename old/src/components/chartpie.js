import { useMemo } from "react";
import "./chartpie.css";

const Chartpie = ({
  chartpieChartpie,
  chartpieIconOverflow,
  chartpieIconPosition,
  chartpieIconTop,
  chartpieIconRight,
}) => {
  const chartpieIconStyle = useMemo(() => {
    return {
      overflow: chartpieIconOverflow,
      position: chartpieIconPosition,
      top: chartpieIconTop,
      right: chartpieIconRight,
    };
  }, [
    chartpieIconOverflow,
    chartpieIconPosition,
    chartpieIconTop,
    chartpieIconRight,
  ]);

  return (
    <img
      className="chartpie-icon"
      alt=""
      src={chartpieChartpie}
      style={chartpieIconStyle}
    />
  );
};

export default Chartpie;
