const express = require('express')
const {getAllBlogs, addBlog, updateBlog, getBlog, deleteBlog, getUserBlog} = require('../controllers/blog')
const router = express.Router()


router.get('/', getAllBlogs)
router.post('/add', addBlog)
router.put('/update/:id', updateBlog)
router.get('/:id', getBlog)
router.delete('/:id', deleteBlog)
router.delete('/user/:id', getUserBlog)

module.exports = router