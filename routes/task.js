const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require("../models/Task");
const User = require("../models/User");
const {check, validationResult} = require("express-validator");



// @route   POST api/task
// @desc    Create/update task
// @access  private


router.post("/", auth,  async (req, res) =>{
    const {taskName, description, employees, completion} = req.body;
    const taskFields = {};
    
    taskFields.name = taskName;
    taskFields.description = description;
    taskFields.employees = employees;
    taskFields.completion = completion;    

    try {   
        // create task
        let task = new Task(taskFields);
        await task.save();
        res.json(task);
    
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Task Server Error");
    }
});


// @router      GET api/task/:taskID
// @desc        Get task by ID
// @access      Private


router.get('/:id', auth, 

    async (req, res) => {

    try {
        let id = req.params.id;
        const task = await Task
            .findById(id)
            .populate("taskName", ["students"]);
        res.json(task);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});


// @route   GET api/task
// @desc    Get all tasks
// @access  public


router.get("/", async (req, res) => {
    try {
        const task = await Task.find();
        res.json(task);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});


module.exports = router;