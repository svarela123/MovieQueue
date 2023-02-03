import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../store/AuthContext'

const getAllUsers = () => {
  const [users, setUsers] = useState([]);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:4545/api/getAllUsers');
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddFriend = async (friendId) => {
    try {
      await axios.post('http://localhost:4545/api/addfriend', {
        userId,
        friendId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <p key={user.id} onClick={() => handleAddFriend(user.id)}>
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default getAllUsers;