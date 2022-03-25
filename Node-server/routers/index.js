const config = require("../config")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require("express")
const router = express.Router()

router.get("/", async (req, res) => {
    res.send("../build/index.html")
})

module.exports = router