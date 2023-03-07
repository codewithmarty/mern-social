const mongoose = require('mongoose')
const Schema = mongoose.Schema

const friendshipSchema = Schema({
    firstUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    secondUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Friendship', friendshipSchema)