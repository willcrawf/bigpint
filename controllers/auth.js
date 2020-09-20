const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getUser = (req, res) => {

}

const signup = (req, res) => {
    try {
        User.create(req.body, (err, user) => {
            const token = createJwt(user)
            res.json({ token })
        })
    } catch (err) {res.status(400).send({ 'err': err.errmsg })}
}

const login = ({ body }, res) => {
    try {
        User.findOne({ email: body.email }, (err, user) => {
            if (!user) return res.status(401).json({ err: 'bad creds' })
            user.checkPW(body.password, (err, isMatch) => {
                if (isMatch) {
                    const token = createJwt(user)
                    res.json({ token })
                } else {
                    res.status(401).json({ err: 'bad creds' })
                }
            })
        })
    } catch (err) {res.status(401).json(err)}
}

function createJwt(user) {
    return jwt.sign(
        {user},
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
    )
}

module.exports = { getUser, signup, login }