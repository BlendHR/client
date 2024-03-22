import { useMemo } from "react";
import "./list-box-title3.css";

const ListBoxTitle3 = ({
  listBoxTitleWidth,
  listBoxTitleHeight,
  listBoxTitlePosition,
  listBoxTitleTop,
  listBoxTitleRight,
  listBoxTitleBottom,
  listBoxTitleLeft,
}) => {
  const listBoxTitle3Style = useMemo(() => {
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
    <div className="listbox-title3" style={listBoxTitle3Style}>
      <div className="status">Status</div>
    </div>
  );
};

export default ListBoxTitle3;
