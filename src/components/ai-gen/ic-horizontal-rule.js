import { useMemo } from "react";
import "./ic-horizontal-rule.css";

const IcHorizontalRule = ({
  icHorizontalRuleWidth,
  icHorizontalRuleHeight,
  icHorizontalRulePosition,
  rectangleDivHeight,
  rectangleDivTop,
  rectangleDivBottom,
}) => {
  const icHorizontalRuleStyle = useMemo(() => {
    return {
      width: icHorizontalRuleWidth,
      height: icHorizontalRuleHeight,
      position: icHorizontalRulePosition,
    };
  }, [icHorizontalRuleWidth, icHorizontalRuleHeight, icHorizontalRulePosition]);

  const rectangleDivStyle = useMemo(() => {
    return {
      height: rectangleDivHeight,
      top: rectangleDivTop,
      bottom: rectangleDivBottom,
    };
  }, [rectangleDivHeight, rectangleDivTop, rectangleDivBottom]);

  return (
    <div className="ic-horizontal-rule" style={icHorizontalRuleStyle}>
      <div className="ic-horizontal-rule-child" style={rectangleDivStyle} />
    </div>
  );
};

export default IcHorizontalRule;
