// Controller for all conversion jobs

const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const convertJpg2PDF = (req, res) => {

    // get the file uploaded
    const filepath = req.file.path
    const extName = path.extname(filepath)
    const newFilename = path.basename(filepath, extName) + '.pdf'
    const outpath = path.join('./public/files', newFilename)

    const doc = new PDFDocument
    doc.pipe(fs.createWriteStream(outpath))
    doc.image(filepath, {
        fit: [500, 400],
        align: 'center',
        valign: 'center',
    })

    doc.end()

    downloadfile = res.download(outpath)
    res.redirect('/download')
}

module.exports = {convertJpg2PDF}