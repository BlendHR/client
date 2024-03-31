import { useMemo } from "react";
import "./list-box-title.css";

const ListBoxTitle = ({
  listBoxTitleWidth,
  listBoxTitleHeight,
  listBoxTitlePosition,
  listBoxTitleTop,
  listBoxTitleRight,
  listBoxTitleBottom,
  listBoxTitleLeft,
}) => {
  const listBoxTitleStyle = useMemo(() => {
    return {
      width: listBoxTitleWidth,
      height: listBoxTitleHeight,
      position: listBoxTitlePosition,
      top: listBoxTitleTop,
      right: listBoxTitleRight,
      bottom: listBoxTitleBottom,
      left: listBoxTitleLeft,
    };
  }, [
    listBoxTitleWidth,
    listBoxTitleHeight,
    listBoxTitlePosition,
    listBoxTitleTop,
    listBoxTitleRight,
    listBoxTitleBottom,
    listBoxTitleLeft,
  ]);

  return (
    <div className="listbox-title" style={listBoxTitleStyle}>
      <div className="worksite">Worksite</div>
    </div>
  );
};

export default ListBoxTitle;
