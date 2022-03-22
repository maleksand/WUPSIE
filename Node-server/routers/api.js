const config = require("../config")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express")
const router = express.Router()

router.get("/devices/:deviceId/measurements", (req, res) => {
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

    console.log(queryString.toString())
    // Blame to this: https://stackoverflow.com/questions/39301227/external-api-calls-with-express-node-js-and-require-module
    const response = fetch(`${config.baseAPIUrl}/measurements/${deviceId}?${queryString}`)

    res.send(response)
})

module.exports = router