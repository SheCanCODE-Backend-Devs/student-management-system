const MarksModel = require('../models/marks.model');

const record = async (req, res, next) => {
    try {
        var recordedMarks = await MarksModel.create(req.body);
        res.status(201).json({
            message: "Marks recorded successfully!",
            marks: recordedMarks
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const list = async (req, res, next) => {
    try {
        var allMarkss = await MarksModel.find({}).populate('student');
        res.status(200).json({
            markss: allMarkss
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const findById = async (req, res, next) => {
    try {   
        let marksId = req.query.id;
        var foundMarks = await MarksModel.findById(marksId);
        res.status(200).json({
            marks: foundMarks
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const findByMarks = async (req, res, next) => {
    try {
        let marksMarks = req.params.marks;
        var foundMarks = await MarksModel.find({ marks: marksMarks});
        res.status(200).json({
            marks: foundMarks
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const remove = async (req, res, next) => {
    try {
        var deletedMarks = await MarksModel.findByIdAndDelete(req.query.id);
        if (deletedMarks) {
            res.status(200).json({ message: "Deleted!" });
        } else {
            res.status(400).json({ message: "Marks not found!" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const update = async (req, res, next) => {
    try {
        var updatedMarks = await MarksModel.findOneAndUpdate({ _id: req.query.id }, req.body);
        var marks = await MarksModel.find(updatedMarks._id);
        res.status(200).json({ marks });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    findByMarks, findById, list, remove, record, update
}