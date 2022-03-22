const config = require("./config")

const express = require("express")
const app = express()

// Routers
const apiRouter = require("./routers/api")

app.listen(config.httpPort)

app.use("/api", apiRouter)