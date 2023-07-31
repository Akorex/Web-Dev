// Controller for all conversion jobs

const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const convertJpg2PDF = async (req, res) => {

    // get the file uploaded
    const filepath = req.file.path
    const extName = path.extname(filepath)
    const newFilename = path.basename(filepath, extName) + '.pdf'
    const outpath = path.join('./public/files', newFilename)

    const doc = new PDFDocument
    const writeStream = fs.createWriteStream(outpath)

    // Listen for the 'finish' event to know when the PDF is fully generated
    writeStream.on('finish', () => {
    // Now, the PDF is fully generated, and the writeStream is closed.
    // We can trigger the download after the 'finish' event is emitted.
    res.download(outpath);
    })

    doc.pipe(writeStream)
    doc.image(filepath, {
        fit: [500, 400],
        align: 'center',
        valign: 'center',
    })

    doc.end()

    //res.redirect('/download')
}

module.exports = {convertJpg2PDF}