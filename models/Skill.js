const mongoose = require('mongoose');

const SkillSchema = mongoose.Schema({

    skill: {
        type: String,
        require: true
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company'
    },
    
    employees: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ]
});


module.exports = mongoose.model('skill', SkillSchema);