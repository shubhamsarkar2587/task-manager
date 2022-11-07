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
        if (!task) {
            return res.status(404).json({ errMsg: 'no task found!' });
        }
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

const updateTaskById = async(req, res) => {
    try {
        const taskId = req.params.id
        const taskFromBody = req.body
        const task = await Task.findOneAndUpdate({ _id: taskId }, taskFromBody, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).json({ errMsg: 'no task found!' });
        }
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ errMsg: err });
    };
};

const deleteTaskById = async(req, res) => {
    try {
        const taskId = req.params.id
        const task = await Task.findOneAndDelete({ _id: taskId });
        if (!task) {
            return res.status(404).json({ errMsg: 'no task found!' });
        }
        res.status(200).json({ task });
    } catch (err) {
        res.status(500).json({ errMsg: err });
    };
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTaskById
};
