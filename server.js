const express = require("express");
const cors = require("cors");
require('dotenv').config()

// Routeer
const usersRouter = require('./Routers/users.routes');

const app = express()
const PORT = process.env.PORT || 8000

var corOptions = { origin: "http://localhost:3000" }

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter);

app.listen(PORT, () => {
    // console.log(`Server is running at port ${PORT}`)
})

