import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const getAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4545/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserFriend = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4545/api/friendlist/${userId}`
      );
      setFriends(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    fetchUsers();
    fetchUserFriend();
  }, []);


  const handleAddFriend = async (friendId) => {
    try {
      await axios.post("http://localhost:4545/api/friendlist", {
        userId,
        friendId,
      });

      fetchUsers();
      fetchUserFriend();

      Swal.fire({
        icon: 'success',
        title: 'Your friend has been added!',
        showConfirmButton: false,
        timer: 1800,
      })
    } catch (error) {
      console.error(error);
    }
  };

  const handleFriendDetail = (friendId) => {
    navigate(`/frienddetail/${friendId}`);
  };

  console.log(friends, users);

  return (
    <div className="lists">
      <h2 className="userList">Friends List</h2>
      <h3 className="userListCaption">(Select a Friend to view their Movie Queue.)</h3>
      {friends.map((friend) => (
        <p
          key={friend.id}
          onClick={() => handleFriendDetail(friend.befriendedId)} className="user"
        >
          {friend.befriended.username}
        </p>
      ))}
      <h2 className="userList">Users</h2>
      <h3 className="userListCaption">(Select a User to add to your Friends list.)</h3>
      {users.filter(user => {
        let isFriend = false
        friends.forEach(friend => {
          if (user.id === friend.befriendedId) {
            console.log(user, friend)
            isFriend = true
          }
        })

        return !isFriend

      }).map((user) =>
        user.id !== userId  ? (
          <p key={user.id} onClick={() => handleAddFriend(user.id)} className="user">
            {user.username}
          </p>
        ) : null
      )}
    </div>
  );
};

export default getAllUsers;
