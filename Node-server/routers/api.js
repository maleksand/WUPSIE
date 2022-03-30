const config = require("../config")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

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
        res.statusCode = response.status
        jsondata = await response.json()
    } catch (e) {
        console.log(e)
        jsondata = e
        res.statusCode = 500
    }
     /*
      * TODO: If fetch returns error code, send that error code to end user also.
      * It's not OK, just becuase this api can send json descriping 500 statuscode.
      */
    res.json(jsondata)
})

module.exports = router