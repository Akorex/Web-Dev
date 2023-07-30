// Controller for all conversion jobs

const convertJpg2PDF = async (req, res) => {
    // get the file and rename to pdf
    const file = req.file
    const newFilename = (file.originalname).split('.')[0] + '.pdf'

    // save to the public/files folder

    //file.mv('./public/files' + newFilename, (err) => {
      //  if (err){
            //console.log(`Somthing went wrong`)
        //}
    //})

    res.redirect(302,'/download')
}

module.exports = {convertJpg2PDF}