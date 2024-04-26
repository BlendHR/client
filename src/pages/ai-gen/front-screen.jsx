import "./front-screen.css";

const handleLogin = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
}
const FrontScreen = () => {
  return (
    <>
    <div className="front-screen">
      <div className="welcome-to-applicant-portal-parent">
        <div className="welcome-to-applicant-container">
          <p className="welcome-to">Welcome to</p>
          <p className="applicant-portal">Applicant Portal</p>
        </div>
        <div className="login-with-google1">
          <button className="login-with-google-child" autoFocus={true} />
          <div className="search-1-group">
            <img className="search-1-icon1" alt="" src="/search-1.svg" />
            <div className="login-with-google2">Login with Google</div>
          </div>
        </div>
        <button className="login-with-facebook" autoFocus={true}>
          <div className="login-with-facebook-child" />
          <div className="login-with-facebook-parent">
            <div className="login-with-facebook1">Login with Facebook</div>
            <img className="vector-icon140" alt="" src="/vector.svg" />
          </div>
        </button>
        <div className="or2">
          <div className="or-inner" />
          <div className="or-child1" />
          <div className="or3">OR</div>
        </div>
        <button className="forgot-password1" autoFocus={true}>
          Forgot Password?
        </button>
        <div className="email4">
          <input className="email-item" type="email" id = "email"/>
          <img className="vector-icon141" alt="" src="/vector.svg" />
          <div className="email5">Email</div>
        </div>
        <input className="password1" type="password"  id = "password" />
        <div className="button6">
          <button className="rectangle-button" onClick={handleLogin} />
          <div className="login1">Login</div>
        
        </div>
        <div className="remember-me16">
          <div className="remember-me17">Remember me</div>
          <input className="check15" type="checkbox" />
        </div>
        <button className="dont-have-an-container">
          <span className="dont-have-an">{`Don’t have an account? `}</span>
          <span className="register">Register</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default FrontScreen;
