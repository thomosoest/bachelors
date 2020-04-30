const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    
    taskName: {
        type: String
      
    },
    
    company: {
        type: mongoose.Schema.Types.ObjectId,
    },

    description: {
        type: String
    },

    status: {
        type: String
    },
    
    employees: [
       String
    ],

    date: {
        type: String
    }

});

module.exports = mongoose.model('task',TaskSchema);