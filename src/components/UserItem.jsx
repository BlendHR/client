// UserItem.js
import React from 'react';
import { Button } from 'react-bootstrap';

const UserItem = ({ user, onRemoveUser }) => {
  const handleRemoveClick = () => {
    onRemoveUser(user.id);
  };

  return (
    <div>
      <span>{user.name}</span>
      {/* Check if user is admin, only then they can remove others */}
      <Button variant="danger" onClick={handleRemoveClick}>
        Remove
      </Button>
    </div>
  );
};

export default UserItem;
