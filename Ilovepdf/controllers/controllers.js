const homePage = (req, res) => {
    res.render('home', {title: "Home"})
}

const mergePDF = (req, res) => {
    res.render('mergepdf', {title: "Merge PDF files"})
}

const splitPDF = (req, res) => {
    res.render('splitpdf', {title: "Split PDF files"})
}

module.exports = {
    homePage, 
    mergePDF, 
    splitPDF,
}