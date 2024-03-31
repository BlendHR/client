import "./team-member-search-container.css";

const TeamMemberSearchContainer = ({ fullName }) => {
  return (
    <div className="tag">
      <div className="burhanuddin-ezzi">{fullName}</div>
      <div className="cross-icon">
        <div className="cross-icon-child" />
        <img className="cross-icon1" alt="" src="/cross.svg" />
      </div>
    </div>
  );
};

export default TeamMemberSearchContainer;
