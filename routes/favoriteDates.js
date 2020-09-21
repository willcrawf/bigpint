const express = require('express')
const router = express.Router()
const favoriteDatesCtrl = require('../controllers/favoriteDates')

router.get('/',favoriteDatesCtrl.index)

module.exports = router