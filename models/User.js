const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    id: {type: String, require:true},
}, {_id: false});

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },

    kurs: [courseSchema],

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('user', UserSchema);