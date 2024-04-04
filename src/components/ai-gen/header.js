import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/macbook-pro-14-3");
  }, [navigate]);

  return (
    <div className="ellipse-parent6">
      <div className="frame-child63" />
      <img
        className="bell-badge-outline-icon9"
        alt=""
        src="/bellbadgeoutline.svg"
      />
      <img className="frame-child64" alt="" src="/group-10.svg" />
      <div className="what-are-you9">what are you looking for?</div>
      <img className="vector-icon169" alt="" src="/vector10.svg" />
      <button className="frame-button" onClick={onFrameButtonClick}>
        <img className="chevron-left-icon8" alt="" src="/chevronleft.svg" />
        <div className="back4">Back</div>
      </button>
    </div>
  );
};

export default Header;
