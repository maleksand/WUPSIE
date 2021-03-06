const config = require("./config")

const express = require("express")
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require("path")
const cors = require("cors")

// Routers
const apiRouter = require("./routers/api/api")


app.use(express.static("./build"))
// TODO: change cors to only allow good origens
app.use(cors())

app.use("/api", apiRouter)

// defualt path, let react handle it
app.get("*", (req, res) => {
    let options = {
        root: path.join(__dirname + `/build`)
    }
    res.sendFile("index.html", options)
})


app.listen(config.httpPort)