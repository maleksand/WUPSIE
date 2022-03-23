const config = require("../config")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const {createWriteStream} = require("node:fs")
const {pipeline} = require("node:stream")
const {promisify} = require("node:util")


const express = require("express")
const router = express.Router()

router.get("/devices/:deviceId/measurements", async (req, res) => {
    // getting params
    let deviceId = req.params.deviceId

    // getting queries
    let startDate = req.query.startDate
    let endDate = req.query.endDate
    
    // build api request queries
    let queries = {}
    if(startDate) {
        queries.startDate = startDate
    }
    if(endDate) {
        queries.endDate = endDate
    }

    // Parse queries object to string
    queryString = new URLSearchParams(queries)

    let url = `${config.baseAPIUrl}/measurements/${deviceId}?${queryString}`
    
    // don't think it's needed, but works
    let options = {
        method: "GET",
        body: null,
        headers: {
            "Connection": "keep-alive",
            "Accept": `*/*`,
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(url, options)

    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    
    console.log(response.url)
    console.log("If console stop here... WHY AWAIT FOREVER!?!!?!!")
    jsondata = await response.json()
    console.log("You somehow got through...")

    res.json(jsondata)
})

module.exports = router