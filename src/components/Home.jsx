import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../store/AuthContext'

const getAllUsers = () => {
  const [users, setUsers] = useState([]);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:4545/api/users');
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };

      const fetchUserFriend = async () => {
        try {
          const res = await axios.get(`http://localhost:4545/api/friendlist/${userId}`);

          console.log(res.data);
        }catch (error) {
          console.error(error);
        }
      }
      

    fetchUsers();
    fetchUserFriend();
  }, []);

  const handleAddFriend = async (friendId) => {
    try {
      await axios.post('http://localhost:4545/api/friendlist', {
        userId,
        friendId,
      });
      alert('Friend has been added.')
    } catch (error) {
      console.error(error);
    }
  };

  console.log(users)

  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        user.id !== userId ? <p key={user.id} onClick={() => handleAddFriend(user.id)}>
        {user.username}
      </p> : null
      ))}
    </div>
  );
};

export default getAllUsers;