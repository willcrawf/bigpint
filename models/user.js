const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 7;

const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true, lowercase: true},
    password: String,
    photos: {type: [Schema.Types.ObjectId], ref: 'Photo', default: []},
    faveDates: {type: [Date], default: ['2021-10-05T14:48:00.000Z', '2020-10-05T14:48:00.000Z', '2019-10-05T14:48:00.000Z', '2018-10-05T14:48:00.000Z', '2017-10-05T14:48:00.000Z']},
    gId: String,
    gName: String,
    // gEmail: String,
    token: String,
    gRefreshToken: String,
    profile: Object,
}, {timestamps: true})

userSchema.set('toJSON', {
    transform: function(doc, returned) {
        delete returned.password
        return returned
    }
})
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPW = function(tryPW, done) {
    bcrypt.compare(tryPW, this.password, done)
}

module.exports = mongoose.model('User', userSchema)