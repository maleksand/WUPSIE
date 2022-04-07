const config = require("../../config")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require("express")
const router = express.Router()

router.get("/:householdId/", async (req, res) => {
    let householdId = req.params.householdId

    url = `${config.baseAPIUrl}/households/${householdId}`

    let jsondata

    try {
        const response = await fetch(url)
        res.statusCode = response.status
        jsondata = await response.json()
    } catch (e) {
        console.log(e)
        jsondata = e
        res.statusCode = 500
    }
    res.json(jsondata)
})

router.get("/:householdId/devices/measurements/", async (req, res) => {
    // get param
    let householdId = req.params.householdId
    
    // get query
    let startDate = req.query.startDate
    let endDate = req.query.endDate

    // build query object
    let queries = {}
    if(startDate) {
        queries.startDate = startDate
    }
    if(endDate) {
        queries.endDate = endDate
    }

    // Parse queries object to string
    queryString = new URLSearchParams(queries)

    url = `${config.baseAPIUrl}/households/${householdId}/devices/measurements?${queryString}`

    let jsondata

    try {
        const response = await fetch(url)
        res.statusCode = response.status
        jsondata = await response.json()
    } catch (e) {
        console.log(e)
        jsondata = e
        res.statusCode = 500
    }
    console.log(jsondata)
    res.json(jsondata)
})

module.exports = router