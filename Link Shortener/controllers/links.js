const Links = require('../models/links')
const shortid = require('shortid')
const validUrl = require('valid-url')


const createUrl = async (req, res) => {
    const {longUrl}= req.body

    // generate a url shortcode
    const urlCode = shortid.generate()

    // check url
    if (validUrl.isUri(longUrl)) {
        try {
            let existingUrl = await Links.findOne({ longUrl})

            if (existingUrl){
                res.status(200).json({existingUrl})       
            }

            else {
                const shortUrl = process.env.BASE_URL + '/' + urlCode
                const newUrl = await Links.create({urlCode, shortUrl, longUrl, date: new Date()})
                res.status(201).json({newUrl})
            }
        } catch(error){
            console.log(error)
            res.status(500).json({msg: "Server Error"})
        }

    }else {
        res.status(401).json({msg: "Invalid url"})
    }
}


const getUrl = async(req, res) => {
    try{
        const url = await Links.findOne({urlCode: req.params.urlCode})

        if (url){
            return res.redirect(url.longUrl)
        }else{
            return res.status(404).json({msg: "No url found"})
        }
    }catch(error){
        console.log(error)
        res.status(500).json("Server error")
    }
}

module.exports = {
    createUrl,
    getUrl
}