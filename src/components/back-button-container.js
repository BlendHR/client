import ColorVioletThemeDarkImage from "./color-violet-theme-dark-image";
import "./back-button-container.css";

const BackButtonContainer = () => {
  return (
    <div className="leonard-campbell-parent">
      <div className="leonard-campbell2">Leonard Campbell</div>
      <ColorVioletThemeDarkImage
        colorVioletThemeDarkImage="/avatars@2x.png"
        colorVioletThemeDarkIconWidth="111px"
        colorVioletThemeDarkIconOverflow="unset"
        colorVioletThemeDarkIconHeight="105px"
        colorVioletThemeDarkIconPosition="absolute"
        colorVioletThemeDarkIconTop="42px"
        colorVioletThemeDarkIconLeft="118px"
      />
      <div className="applied-jobs">APPLIED JOBS</div>
      <div className="frame-wrapper29">
        <div className="senior-product-designer-parent">
          <div className="senior-product-designer1">
            Senior Product Designer
          </div>
          <div className="full-time1">Full time . Islamabad</div>
        </div>
      </div>
      <div className="contact">CONTACT</div>
      <div className="tab-group">
        <div className="tab173">
          <div className="tab-child193" />
          <img className="vector-icon170" alt="" src="/vector101.svg" />
          <div className="div14">+300 3820298</div>
        </div>
        <div className="tab174">
          <div className="tab-child193" />
          <img className="vector-icon171" alt="" src="/vector111.svg" />
          <div className="house-no12-margala">
            House No.12, Margala Road, Islamabad.
          </div>
        </div>
        <div className="tab175">
          <div className="tab-child193" />
          <div className="rectangle-parent23">
            <div className="group-child90" />
            <img className="polygon-icon" alt="" src="/polygon-6.svg" />
          </div>
          <a
            className="leonardbellgmailcom"
            href="mailto:leonardcampbell@gmail.com"
            target="_blank"
          >
            leonardbell@gmail.com
          </a>
        </div>
      </div>
      <button className="accept-wrapper">
        <div className="accept">{`Accept `}</div>
      </button>
      <button className="reject-wrapper">
        <div className="reject">Reject</div>
      </button>
    </div>
  );
};

export default BackButtonContainer;
