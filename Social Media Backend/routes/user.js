const express = require('express')
const {getAllUsers, addUser} = require('../controllers/user')
const router = express.Router()

router.get('/', getAllUsers)
router.post('/signup', addUser)

module.exports = router