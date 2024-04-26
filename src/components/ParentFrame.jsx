import LoginButton from "./LoginButton";
import "./ParentFrame.css";

const ParentFrame = () => {
  return (
    <div className="frame-parent">
      <div className="login-with-google-parent">
        <LoginButton
          search1="/search-1.svg"
          loginWithGoogle="Login with Google"
          propPadding="var(--padding-6xl) var(--padding-221xl) var(--padding-2xl)"
          propWidth={16}
        />
        <LoginButton
          search1="/vector.svg"
          loginWithGoogle="Login with Facebook"
          propPadding="var(--padding-6xl) var(--padding-221xl) var(--padding-2xl)"
          propWidth="16px"
          propOverflow="unset"
        />
      </div>
      <div className="frame-wrapper">
        <div className="frame-group">
          <div className="line-wrapper">
            <div className="frame-child" />
          </div>
          <div className="or">OR</div>
          <div className="line-container">
            <div className="frame-item" />
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="email-parent">
          <div className="email">
            <div className="email-child" />
            <div className="vector-wrapper">
              <img className="vector-icon" alt="" src="/vector-1.svg" />
            </div>
            <div className="email-group">
              <div className="email1">Email</div>
              <input
                className="examplegmailcom"
                placeholder="example@gmail.com"
                type="text"
                width={16}
              />
            </div>
          </div>
          <div className="password">
            <div className="password-child" />
            <div className="frame-div">
              <div className="group-wrapper">
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
              <div className="password-parent">
                <div className="password1">Password</div>
                <input
                className="password-1"
                type="text"
                width={16}
              />
              </div>
            </div>
            <div className="bieye-fill-wrapper">
              <img
                className="bieye-fill-icon"
                loading="lazy"
                alt=""
                src="/bieyefill.svg"
              />
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent1">
            <div className="frame-parent2">
              <input className="frame-input" type="checkbox" />
              <div className="remember-me">Remember me</div>
            </div>
            <div className="forgot-password">Forgot Password?</div>
          </div>
        </div>
        <button className="button">
          <div className="button-child" />
          <div className="login">Login</div>
        </button>
      </div>
    </div>
    );
}

export default ParentFrame;