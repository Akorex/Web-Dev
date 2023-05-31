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
module.exports = {homePage, birdsPage, petsPage, tumorsPage, translatePage}