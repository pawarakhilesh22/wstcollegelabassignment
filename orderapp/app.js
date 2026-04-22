const express = require('express')
const mongoose = require('mongoose')

const usersRouter = require('./routes/users')

const app = express()

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/orderDB')
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err))

app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})