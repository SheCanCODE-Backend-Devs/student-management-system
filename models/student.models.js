const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "First name is required!"],
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        required: [true, "Email is required!"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required!"],
        unique: true
    },
    gender: {
        type: String,
        required: [true, "Gender is required!"],
        enum: {
            values: ["Male", "Female", "Prefer not to say"],
            message: "{value} is not recognized as valid gender"
        }
    },
    grade: {
        type: Number,
        required: [true, "Grade is required!"],
    },
    gpa: {
        type: Number,
        required: [true, "GPA is required!"],
    },
});

module.exports = mongoose.model('student', StudentSchema);