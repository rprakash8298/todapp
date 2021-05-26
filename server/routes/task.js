const express = require('express')
const router = express.Router()
const {ADD_TASK,READ_TASK,DELETE_TASK} = require('../controller/taskController')

router.post('/ADD_TASK', ADD_TASK)
router.get('/READ_TASK', READ_TASK)
router.delete('/DELETE_TASK/:id',DELETE_TASK)



module.exports = router