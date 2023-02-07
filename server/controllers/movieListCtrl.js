const { MovieList } = require("../models/movieList");

module.exports = {
  getMovieList: async (req, res) => {
    try {
      const { friendId } = req.params;
      const movieList = await MovieList.findAll({where: {recipientId:friendId}});
      res.status(200).send(movieList);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },

  addToFriendsList: async (req, res) => {
    try {
      const { movieName, imageUrl, adderId, recipientId } = req.body;
      console.log(req.body);
      const newMovie = await MovieList.create({
        movieName,
        imageUrl,
        adderId,
        recipientId,
      });

      res.send(newMovie);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  },
};
