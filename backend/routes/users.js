const express = require('express')
const router = express.Router()
const usersCtrl = require('../controllers/users')

router.get('/check-token', usersCtrl.checkToken)
router.get('/', usersCtrl.index)
router.post('/login', usersCtrl.login)
router.post('/', usersCtrl.signup)

module.exports = router