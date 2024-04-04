import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ATSContainer from "../components/a-t-s-container";
import "./mac-book-pro146.css";

const MacBookPro146 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="login-page">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="forgot-password">Forgot Password?</div>
        <div className="email">
          <div className="email-child" />
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="email1">Email</div>
          <b className="examplegmailcom">example@gmail.com</b>
        </div>
        <div className="password-input">
          <div className="password-input-child" />
          <img className="group-icon" alt="" src="/group.svg" />
          <div className="password">Password</div>
          <b className="b">***********</b>
          <img className="bieye-fill-icon" alt="" src="/bieyefill.svg" />
        </div>
        <div className="button">
          <div className="button-child" onClick={onRectangleClick} />
          <div className="login">Login</div>
        </div>
        <div className="remember-me">
          <div className="remember-me1">Remember me</div>
          <div className="check" />
        </div>
        <div className="frame-item" />
        <ATSContainer />
      </div>
      <div className="login-page-child" />
      <div className="login-page-item" />
    </div>
  );
};

export default MacBookPro146;
