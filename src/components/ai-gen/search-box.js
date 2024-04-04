import { useMemo } from "react";
import "./search-box.css";

const SearchBox = ({ searchBoxHeight }) => {
  const searchBoxStyle = useMemo(() => {
    return {
      height: searchBoxHeight,
    };
  }, [searchBoxHeight]);

  return (
    <div className="search-box" style={searchBoxStyle}>
      <img className="search-icon" alt="" src="/search-icon@2x.png" />
      <div className="search-your-team">Search Your Team Members</div>
    </div>
  );
};

export default SearchBox;
