const express = require('express')
const router = express.Router()
const usersCtrl = require('../controllers/users')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/check-token', usersCtrl.checkToken)
router.get('/', usersCtrl.index)
router.post('/login', usersCtrl.login)
router.post('/', usersCtrl.signup)
router.put('/', usersCtrl.updateBioLinks)
router.put('/addProject', usersCtrl.addProject)
router.put('/uploadPhoto', upload.single('file'), usersCtrl.uploadPhoto)

module.exports = router