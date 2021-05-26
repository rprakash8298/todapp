const express = require('express')
const cors = require('cors')
const app  = express()
require('./DBCONNECTION/mongoose')
const taskRouter = require('./routes/task')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/task',taskRouter)

const port = process.env.PORT ||3000
app.listen(port, () =>{
    console.log(`app running ${port}`)
})