const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    
    taskName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'name',
        require: true
    },
    
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'company',
        require: true
    },

    description: {
        type: String
    },
    
    employees: [
        {
            id: {type: mongoose.Schema.Types.ObjectId},
            name: {type: String}
        }
    ],

    completion: {
        type: String
    }


});



module.exports = mongoose.model('task',TaskSchema);