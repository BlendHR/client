import VariantsLeftInactivetrue from "../components/variants-left-inactivetrue";
import "./step2.css";

const Step2 = () => {
  return (
    <div className="step-4">
      <div className="variants-container">
        <div className="variants3">
          <img className="variants-child4" alt="" src="/group-1.svg" />
          <div className="variants-child5" />
        </div>
        <div className="variants4">
          <img className="variants-child4" alt="" src="/group-1.svg" />
          <div className="variants-child5" />
        </div>
        <div className="variants5">
          <img className="variants-child4" alt="" src="/group-1.svg" />
          <div className="variants-child5" />
        </div>
        <VariantsLeftInactivetrue
          showRectangleDiv={false}
          variantsLeftInactivetruePosition="absolute"
          variantsLeftInactivetrueTop="86px"
          variantsLeftInactivetrueLeft="965px"
          rectangleDivFlex="unset"
          rectangleDivWidth="80px"
        />
        <div className="step-4-interview">{`<--   Step 4: Interview 2 - Onsite `}</div>
        <div className="senior-software-engineer13">15th - 16th June 2023</div>
        <div className="you-will-be1">
          You will be notified shortly about your selection on Email
        </div>
        <div className="contact-us1">Contact Us</div>
      </div>
      <img className="image-4-icon1" alt="" src="/image-4@2x.png" />
    </div>
  );
};

export default Step2;
