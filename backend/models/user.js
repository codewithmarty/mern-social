const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    pic: {
        type: String,
        default: "https://static.thenounproject.com/png/5034901-200.png"
    },
    bio: String,
    github: String,
    instagram: String,
    portfolio: String,
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)