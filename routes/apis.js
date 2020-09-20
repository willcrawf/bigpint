const router = require('express').Router()
const gPhotosCtrlr = require('../controllers/gPhotos')

router.post('/gPhotos', gPhotosCtrlr.returnGPhotos)

module.exports = router