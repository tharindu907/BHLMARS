const mongoose =  require('mongoose');
const utils = require('../utils');

const studentSchema = new mongoose.Schema({
    _id: {
        type: String, 
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    date_of_birth: { 
        type: Date,
        required: true
    }, // "YYYY-MM-DD" // Mongoose converts this string into a JavaScript Date object when saving it in server
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    grade: {
        type: Number,
        required: true
    },
    school: {
        type: String
    },
    personal_number: {
        type: String,
        validate: utils.mobileNumberValidator
    },
    whatsapp_number: {
        type: String,
        validate: utils.mobileNumberValidator
    },
    address: {
        type: String,
        required: true
    },
    registered_date: {
        type: Date,
        required: true
    },
    registered_by: {
        type: String,
        required: true
    },
    guardian_name: {
        type: String,
        required: true
    },
    guardian_number: {
        type: String,
        validate: utils.mobileNumberValidator
    },
    qr_url: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('student', studentSchema);

