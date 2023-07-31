// Controller for all conversion jobs

const fs = require('fs')

const convertJpg2PDF = (req, res) => {
    // get the file and rename to pdf
    const file = req.file
    //console.log(file)
    const newFilename = (file.originalname).split('.')[0] + '.pdf'

    // save to the public/files folder
    
    fs.rename(file.path,
     `../public/files/${newFilename}`,
     err => {
        if (err){
            console.log(err)
        }
        else{
            console.log("File renamed successfully")
        }
     })

    res.redirect(302,'/download')
}

module.exports = {convertJpg2PDF}