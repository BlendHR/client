import VariantsLeftInactivetrue from "../components/variants-left-inactivetrue";
import VariantsLeftActivefalse from "../components/variants-left-activefalse";
import "./step3.css";

const Step3 = () => {
  return (
    <div className="step-1">
      <div className="full-name-wrapper1">
        <div className="paste-url">Full name</div>
      </div>
      <div className="full-name-wrapper2">
        <div className="paste-url">Full name</div>
      </div>
      <div className="full-name-wrapper3">
        <div className="paste-url">Full name</div>
      </div>
      <div className="full-name-wrapper4">
        <div className="paste-url">Full name</div>
      </div>
      <div className="full-name-wrapper5">
        <div className="paste-url">Full name</div>
      </div>
      <div className="step-1-apply-by-filling-the-f-wrapper">
        <div className="step-1-apply">Step 1: Apply by filling the form</div>
      </div>
      <VariantsLeftInactivetrue showRectangleDiv />
      <VariantsLeftInactivetrue
        showRectangleDiv
        propLeft="853px"
        propFlex="1"
        propWidth="unset"
      />
      <VariantsLeftInactivetrue
        showRectangleDiv={false}
        propLeft="965px"
        propFlex="unset"
        propWidth="80px"
      />
      <VariantsLeftActivefalse />
      <div className="first-name-container">
        <span className="area-txt-container">
          <span>{`First name `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="last-company">Last Company</div>
      <div className="last-salary">Last Salary</div>
      <div className="linkedin-account-container">
        <span className="area-txt-container">
          <span>Linkedin Account</span>
          <span className="span16">{` `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="area">
        <span className="area-txt-container">
          <span>{`Area `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="give-some-details">
        Give some details about your work at your last organization
      </div>
      <div className="give-some-details1">
        Give some details about any relevant work or project you did before or
        else type NULL
      </div>
      <div className="skills">
        <span className="area-txt-container">
          <span>{`Skills `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="upload-resume-container">
        <span className="area-txt-container">
          <span>{`Upload Resume `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="phone">
        <span className="area-txt-container">
          <span>{`Phone `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="last-name-container">
        <span className="area-txt-container">
          <span>Last name</span>
          <span className="span22">{` `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="last-job-title">Last Job Title</div>
      <div className="expected-salary-container">
        <span className="area-txt-container">
          <span>{`Expected Salary `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="city1">{`City `}</div>
      <div className="cnic">
        <span className="area-txt-container">
          <span>{`CNIC `}</span>
          <span className="span15">*</span>
        </span>
      </div>
      <div className="full-name-wrapper6">
        <div className="paste-url">Full name</div>
      </div>
      <div className="paste-url-wrapper">
        <div className="paste-url">Paste URL</div>
      </div>
      <div className="full-name-wrapper7">
        <div className="paste-url">Full name</div>
      </div>
      <div className="your-answer-wrapper">
        <div className="your-answer">Your Answer</div>
      </div>
      <div className="your-answer-container">
        <div className="your-answer">Your Answer</div>
      </div>
      <div className="web-design-shell-scripting-p-wrapper">
        <div className="your-answer">
          Web Design, Shell Scripting, Penetration Testing,
        </div>
      </div>
      <div className="no-file-chosen-wrapper">
        <div className="paste-url">No file chosen</div>
      </div>
      <div className="full-name-wrapper8">
        <div className="paste-url">Full name</div>
      </div>
      <div className="full-name-wrapper9">
        <div className="paste-url">Full name</div>
      </div>
      <div className="karachi-wrapper">
        <div className="paste-url">Karachi</div>
      </div>
      <div className="full-name-wrapper10">
        <div className="paste-url">Full name</div>
      </div>
      <div className="step-1-child" />
      <div className="step-1-item" />
      <div className="step-1-inner" />
      <div className="personal-information-wrapper">
        <div className="personal-information">Personal Information</div>
      </div>
      <div className="experience-skills-wrapper">
        <div className="personal-information">{`Experience & Skills`}</div>
      </div>
      <div className="profile-wrapper24">
        <div className="personal-information">Profile</div>
      </div>
      <div className="button3">
        <div className="button-item" />
        <div className="add-profiles">Add Profiles</div>
      </div>
      <div className="button4">
        <div className="button-inner" />
        <div className="add-profiles">Chose File</div>
      </div>
      <div className="make-sure-your">
        Make sure your resume file format supports resume parsing. If it does,
        the some of the fields below will be filled automatically.
      </div>
      <div className="ignore-if-this-container">
        <span className="area-txt-container">
          <span>*</span>
          <span className="ignore-if-this">
            Ignore if this is your first job application
          </span>
        </span>
      </div>
      <div className="button5">
        <div className="button-inner" />
        <div className="add-profiles">Add Skills</div>
      </div>
    </div>
  );
};

export default Step3;
