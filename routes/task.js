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
    const {taskName, description, date, company} = req.body;
    const taskFields = {};
    
    taskFields.name = taskName;
    taskFields.company = company;
    taskFields.description = description;
    taskFields.date = date;    

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



// @route       PUT api/task/add/:id
// @desc        Add employees to task
// @access      Private

router.put('/join/:id', auth, 
    async (req,res) =>{

        try {
            //const profile = await Profile.findOne({user: req.user.id});
            //if(profile === null) return res.status(400).json({msg: "Can't join without profile"});
            const task = await Task.findById(req.params.id);

            //Check if the user already exists in the task
            if(company.employee.filter(employee => employee.user.toString() === req.user.id).length > 0) {
                return res.status(400).json({ msg: 'Already On Task'});
            }

            task.employee.unshift({ user: req.user.id});

            await task.save();

            //profile.companies.unshift({company: req.params.id});
            
            //await profile.save();

            res.json(company.ansatte);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
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


// @router      GET api/task/company/:id
// @desc        Get ALL tasks in specific company
// @access      Private
router.get('/company/:id', auth, 

    async (req, res) => {

    try {
        const task = await Task.find({company: req.params.id});
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



module.exports = router;