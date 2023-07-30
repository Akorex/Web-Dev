const notFound = (req, res) => {
    res.status(404).render('notfound')
}

module.exports = notFound