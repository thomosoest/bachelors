const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Company = require('../models/Company');
const Profile = require('../models/Profile');
const User = require('../models/User');

// @router      Post api/companies
// @desc        Create a company
// @access      Private
router.post('/', auth, 

    
async (req, res) => {

try {
    const user = await User.findById(req.user.id).select('-password');

    const newCompany = new Company( {
        companyName: req.body.companyName,
        user: req.user.id
        })
    
    const company = await newCompany.save();

    res.json(company);

} catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
}

})

module.exports = router;