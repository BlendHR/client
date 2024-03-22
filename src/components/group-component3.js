import { useMemo } from "react";
import "./group-component3.css";

const GroupComponent3 = ({
  emptyGroupSequence,
  propColor,
  groupDivTop,
  groupDivLeft,
  ayeshaMasroorWidth,
  vectorIconTop,
  vectorIconBottom,
  vectorIconTop1,
  vectorIconBottom1,
  vectorIconTop2,
  vectorIconBottom2,
  divOpacity,
  onGroupContainerClick,
}) => {
  const divStyle = useMemo(() => {
    return {
      color: propColor,
      opacity: divOpacity,
    };
  }, [propColor, divOpacity]);

  const groupDivStyle = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivTop, groupDivLeft]);

  const ayeshaMasroorStyle = useMemo(() => {
    return {
      width: ayeshaMasroorWidth,
    };
  }, [ayeshaMasroorWidth]);

  const vectorIconStyle = useMemo(() => {
    return {
      top: vectorIconTop,
      bottom: vectorIconBottom,
    };
  }, [vectorIconTop, vectorIconBottom]);

  const vectorIcon1Style = useMemo(() => {
    return {
      top: vectorIconTop1,
      bottom: vectorIconBottom1,
    };
  }, [vectorIconTop1, vectorIconBottom1]);

  const vectorIcon2Style = useMemo(() => {
    return {
      top: vectorIconTop2,
      bottom: vectorIconBottom2,
    };
  }, [vectorIconTop2, vectorIconBottom2]);

  return (
    <div
      className="rectangle-parent19"
      onClick={onGroupContainerClick}
      style={groupDivStyle}
    >
      <div className="group-child75" />
      <div className="group-child75" />
      <div className="group-child77" />
      <img className="group-child78" alt="" src="/ellipse-91.svg" />
      <b className="ayesha-masroor" style={ayeshaMasroorStyle}>
        Ayesha Masroor
      </b>
      <div className="applied-on-2nd20">Applied on 2nd June</div>
      <div className="star-outline80" />
      <div className="star-outline81" />
      <div className="star-outline82" />
      <div className="star-outline83" />
      <img
        className="vector-icon149"
        alt=""
        src="/vector7.svg"
        style={vectorIconStyle}
      />
      <div className="email-box20" />
      <img
        className="vector-icon150"
        alt=""
        src="/vector8.svg"
        style={vectorIcon1Style}
      />
      <img
        className="vector-icon151"
        alt=""
        src="/vector9.svg"
        style={vectorIcon2Style}
      />
      <div className="div11" style={divStyle}>
        {emptyGroupSequence}
      </div>
    </div>
  );
};

export default GroupComponent3;
