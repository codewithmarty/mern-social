const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = Schema({
    name: String,
    img: String,
    description: String,
    github: String,
    technologies: [String],
    deployed: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Project', projectSchema)