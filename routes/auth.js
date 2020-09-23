const router = require('express').Router()
const authCtrlr = require('../controllers/auth')

router.get('/', authCtrlr.getUser)
router.post('/signup', authCtrlr.signup)
router.post('/login', authCtrlr.login)
router.post('/updateUser', authCtrlr.updateUser)
router.post('/updateTokenUser/:userId', authCtrlr.updateTokenUser)

module.exports = router