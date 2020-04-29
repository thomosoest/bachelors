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
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'  
            }      
        }
    ],

    date: {
        type: String
    }

});

module.exports = mongoose.model('task',TaskSchema);