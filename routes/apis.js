const router = require('express').Router()
const gPhotosCtrlr = require('../controllers/gPhotos')
const userPhotosCtrlr = require('../controllers/userPhotos')

router.post('/gPhotos', gPhotosCtrlr.returnGPhotos)
// router.get('/userPhotos/:userId', userPhotosCtrlr.getUserPhotos)
// router.post('/userPhotos/:userId')

module.exports = router