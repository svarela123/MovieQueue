import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../store/AuthContext";

const FriendDetail = () => {
  const { id } = useParams();
  const [friendDetails, setFriendDetails] = useState({});
  const [movieName, setMovieName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [movieList, setMovieList] = useState([]);
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const getFriendDetails = async () => {
    try {
      const response = await axios.get(`/api/frienddetail/${id}`);
      setFriendDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieList = async () => {
    try {
      const res = await axios.get(`http://localhost:4545/api/movielist/${id}`);
      setMovieList(res.data);
      console.log(res.data, userId);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewMovie = async (event) => {
    event.preventDefault();
    const body = {
      adderId: userId,
      recipientId: friendDetails.id,
      movieName,
      imageUrl,
    };

    try {
      const res = await axios.post("/api/movielist", body);
      console.log(res.data);
      getMovieList();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFriendDetails();
    getMovieList();
  }, []);

  // console.log(friendDetails);

  // console.log({ movieList });

  return (
    <div className="addMovie">
      Add a movie to your friend's Movie Queue!
      <form onSubmit={addNewMovie} className="addMovie">
        <input
          type="text"
          value={movieName}
          onChange={(event) => setMovieName(event.target.value)}
          placeholder="Movie Name"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="Image URL"
        />
        <button type="submit">Add Movie</button>
      </form>
      <h2 className="addMovieTitle">Friend's Movie Queue</h2>
      <ul>
        {movieList.map((movie) => (
          <li
            className="movieList"
            key={movie.id}
            onClick={() => navigate.push("/api/movielist/:userId")}
          >
            <h2>{movie.movieName}</h2>
            <div className="movieImages" >
              <img src={movie.imageUrl}/>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendDetail;
