const express = require('express');
const { getUser, getName, usersData} = require('../controller/userController');

const router = express.Router()
const { stringManup } = require('../middleware/userMiddleware');
router.get('/home-page', getName, stringManup, getUser)
router.post("/user-data", usersData)
// router.get('/parent', getParents)

module.exports = router