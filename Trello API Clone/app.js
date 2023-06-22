const express = require('express')
require('dotenv').config()


const app = express()
port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started. Listening on http://localhost:${port}
                Press Ctrl-C to cancel.`)
})