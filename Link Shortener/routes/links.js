const express = require('express')
const router = express.Router()
const {createUrl, getUrl} = require('../controllers/links')

router.route('/').post(createUrl)
router.route('/:code').get(getUrl)

module.exports = router