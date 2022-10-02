const express = require('express');
const cors = require('cors');
const app = express();
const port = 5002;
const userRouter = require('./router/userRouter');
app.use(cors());
app.use('/api', userRouter)

app.get("/", (req, res) => {
    res.send("The backend server is running");
  });
  app.listen(port, () => {
    console.log("Listening the port:", port);
  });