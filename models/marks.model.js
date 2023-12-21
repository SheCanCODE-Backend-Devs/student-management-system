const { Schema, model } = require('mongoose');

const MarksSchema = new Schema({
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
        type: Number, 
        required: [true, "Marks are required!"],
        unique: true
    },
    student: {
        type: Schema.Types.ObjectId, 
        ref: "student"
    },
});

module.exports = model('marks', MarksSchema);