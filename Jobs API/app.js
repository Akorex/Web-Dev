const express = require('express')

const app = express()

// set ups

const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server started. Listening on http://localhost:${port}.
                Enter Ctrl-C to terminate`)
})