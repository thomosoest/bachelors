const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    
    taskName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'name',
        require: true
    },
    
    description: {
        type: String
    },
    
    students: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],

    completion: {
        type: String
    }


});



module.exports = mongoose.model('task',TaskSchema);