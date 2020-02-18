const mongoose = require("mongoose");


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
    }

});

module.exports = mongoose.model('profile', ProfileSchema);