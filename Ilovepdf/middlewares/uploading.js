const multer = require('multer')


// storage

const multerStorage = multer.diskStorage({
    destination: './public/files',

    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1]
        cb(null, `${file.originalname}`)
    }
})

const multerFilter = (req, file, cb) => {
    if (file.mimetype.split('.')[1] === 'jpg'){
        cb(null, true)
    }else{
        cb(new Error("Not a JPG file"))
    }
}

//const uploading = multer({
  //  storage: multerStorage,
    //limits: {fieldSize: 1 * 1024 * 1024}, // 1MB

    //fileFilter: multerFilter,
//}).array('uploadedImages', 2)


const uploading = multer({
    storage: multerStorage,
    limits: {fieldSize: 1 * 1024 * 1024} // 1 MB
})
module.exports = uploading