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

  useEffect(() => {
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

    fetchUsers();
    fetchUserFriend();
  }, []);


  const handleAddFriend = async (friendId) => {
    try {
      await axios.post("http://localhost:4545/api/friendlist", {
        userId,
        friendId,
      });
      Swal.fire({
        icon: 'success',
        title: 'Your friend has been added!',
        showConfirmButton: false,
        timer: 1800,
      })
      // alert("Friend has been added.");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFriendDetail = (friendId) => {
    navigate(`/frienddetail/${friendId}`);
  };

  console.log(friends);

  return (
    <div className="lists">
      <h2 className="userList">Users</h2>
      {users.map((user) =>
        user.id !== userId ? (
          <p key={user.id} onClick={() => handleAddFriend(user.id)}>
            {user.username}
          </p>
        ) : null
      )}
      <h2 className="userList">Friends</h2>
      {friends.map((friend) => (
        <p
          key={friend.id}
          onClick={() => handleFriendDetail(friend.befriendedId)}
        >
          {friend.befriended.username}
        </p>
      ))}
    </div>
  );
};

export default getAllUsers;
