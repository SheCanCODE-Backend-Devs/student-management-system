const express = require('express');
const CourseRouter = express.Router();
const { record, findById, remove, list, update, findByCourseCode } = require('../controllers/course.controller');

CourseRouter.post('/add', record);
CourseRouter.get('/list', list);
CourseRouter.put('/update', update);
CourseRouter.delete('/delete', remove);
CourseRouter.get('/findById', findById);
CourseRouter.get('/findByCourseCode/:courseCode', findByCourseCode);

module.exports = CourseRouter;