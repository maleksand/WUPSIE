const config = require("../../config")
const devicesRouter = require("./devices")
const householdsRouter = require("./households")
const usersRouter = require("./users")
const regionRouter = require("./regions")

const express = require("express")
const router = express.Router()

router.use("/devices", devicesRouter)
router.use("/households", householdsRouter)
router.use("/users", usersRouter)
router.use("/regions", regionRouter)

module.exports = router