const express = require('express')
const {homePage, mergePDF, splitPDF, compressPDF} = require('../controllers/controllers')
const Router = express.Router()

Router.get(['/', '/home'], homePage)
Router.get('/merge_pdf', mergePDF)
Router.get('/split_pdf', splitPDF)
Router.get('/compress_pdf', compressPDF)

module.exports = Router