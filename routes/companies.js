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


// @route       PUT api/companies/join/:id
// @desc        Join a company
// @access      Private

router.put('/join/:id', auth, 
    async (req,res) =>{

        try {
            const company = await Company.findById(req.params.id);

            //Check if the user already exists in the company
            if(company.ansatte.filter(employee => employee.user.toString() === req.user.id).length > 0) {
                return res.status(400).json({ msg: 'Already Joined'});
            }

            company.ansatte.unshift({ user: req.user.id});

            await company.save();

            res.json(company.ansatte);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

});


module.exports = router;