const express = require('express')
const uploading = require('../middlewares/uploading')

const {homePage, 
    mergePDF, 
    splitPDF, 
    compressPDF, 
    pdf2Word, 
    jpg2PDF, 
    downloadFile
    } = require('../controllers/controllers')

const {convertJpg2PDF} = require('../controllers/convert')
const Router = express.Router()

// GET
Router.get(['/', '/home'], homePage)
Router.get('/merge_pdf', mergePDF)
Router.get('/split_pdf', splitPDF)
Router.get('/compress_pdf', compressPDF)
Router.get('/pdf_to_word', pdf2Word)
Router.get('/jpg_to_pdf', jpg2PDF)
Router.get('/download', downloadFile)

// POST
Router.post('/jpg_to_pdf', uploading.single('file'), convertJpg2PDF)

module.exports = Router