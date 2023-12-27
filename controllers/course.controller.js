const CourseModel = require('../models/course.model');

const record = async (req, res, next) => {
    try {
        var recordedCourse = await CourseModel.create(req.body);
        res.status(201).json({
            message: "Course recorded successfully!",
            course: recordedCourse
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const list = async (req, res, next) => {
    try {
        var allCourses = await CourseModel.find({});
        res.status(200).json({
            courses: allCourses
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const findById = async (req, res, next) => {
    try {   
        let courseId = req.query.id;
        var foundCourse = await CourseModel.findById(courseId);
        res.status(200).json({
            course: foundCourse
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const findByCourseCode = async (req, res, next) => {
    try {
        let courseCode = req.params.courseCode;
        var foundCourse = await CourseModel.find({ courseCode: courseCode});
        res.status(200).json({
            course: foundCourse
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const remove = async (req, res, next) => {
    try {
        var deletedCourse = await CourseModel.findByIdAndDelete(req.query.id);
        if (deletedCourse) {
            res.status(200).json({ message: "Deleted!" });
        } else {
            res.status(400).json({ message: "Course not found!" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const update = async (req, res, next) => {
    try {
        var updatedCourse = await CourseModel.findOneAndUpdate({ _id: req.query.id }, req.body);
        var course = await CourseModel.find(updatedCourse._id);
        res.status(200).json({ course });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    findByCourseCode, findById, list, remove, record, update
}