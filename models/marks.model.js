const { Schema, model } = require('mongoose');

const MarksSchema = new Schema({
    marks: {
        type: Number, 
        required: [true, "Marks are required!"],
    },
    courseId: {
        type: Schema.Types.ObjectId, 
        ref: "course",
        required: [true, "Course Id is required!"],
    },
    student: {
        type: Schema.Types.ObjectId, 
        ref: "student"
    },
});

module.exports = model('marks', MarksSchema);