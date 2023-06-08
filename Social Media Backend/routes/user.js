const express = require('express')
const {getAllUsers, addUser, login} = require('../controllers/user')
const router = express.Router()

router.get('/', getAllUsers)
router.post('/signup', addUser)
router.post('/login', login)

module.exports = router