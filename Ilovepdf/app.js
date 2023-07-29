const express = require('express')

const port = 3000
const app = express()


app.use((req, res) => {
    res.send("<h1> Page Not Found </h1>")
})
app.listen(port, () => console.log(`Server started. Listening on http://localhost:${port}`))
