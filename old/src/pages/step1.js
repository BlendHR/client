import VariantsLeftInactivetrue from "../components/variants-left-inactivetrue";
import "./step1.css";

const Step1 = () => {
  return (
    <div className="step-3">
      <div className="variants-group">
        <div className="variants1">
          <img className="variants-inner" alt="" src="/group-1.svg" />
          <div className="variants-child1" />
        </div>
        <div className="variants2">
          <img className="variants-inner" alt="" src="/group-1.svg" />
          <div className="variants-child1" />
        </div>
        <VariantsLeftInactivetrue
          showRectangleDiv
          variantsLeftInactivetruePosition="absolute"
          variantsLeftInactivetrueTop="86px"
          variantsLeftInactivetrueLeft="853px"
          rectangleDivFlex="1"
          rectangleDivWidth="unset"
        />
        <VariantsLeftInactivetrue
          showRectangleDiv={false}
          variantsLeftInactivetruePosition="absolute"
          variantsLeftInactivetrueTop="86px"
          variantsLeftInactivetrueLeft="965px"
          rectangleDivFlex="unset"
          rectangleDivWidth="80px"
        />
        <div className="step-3-interview">{`<--   Step 3: Interview  `}</div>
        <div className="senior-software-engineer12">11th - 12th June 2023</div>
        <div className="you-will-be">
          You will be notified shortly about your selection on Email
        </div>
        <div className="contact-us">Contact Us</div>
      </div>
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
    </div>
  );
};

export default Step1;
