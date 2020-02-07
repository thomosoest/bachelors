const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    companyName: {
        type: String,
        require: true
    },
    ansatte: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ]
});


module.exports = mongoose.model('company',CompanySchema);