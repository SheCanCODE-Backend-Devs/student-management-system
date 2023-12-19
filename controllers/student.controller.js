const StudentModel = require('../models/student.models');

const record = async (req, res, next) => {
    try {
        var recordedStudent = await StudentModel.create(req.body);
        res.status(201).json({
            message: "Student recorded successfully!",
            student: recordedStudent
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const list = async (req, res, next) => {
    try {
        var allStudents = await StudentModel.find({});
        res.status(200).json({
            students: allStudents
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const findById = async (req, res, next) => {
    try {   
        let studentId = req.query.id;
        var foundStudent = await StudentModel.findById(studentId);
        res.status(200).json({
            student: foundStudent
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const findByEmail = async (req, res, next) => {
    try {
        let studentEmail = req.params.email;
        var foundStudent = await StudentModel.find({ email: studentEmail});
        res.status(200).json({
            student: foundStudent
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const remove = async (req, res, next) => {
    try {
        var deletedStudent = await StudentModel.findByIdAndDelete(req.query.id);
        if (deletedStudent) {
            res.status(200).json({ message: "Deleted!" });
        } else {
            res.status(400).json({ message: "Student not found!" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const update = async (req, res, next) => {
    try {
        var updatedStudent = await StudentModel.findOneAndUpdate({ _id: req.query.id }, req.body);
        var student = await StudentModel.find(updatedStudent._id);
        res.status(200).json({ student });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    findByEmail, findById, list, remove, record, update
}