import { useMemo } from "react";
import "./group-component2.css";

const GroupComponent2 = ({ groupDivLeft, groupDivTop }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: groupDivLeft,
      top: groupDivTop,
    };
  }, [groupDivLeft, groupDivTop]);

  return (
    <div className="rectangle-parent20" style={groupDiv1Style}>
      <div className="group-child79" />
      <div className="group-child80" />
      <img className="group-child81" alt="" src="/ellipse-91.svg" />
      <b className="ayesha-masroor1">Ayesha Masroor</b>
      <div className="applied-on-2nd21">Applied on 2nd June</div>
      <div className="star-outline84" />
      <div className="star-outline85" />
      <div className="star-outline86" />
      <div className="star-outline87" />
      <img className="vector-icon152" alt="" src="/vector7.svg" />
      <div className="email-box21" />
      <img className="vector-icon153" alt="" src="/vector8.svg" />
      <img className="vector-icon154" alt="" src="/vector9.svg" />
      <div className="vector-parent1">
        <img className="vector-icon155" alt="" src="/vector12.svg" />
        <img className="vector-icon155" alt="" src="/vector13.svg" />
        <img className="vector-icon155" alt="" src="/vector14.svg" />
        <img className="vector-icon155" alt="" src="/vector15.svg" />
        <img className="vector-icon155" alt="" src="/vector13.svg" />
      </div>
    </div>
  );
};

export default GroupComponent2;
