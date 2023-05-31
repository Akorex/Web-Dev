const homePage = (req, res) =>{
    res.render('home')
}

const birdsPage = (req, res) =>{
    res.render('birdspage')
}

const petsPage = (req, res) => {
    res.render('petspage')
}

const tumorsPage = (req, res) => {
    res.render('tumorspage')
}


const translatePage = (req, res) => {
    res.render('translatepage')
}

const custom404 = (req, res) => {
    res.render('404')
}

const custom500 = (err, req, res, next) => {
    res.render('500')
}

module.exports = {homePage, birdsPage, petsPage, tumorsPage, translatePage, custom404, custom500}