import { useMemo } from "react";
import "./list-box-title4.css";

const ListBoxTitle4 = ({
  listBoxTitleWidth,
  listBoxTitleHeight,
  listBoxTitlePosition,
  listBoxTitleTop,
  listBoxTitleRight,
  listBoxTitleBottom,
  listBoxTitleLeft,
}) => {
  const listBoxTitle4Style = useMemo(() => {
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
    <div className="listbox-title4" style={listBoxTitle4Style}>
      <div className="job">Job</div>
    </div>
  );
};

export default ListBoxTitle4;
