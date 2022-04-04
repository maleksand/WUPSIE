const config = require("../../config")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const express = require("express")
const router = express.Router()

router.get("/:householdId", async (req, res) => {
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

module.exports = router