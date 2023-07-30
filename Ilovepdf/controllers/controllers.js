const homePage = (req, res) => {
    res.render('home', {title: "iLovePDF | Online PDF tools"})
}

const mergePDF = (req, res) => {
    res.render('mergepdf', {title: "Merge PDF files"})
}

const splitPDF = (req, res) => {
    res.render('splitpdf', {title: "Split PDF files"})
}

const compressPDF = (req, res) => {
    res.render('compresspdf', {title: "Compress PDF files"})
}

const pdf2Word = (req, res) => {

}

const jpg2PDF = (req, res) => {
    res.render('jpg2pdf', {title: "Convert JPG to PDF"})
}


const convertJpg2PDF = (req, res) => {

}


module.exports = {
    homePage, 
    mergePDF, 
    splitPDF,
    compressPDF,
    pdf2Word,
    jpg2PDF, 
    convertJpg2PDF
}