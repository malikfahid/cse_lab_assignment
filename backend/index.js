const express = require('express')

const app = express()
const userRouter = require('./router/userRouter')

app.use('/api/user', userRouter)

app.listen(5000)
