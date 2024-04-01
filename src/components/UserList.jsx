// TODO: 
// Make the UI for the User list that incude user profile picture, name, email, and a button to remove the user.
// Make an admin label for admins and only show remove option to admins
// Add a loading spinner while the users are being fetched

// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserItem from './UserItem';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of users from the backend when the component mounts
    fetchUsers();
    // only runs once since empty list is passed
  }, []);

  const fetchUsers = async () => {
    try {
        /////// dummy code ////////////
        const users = [
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' },
            { id: 3, name: 'User 3' },
            // Add more users as needed
          ];
        setUsers(users);
        ////////////////////////////////
    //   const response = await axios.get('/api/users');
    //   setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleRemoveUser = async userId => {
    try {
      await axios.delete(`/api/users/${userId}`);
      // If the delete request is successful, update the local state
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <UserItem key={user.id} user={user} onRemoveUser={handleRemoveUser} />
      ))}
    </div>
  );
};

export default UserList;
