const Blog = require('../models/blog')

const getAllBlogs = async(req, res) => {
    const blogs = await Blog.find({})

    if (!blogs){
        return res.status(404).json({message: "No Entries for now"})
    }

    return res.status(200).json({blogs})
}

const addBlog = async(req, res) => {
    const {title, description, image, user} = req.body

    const blog = new Blog({
        title,
        description,
        image,
        user
    })

    try {
        await blog.save()
        
    } catch (error) {
        console.log(error)
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

module.exports = {getAllBlogs, addBlog, updateBlog}