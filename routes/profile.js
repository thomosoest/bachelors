const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require("../models/Profile");
const User = require("../models/User");
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
})


// @route   POST api/profile
// @desc    Create/update profile
// @access  private

router.post("/", auth,  async (req, res) =>{
    const bio = req.body.bio;
    profileFields = {};
    profileFields.user = req.user.id;
    profileFields.bio = bio;

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
        req.json(profile);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
})

module.exports = router;