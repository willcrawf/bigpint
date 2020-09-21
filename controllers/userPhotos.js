const User = require('../models/user')

const getUserPhotos = (req, res) => {
    User.findOne({ _id: req.params.userId })
    .then(user => res.status(200).json({ userPhotos: user.photos }))
}

const addPhotoToUserDB = (req, res) => {
    
}