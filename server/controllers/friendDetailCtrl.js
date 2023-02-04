const {User} = require('../models/user')
const {Friend} = require('../models/friend')

module.exports = {
    addFriend : async (req, res) => {
        try {
            const {userId, friendId} = req.body
            console.log(req.body)
            await Friend.create({
                befrienderId: +userId,
                befriendedId: friendId
            })

            res.sendStatus(200)

        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    },

    getUsers : async (req, res) => {
        try {

            const allUsers = await User.findAll()
            res.status(200).send(allUsers)

        } catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    },

    getUserFriends : async (req, res) => {
        try {

            const {userId} = req.params
            const userFriends = await Friend.findAll({where: {befrienderId:userId},
                include: [{model:User, as:"befriended"}]
            })

            res.status(200).send(userFriends)
            

        }catch(err) {
            console.log(err)
            res.sendStatus(400)
        }
    }


}
