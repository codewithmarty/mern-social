const User = require('../models/user')
const jwt = require('jsonwebtoken')

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        const token = createJWT(user);
        res.status(200).json(token)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function signup(req, res) {
    try {
        const user = await User.create(req.body).catch(err => console.log(err));
        const token = createJWT(user);
        res.status(200).json(token)
    } catch(err) {
        res.status(400).json(err)
    }
}


function createJWT(user) {
    return jwt.sign(
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
}

module.exports = {
    login,
    signup
}