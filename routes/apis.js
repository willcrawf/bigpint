const router = require('express').Router()
const gPhotosCtrlr = require('../controllers/gPhotos')
const userPhotosCtrlr = require('../controllers/userPhotos')

router.post('/gPhotos', gPhotosCtrlr.returnGPhotos)
router.get('/users/:userId/photos', userPhotosCtrlr.getUserPhotos)
router.post('/users/:userId/photos', userPhotosCtrlr.addPhotoToUserDB)
router.delete('/users/:userId/photos/:photoId', userPhotosCtrlr.deletePhoto)

module.exports = router