const multer = require('multer')


// storage

const multerStorage = multer.diskStorage({
    destination: './public/files',

    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1]
        cb(null, `${file.originalname}`)
    }
})

const storage = multer.diskStorage({
    destination: './public/files',

    filename: (req, file, cb) =>{
        cb(null, `${file.originalname}`)
    }
})


// filter

const multerFilter = (req, file, cb) => {
    if (file.mimetype.split('.')[1] === 'jpg'){
        cb(null, true)
    }else{
        cb(new Error("Not a JPG file"))
    }
}

const uploading = multer({
    storage: multerStorage,
    limits: {fileSize: 1 * 1024 * 1024} // 1 MB
})

// for multiple file upload - not yet working

const multiUpload = multer({
   storage: storage,
    limits: {fileSize: 1 * 1024 * 1024},

}).array('files', 2)



module.exports = {uploading, multiUpload}