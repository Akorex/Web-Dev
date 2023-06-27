const express = require('express')
const router = express.Router()
const {createUrl} = require('../controllers/links')

router.route('/').post(createUrl).get()

module.exports = router