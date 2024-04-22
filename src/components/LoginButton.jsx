import { useMemo } from "react";
import "./LoginButton.css";

const LoginWithGoogle = ({
  search1,
  loginWithGoogle,
  propPadding,
  propWidth,
  propOverflow,
}) => {
  const loginWithGoogleStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const search1IconStyle = useMemo(() => {
    return {
      width: propWidth,
      overflow: propOverflow,
    };
  }, [propWidth, propOverflow]);

  return (
    <div className="login-with-google" style={loginWithGoogleStyle}>
      <div className="login-with-google-child" />
      <img
        className="search-1-icon"
        loading="lazy"
        alt=""
        src={search1}
        style={search1IconStyle}
      />
      <div className="login-with-google-wrapper">
        <div className="login-with-google1">{loginWithGoogle}</div>
      </div>
    </div>
  );
};

export default LoginWithGoogle;