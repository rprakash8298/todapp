const Task = require('../modal/task')

exports.ADD_TASK = async (req, res) => {
    // console.log(req.body)
    try {
        const task = await Task.create(req.body)
        await task.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

exports.READ_TASK = async (req, res) => {
   
    try {
        const tasks = await Task.find({})
        // console.log(tasks)
        res.status(201).json(tasks)
    } catch (error) {
        // console.log(error)
        res.status(400).json(error)
    }
}

exports.DELETE_TASK = async (req, res) => {
    const {id} = req.params
    try {
        const task = await Task.findByIdAndRemove(id)
        res.status(200).json('DELETED SUCCESSFULLY')
    } catch (error) {
        res.status(400).json(e.message)
    }
}