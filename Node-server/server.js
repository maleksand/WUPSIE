const config = require("./config")

const express = require("express")
const app = express()

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const path = require("path")

// Routers
const apiRouter = require("./routers/api")


app.use(express.static("./build"))

app.use("/api", apiRouter)

// defualt path, let react handle it
app.get("*", (req, res) => {
    let options = {
        root: path.join(__dirname + `/build`)
    }
    res.sendFile("index.html", options)
})


app.listen(config.httpPort)