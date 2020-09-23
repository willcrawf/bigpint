const router = require('express').Router()
const multer = require('multer');
const upCtrlr = require('../controllers/upload')
const upload = multer({dest:'images'});
//photo is name of the input element
router.post('/', upload.single('photo'), upCtrlr.uploading)

module.exports = router