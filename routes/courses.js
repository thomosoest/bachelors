const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Course = require("../models/Courses");
const User = require("../models/User");
const {check, validationResult} = require("express-validator");

// @router      GET api/courses/:courseID
// @desc        Get course by ID
// @access      Private
router.get('/:id', auth, 

    
    async (req, res) => {

    try {
        let id = req.params.id;
        const courses = await Course
            .findById(id)
            .populate("user", ["name"]);
            
        res.json(courses);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

});


// @route   POST api/course
// @desc    Create/update course
// @access  private

router.post("/", auth,  async (req, res) =>{
    const {company, description, skills, name, date} = req.body;
    const courseFields = {};
    
    courseFields.user = req.user.id;
    courseFields.company = company;
    courseFields.description = description;
    courseFields.name = name;
    courseFields.date = date;
    courseFields.skills = skills.split(',').map(skill => skill.trim());    

    try {
        let course = await Course.findOne({user: req.user.id});
        if(course){
            course = await Course.findOneAndUpdate({user: req.user.id}, {
                $set: courseFields
            }, {new: true});

            return res.json(course);
        }

        // create profile
        course = new Course(courseFields);
        await course.save();
        res.json(course);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});


// @route   GET api/profile
// @desc    Get all profiles
// @access  public


router.get("/", async (req, res) => {
    try {
        console.log("Hallo12323232")
        const courses = await Course.find();
        res.json(courses);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});


// @router      GET api/courses/company/:id
// @desc        Get ALL courses in specific company
// @access      Private
router.get('/company/:id', auth, 

    async (req, res) => {

    try {
        const courses = await Course.find({company: req.params.id});
        res.json(courses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;