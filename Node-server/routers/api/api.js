const config = require("../../config")
const devicesRouter = require("./devices")
const householdsRouter = require("./households")
const usersRouter = require("./users")

const express = require("express")
const router = express.Router()

router.use("/devices", devicesRouter)
router.use("/households", householdsRouter)
router.use("/users", usersRouter)

module.exports = router