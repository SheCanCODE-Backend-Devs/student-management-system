const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
    courseName: {
        type: String, 
        required: [true, "Course name is required!"],
        trim: true,
    },
    courseCode: {
        type: String, 
        required: [true, "Course Id is required!"],
    }
});

module.exports = model('course', CourseSchema);