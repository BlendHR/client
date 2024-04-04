import React from "react";

const ProfileSection = ({ icon, title, onClick }) => {
    return (
        <div className="profile-section" onClick={onClick}>
        <img className="profile-icon" alt="" src={icon} />
        <div className="profile-title">{title}</div>
        </div>
    );
    }

export default ProfileSection;