// import React, { useState } from 'react'; 
// import Friend from './models/friend';
// const {Friend} = require('../models/friend')

// module.exports = {
//     addFriend : async (req, res) => {
//         try {
//             const {userId, friendId} = req.body
//         }
//         // console.log('')
//     }
// }

// const AddFriend = () => {
//   const [userId, setUserId] = useState('');
//   const [friendId, setFriendId] = useState('');
//   const [status, setStatus] = useState('');

//   const addFriend = async () => {
//     try {
//       const newFriend = new Friend({
//         befrienderId: userId,
//         befriendedId: friendId
//       });
//       await newFriend.save();
//       setStatus('Friend added successfully!');
//     } catch (error) {
//       setStatus('Error adding friend. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="User ID"
//         value={userId}
//         onChange={e => setUserId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Friend ID"
//         value={friendId}
//         onChange={e => setFriendId(e.target.value)}
//       />
//       <button onClick={addFriend}>Add Friend</button>
//       {status && <p>{status}</p>}
//     </div>
//   );
// };

// export default AddFriend;