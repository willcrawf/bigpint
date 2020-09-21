const express = require('express')
const router = express.Router()
const multer = require('multer');
const upctrl = require('../controllers/upload')
//assigns directory where pics will be stored
const upload = multer({dest:'images'});
//photo is name of the input element
router.post('/', upload.single('photo'), upctrl.uploading)

module.exports = router