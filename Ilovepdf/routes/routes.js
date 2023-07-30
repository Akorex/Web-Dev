const express = require('express')
const {homePage, mergePDF, splitPDF} = require('../controllers/controllers')
const Router = express.Router()

Router.get(['/', '/home'], homePage)
Router.get('/merge_pdf', mergePDF)
Router.get('/split_pdf', splitPDF)

module.exports = Router