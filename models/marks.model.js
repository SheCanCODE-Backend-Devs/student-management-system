const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    courseName: {
        type: String, 
        required: [true, "Course name is required!"],
        trim: true,
    },
    courseId: {
        type: String, 
        unique: true,
        required: [true, "Course Id is required!"],
    },
    marks: {
        type: String, 
        required: [true, "Marks are required!"],
        unique: true
    },
    student: {
        type: Schema.Types.ObjectId, 
        ref: "student"
    },
});

module.exports = mongoose.model('marks', MarksSchema);