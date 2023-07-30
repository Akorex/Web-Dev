const express = require('express')
const {homePage, 
    mergePDF, 
    splitPDF, 
    compressPDF, 
    pdf2Word, 
    jpg2PDF, 
    convertJpg2PDF} = require('../controllers/controllers')
const Router = express.Router()

Router.get(['/', '/home'], homePage)
Router.get('/merge_pdf', mergePDF)
Router.get('/split_pdf', splitPDF)
Router.get('/compress_pdf', compressPDF)
Router.get('/pdf_to_word', pdf2Word)
Router.get('/jpg_to_pdf', jpg2PDF).post(convertJpg2PDF)

module.exports = Router