const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require("../models/Profile");
const User = require("../models/User");
const Company = require("../models/Company");
const {check, validationResult} = require("express-validator");

// @route   GET api/profile/me
// @desc    get logged in users profile
// @access  private

router.get("/me", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.user.id}).populate(
            "user", [
                "name"
            ]
        );

        if(!profile) return res.status(400).json({msg: "User not found by this name"});

        res.json(profile);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});


router.get("/me/companies", auth, async (req, res) => {
    try {
        const companies = await Profile.findOne({user: req.user.id})
            .populate("companies.company", ["-ansatte", "-bank"]).select("company");

        if(!companies) return res.status(400).json({msg: "User not found by this name"});

        let levelDownCompanies = [];
        for(let i in companies.companies){
            levelDownCompanies.push(companies.companies[i].company);
        }
        res.json(levelDownCompanies);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});


// @route   POST api/profile
// @desc    Create/update profile
// @access  private

router.post("/", auth,  async (req, res) =>{
    const {bio,skills, experiences, title} = req.body;
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.bio = bio;
    profileFields.title = title;
    profileFields.skills = skills.split(',').map(skill => skill.trim());
    profileFields.experiences = experiences.split(',').map(experience => experience.trim());
    
    try {
        let profile = await Profile.findOne({user: req.user.id});
        if(profile){
            profile = await Profile.findOneAndUpdate({user: req.user.id}, {
                $set: profileFields
            }, {new: true});

            return res.json(profile);
        }

        // create profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
        
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
        const profiles = await Profile.find().populate("user", ["name"]);
        res.json(profiles);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});


// @route   GET api/profile/user/:id
// @desc    Get a specific profile
// @access  public

router.get("/user/:id", async (req, res) => {
    try {
        const profile = await Profile.findOne({user: req.params.id}).populate("user", ["name"]);
        if(!profile) res.json({msg: "User is not here"});
        res.json(profile);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;