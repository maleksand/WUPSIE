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

    let jsondata = null

    try {
        const response = await fetch(url, options)
        jsondata = await response.json()
    } catch (e) {
        console.log(e)
        jsondata = e
    }

    res.json(jsondata)
})

module.exports = router