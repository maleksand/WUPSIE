const config = require("./config")

const express = require("express")

const app = express()

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


// Routers
const apiRouter = require("./routers/api")

app.listen(config.httpPort)

app.use("/api", apiRouter)
