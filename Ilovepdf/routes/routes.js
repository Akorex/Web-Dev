const express = require('express')
const uploading = require('../middlewares/uploading')

const {homePage, 
    mergePDF, 
    splitPDF, 
    compressPDF, 
    pdf2Word, 
    jpg2PDF, 
    downloadPage,
    PDF2jpg, 
    Word2PDF
    } = require('../controllers/routes')

const {
    convertJpg2PDF,
    convertPDF2Jpg,
    convertWordToPDF,
    downloadFile} = require('../controllers/convert')
const Router = express.Router()

// GET
Router.get(['/', '/home'], homePage)
Router.get('/merge_pdf', mergePDF)
Router.get('/split_pdf', splitPDF)
Router.get('/compress_pdf', compressPDF)
Router.get('/pdf_to_word', pdf2Word)
Router.get('/word_to_pdf', Word2PDF)
Router.get('/jpg_to_pdf', jpg2PDF)
Router.get('/download', downloadPage)//.get(downloadFile)
Router.get('/pdf_to_jpg', PDF2jpg)

// POST
Router.post('/jpg_to_pdf', uploading.single('file'), convertJpg2PDF)
Router.post('/pdf_to_jpg', uploading.single('file'), convertPDF2Jpg)
Router.post('/word_to_pdf', uploading.single('file'), convertWordToPDF)
Router.post('/download', downloadFile)
//Router.post('/jpg_to_pdf', uploading, convertJpg2PDF) for multiple jpg upload failed

module.exports = Router