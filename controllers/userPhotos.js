const User = require('../models/user')
const Photo = require('../models/photo')

const getUserPhotos = async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId })
    console.log('before: ' + user.photos.length)
    user.execPopulate('photos')
    .then(({ photos }) => {
        console.log(photos)
        return res.status(200).json({ photos })
    })
}

const addPhotoToUserDB = async (req, res) => {
    const gId = {...req.body}.id
    delete req.body.id
    const preppedPhoto = { ...req.body, gId }
    const newPhoto = await Photo.create(preppedPhoto)
    const user = await User.findOne({ _id: req.params.userId })
    user.photos.push(newPhoto._id)
    user.save()
    .then(user => res.status(201).json({ newPhoto }))
}

const deletePhoto = (req, res) => {
    console.log(req.params.photoId)
    try {
        User.findOneAndUpdate({ _id: req.params.userId }, 
            {$pull: {'photos': req.params.photoId}},
            {   
                useFindAndModify: false,
                new: true
            })
            .then(user => res.status(200).json(user))
    } catch (err) {res.status(401)}
}

module.exports = { getUserPhotos, addPhotoToUserDB, deletePhoto }