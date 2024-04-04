import VariantsLeftInactivetrue from "../components/variants-left-inactivetrue";
import VariantsLeftActivefalse from "../components/variants-left-activefalse";
import "./step.css";

const Step = () => {
  return (
    <div className="step-2">
      <div className="variants-parent">
        <div className="variants">
          <img className="variants-child" alt="" src="/group-1.svg" />
          <div className="variants-item" />
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
        <VariantsLeftActivefalse
          variantsLeftActivefalsePosition="absolute"
          variantsLeftActivefalseTop="86px"
          variantsLeftActivefalseLeft="741px"
        />
        <div className="step-2-take">{`<--   Step 2: Take Online Tests `}</div>
        <div className="senior-software-engineer-parent1">
          <div className="senior-software-engineer7">JavaScript Skill Test</div>
          <img className="image-3-icon3" alt="" src="/image-31@2x.png" />
        </div>
        <div className="senior-software-engineer-parent2">
          <div className="senior-software-engineer7">JavaScript Skill Test</div>
          <img className="image-3-icon3" alt="" src="/image-31@2x.png" />
        </div>
        <div className="senior-software-engineer-parent3">
          <div className="senior-software-engineer7">JavaScript Skill Test</div>
          <img className="image-3-icon3" alt="" src="/image-31@2x.png" />
        </div>
        <div className="senior-software-engineer10">
          4 days 2:00 hrs remaining
        </div>
        <div className="senior-software-engineer11">
          Your will be automatically redirected to the next step after the time
          ends
        </div>
      </div>
    </div>
  );
};

export default Step;
