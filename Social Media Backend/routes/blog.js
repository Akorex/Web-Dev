const express = require('express')
const {getAllBlogs, addBlog, updateBlog} = require('../controllers/blog')
const router = express.Router()


router.get('/', getAllBlogs)
router.post('/add', addBlog)
router.put('/update/:id', updateBlog)

module.exports = router