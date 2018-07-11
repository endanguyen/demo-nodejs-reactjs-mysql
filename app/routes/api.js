var express = require('express')
var router = express.Router()
var userControler = require('../controllers/api/userController')
// you can include all your controllers
router.get('/user', userControler.index)

module.exports = router