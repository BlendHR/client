import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./apply-to-job.css";

const ApplyToJob = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/verify-email");
  }, [navigate]);

  return (
    <div className="apply-to-job">
      <div className="apply-to-job-child" />
      <div className="benefitsperks-listed-below-ma-wrapper">
        <div className="benefitsperks-listed-below-container">
          <p className="benefitsperks-listed-below">
            Benefits/perks listed below may vary depending on the nature of your
            employment with JBS
          </p>
          <p className="benefitsperks-listed-below">&nbsp;</p>
          <ul className="industry-leading-healthcare-e">
            <li className="industry-leading-healthcare">
              <span>Industry leading healthcare</span>
            </li>
            <li className="industry-leading-healthcare">
              <span>Educational resources</span>
            </li>
            <li className="industry-leading-healthcare">
              <span>Discounts on products and services</span>
            </li>
            <li className="industry-leading-healthcare">
              <span>Savings and investments</span>
            </li>
            <li className="industry-leading-healthcare">
              <span>Maternity and paternity leave</span>
            </li>
            <li className="industry-leading-healthcare">
              <span>Generous time away</span>
            </li>
            <li className="industry-leading-healthcare">
              <span>Giving programs</span>
            </li>
            <li>
              <span>Opportunities to network and connect</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="jbs-is-an-equal-opportunity-em-wrapper">
        <div className="jbs-is-an-container">
          {`JBS is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about `}
          <a
            className="requesting-accommodations"
            href="https://careers.microsoft.com/v2/global/en/accessibility.html"
            target="_blank"
          >
            <span className="requesting-accommodations1">
              requesting accommodations
            </span>
          </a>
          .
        </div>
      </div>
      <div className="frame14">
        <div className="frame15">
          <div className="date-posted">Date Posted</div>
          <div className="jun-02-2023">Jun 02, 2023</div>
        </div>
        <div className="frame16">
          <div className="jun-02-2023">1556423</div>
          <div className="date-posted">Job number</div>
        </div>
      </div>
      <div className="frame17">
        <div className="work-site">Work site</div>
        <div className="travel">Travel</div>
        <div className="up-to-100">Up to 100% work from home</div>
        <div className="div9">0-25 %</div>
      </div>
      <div className="frame18">
        <div className="role-type1">Role type</div>
        <div className="profession1">Profession</div>
        <div className="individual-contributor">Individual Contributor</div>
        <div className="software-engineering">Software Engineering</div>
      </div>
      <div className="frame19">
        <div className="date-posted">Discipline</div>
        <div className="employment-type">Employment type</div>
        <div className="jun-02-2023">Software Engineering</div>
        <div className="full-time">Full-Time</div>
      </div>
      <div className="frame20">
        <div className="frame-parent33">
          <div className="senior-software-engineer-wrapper">
            <div className="senior-software-engineer3">Overview</div>
          </div>
          <div className="senior-software-engineer-frame">
            <div className="senior-software-engineer-container1">
              <span className="senior-software-engineer-container2">
                <p className="this-role-is">
                  This role is remote and it is open for candidates that reside
                  in Karachi, Pakistan ONLY
                </p>
                <p className="microsoft-365-substrate">
                  Microsoft 365 substrate is critical to Microsoft’s cloud
                  strategy and it is experiencing tremendous growth, with 120
                  million monthly active commercial users and hundreds of
                  millions of consumer users. The Substrate is a massively
                  distributed cloud service with O(exabyte) data handled by
                  O(100K) servers in O(100) data-centers around the entire
                  globe, and it's a joint effort across Office 365 teams as well
                  as Windows and Bing.
                </p>
                <p className="microsoft-365-substrate">
                  We are the O365 substrate productivity intelligence team, and
                  we are building a platform that empowers first and third-party
                  developers and data scientist to build new breed of
                  intelligent applications without compromising O365 data
                  privacy and compliance standards. O365 MyAnalytics, CRM,
                  Workplace Analytics and Bing apps are examples of consumers of
                  the platform. The platform also enables Machine learning
                  solutions over O365 substrate data.
                </p>
                <p className="microsoft-365-substrate">
                  We are looking for a software developer with a passion for
                  solving hard problems, big data, real time event processing,
                  and building software at very large scale.
                </p>
                <p className="microsoft-365-substrate">
                  A successful candidate will show skills in the following
                  areas:
                </p>
                <ul className="design-and-coding-you-have-st">
                  <li className="industry-leading-healthcare">
                    <span>
                      Design and coding: You have strong design and
                      problem-solving skills.
                    </span>
                  </li>
                  <li className="industry-leading-healthcare">
                    <span>
                      Technology: You are technically strong across a broad set
                      of service technologies. You can come up to speed on new
                      products and technologies quickly and have a passion for
                      continuing to grow in the technical dimension.
                    </span>
                  </li>
                  <li>
                    <span>
                      Collaboration: You can collaborate across various teams in
                      Microsoft.
                    </span>
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="senior-software-engineer-wrapper1">
            <div className="senior-software-engineer4">Responsibilities</div>
          </div>
          <div className="senior-software-engineer-wrapper2">
            <div className="senior-software-engineer-container3">
              <ul className="develop-mlops-systems-for-offi">
                <li className="industry-leading-healthcare">
                  Develop MLOps systems for Office AI
                </li>
                <li className="industry-leading-healthcare">
                  Develop and support
                </li>
                <li className="industry-leading-healthcare">
                  Develop online and offline tools to automatically onboard and
                  ship inference workflows to production
                </li>
                <li>
                  Improve AI online experimentation agility by applying new
                  approaches and industry innovations
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="frame-parent34">
          <div className="senior-software-engineer-wrapper3">
            <div className="senior-software-engineer3">Qualifications</div>
          </div>
          <div className="basic-qualifications-bachelor-wrapper">
            <div className="basic-qualifications-bachelor-container">
              <p className="this-role-is">Basic Qualifications:</p>
              <ul className="design-and-coding-you-have-st">
                <li className="industry-leading-healthcare">
                  <span>Bachelors in computer science (or related field)</span>
                </li>
                <li className="industry-leading-healthcare">
                  <span>2+ years of software development experience</span>
                </li>
                <li>
                  <span>Experience in OOP C# / Java or Python</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="preferred-qualifications-and-container">
            <p className="this-role-is">
              Preferred Qualifications and Experience:
            </p>
            <ul className="design-and-coding-you-have-st">
              <li className="industry-leading-healthcare">
                <span>
                  Experience building web services and working with Big data
                  systems
                </span>
              </li>
              <li className="industry-leading-healthcare">
                <span>
                  Good understanding of data structures, algorithms, programming
                  patterns, and solving complex problems.
                </span>
              </li>
              <li className="industry-leading-healthcare">
                <span>
                  Familiarity with Apache spark, databricks, Azure HDInsights or
                  Synapse or Azure ML systems.
                </span>
              </li>
              <li>
                <span>
                  Familiarity with ETL, Data Modeling, Data Engineering and past
                  ML experience is a plus
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="senior-software-developer-wrapper">
        <div className="senior-software-developer1">{`<--   Senior Software Developer`}</div>
      </div>
      <div className="frame21">
        <div className="button2" onClick={onButtonContainerClick}>
          <div className="apply1">Apply</div>
        </div>
      </div>
      <div className="frame22">
        <div className="senior-software-engineer6">Karachi, Pakistan</div>
      </div>
      <div className="apply-to-job-item" />
      <div className="apply-to-job-inner" />
    </div>
  );
};

export default ApplyToJob;
