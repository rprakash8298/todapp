const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/todoapp', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
    console.log('DATABSE CONNECTED SUCCESSFULLY')
}).catch((e) => {
    console.log(e.message)
})