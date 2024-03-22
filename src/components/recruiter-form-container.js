import SearchBox from "./search-box";
import TeamMemberSearchContainer from "./team-member-search-container";
import "./recruiter-form-container.css";

const RecruiterFormContainer = () => {
  return (
    <div className="add-recruiters-parent">
      <div className="add-recruiters">Add Recruiters</div>
      <SearchBox searchBoxHeight="70px" />
      <div className="tag-parent">
        <TeamMemberSearchContainer fullName="Burhanuddin Ezzi" />
        <TeamMemberSearchContainer fullName="Laiba Abid" />
        <TeamMemberSearchContainer fullName="Sidra Amir" />
      </div>
    </div>
  );
};

export default RecruiterFormContainer;
