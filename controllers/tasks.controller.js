const Task = require('../models/tasks.model'); 

const getAllTasks = async(req, res) => {
    try {
        const allTasks = await Task.find();
        res.status(200).json({ allTasks });
    } catch (err) {
        res.status(500).json({ errMsg: err });
    }
};

const getTaskById = async(req, res) => {
    try {
        const taskId = req.params.id
        const task = await Task.findById(taskId);
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ errMsg: err });
    }
};

const createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ errMsg: err });
    }
};

const updateTaskById = (req, res) => {
    res.send('update task by Id..');
};

const deleteTaskById = (req, res) => {
    res.send('delete task by Id..');
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById
};
