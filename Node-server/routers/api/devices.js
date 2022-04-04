const config = require("../../config")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require("express")
const router = express.Router()

router.get("/:deviceId/measurements", async (req, res) => {
    // getting params
    let deviceId = req.params.deviceId

    // getting queries
    let startDate = req.query.startDate
    let endDate = req.query.endDate
    let deviceType = req.query.deviceType
    
    // build api request queries
    let queries = {}
    if(startDate) {
        queries.startDate = startDate
    }
    if(endDate) {
        queries.endDate = endDate
    }
    if(deviceType) {
        queries.deviceType = deviceType
    }

    // Parse queries object to string
    queryString = new URLSearchParams(queries)

    let url = `${config.baseAPIUrl}/devices/${deviceId}/measurements?${queryString}`
    
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

    let jsondata

    try {
        const response = await fetch(url, options)
        res.statusCode = response.status
        jsondata = await response.json().catch(json => console.log(json))
    } catch (e) {
        console.log(e)
        jsondata = e
        res.statusCode = 500
    }
    res.json(jsondata)
})

module.exports = router