const mongoose = require("mongoose");

const CurrentCourseSchema = mongoose.Schema({
    name: {type: String, require:true},
    description: {type: String}
}, {_id: false});


const ProfileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    bio: {
        type: String
    },

    skills: {
        type: [String]
    },

    experiences: {
        type: [String]
    },

    title: {
        type: String
    },

    companies: [
        {       
            company: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'company'  
            }      
        }
    ],

    currentCourses: [CurrentCourseSchema]

});

module.exports = mongoose.model('profile', ProfileSchema);