const {MovieList} = require('../models/movieList')

module.exports = {
    getMovieList : async (req, res) => {
        try {
            const movieList = await MovieList.findAll(
                res.status(200).send(movieList)
            )
        }catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }
}