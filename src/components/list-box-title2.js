import { useMemo } from "react";
import "./list-box-title2.css";

const ListBoxTitle2 = ({
  roleType,
  listBoxTitleWidth,
  listBoxTitleHeight,
  listBoxTitlePosition,
  listBoxTitleTop,
  listBoxTitleRight,
  listBoxTitleBottom,
  listBoxTitleLeft,
}) => {
  const listBoxTitle2Style = useMemo(() => {
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
    <div className="listbox-title2" style={listBoxTitle2Style}>
      <div className="role-type">{roleType}</div>
    </div>
  );
};

export default ListBoxTitle2;
