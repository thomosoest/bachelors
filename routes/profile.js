const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require("../models/Profile");
const User = require("../models/User");

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

module.exports = router;