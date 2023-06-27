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

            if (url){
                res.status(200).json({existingUrl})       
            }

            else {
                const shortUrl = process.env.BASE_URL + '/' + urlCode
                const newUrl = Links.create({urlCode, shortUrl, longUrl, date: new Date()})
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




module.exports = {createUrl,
                }