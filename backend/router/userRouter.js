const express = require('express')
const { getUser, getParents } = require('../controller/userController')

const router = express.Router()
const { stringManup } = require('../middleware/firstMiddleware')
router.get('/me', getParents, stringManup, getUser)
// router.get('/parent', getParents)

module.exports = router
