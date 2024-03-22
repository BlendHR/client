import { useCallback } from "react";
import "./verify-email.css";

const VerifyEmail = () => {
  const onFrameContainer1Click = useCallback(() => {
    // Please sync "MacBook Pro 16" - 5" to the project
  }, []);

  return (
    <div className="verify-email">
      <div className="verify-email-to-continue-appli-parent">
        <div className="verify-email-to-container">
          <p className="verify-email-to">
            Verify email to continue application for
          </p>
          <p className="senior-software-developer">Senior Software Developer</p>
        </div>
        <div className="frame7">
          <div className="frame8">
            <div className="frame9">
              <div className="login-with-google">
                <div className="search-1-parent">
                  <img className="search-1-icon" alt="" src="/search-1.svg" />
                  <div className="apply-with-google">Apply with Google</div>
                </div>
              </div>
            </div>
            <div className="frame10">
              <div className="or">
                <div className="or-child" />
                <div className="or-item" />
                <div className="or1">OR</div>
              </div>
            </div>
            <div className="frame11">
              <div className="email2">
                <img className="vector-icon139" alt="" src="/vector.svg" />
                <div className="frame12">
                  <div className="apply-with-google">Email</div>
                  <b className="examplegmailcom1">example@gmail.com</b>
                </div>
              </div>
            </div>
          </div>
          <div className="frame13" onClick={onFrameContainer1Click}>
            <div className="button1">
              <div className="apply">Apply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
