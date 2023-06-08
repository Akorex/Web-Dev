const Blog = require('../models/blog')
const User = require('../models/user')
const { default: mongoose } = require('mongoose')

const getAllBlogs = async(req, res) => {
    const blogs = await Blog.find({})

    if (!blogs){
        return res.status(404).json({message: "No Entries for now"})
    }

    return res.status(200).json({blogs})
}

const addBlog = async(req, res) => {
    const {title, description, image, user} = req.body

    const existingUser = await User.findById(user)
    if (!existingUser){
        return res.status(404).json({message: "Unable to find user by this ID"})
    }

    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await blog.save()
        existingUser.blogs.push(blog)
        await existingUser.save({session})
        await session.commitTransaction()
    } catch (error) {
        console.log(error)   
        return res.status(500).json({message: error})
    }

    return res.status(200).json({blog})
}

const updateBlog = async(req, res) => {
    const {title, description} = req.body
    const blogId = req.params.id
    
    const blog = await Blog.findByIdAndUpdate(blogId, {
            title, 
            description
        })

    if (!blog) {
        return res.status(500).json({message: "Unable to update blog"})
    }

    return res.status(200).json({blog})
}

const getBlog = async(req, res) => {
    const blogId = req.params.id

    const blog = await Blog.findById(blogId)

    if (!blog){
        return res.status(404).json({message: "Blog not found"})
    }

    return res.status(200).json({blog})
}

const deleteBlog = async(req, res) => {
    const blogId = req.params.id

    const blog = await Blog.findByIdAndRemove(blogId).populate('user')
    await blog.user.blogs.pull(blog)
    await blog.user.save()

    if (!blog){
        return res.status(500).json({message: "Unable to delete blog"})
    }

    return res.status(200).json({message: "Blog deleted successfully"})
}

const getUserBlog = async(req, res) => {
    const userId = req.params.id
    const userBlogs = await User.findById(userId).populate('blogs')

    if (!userBlogs){
        return res.status(404).json({message: "No Blogs found"})
    }

    return res.status(200).json({userBlogs})
}


module.exports = {getAllBlogs, addBlog, updateBlog, getBlog, deleteBlog, getUserBlog}