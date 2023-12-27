const express = require('express');
const StudentRouter = require('./student.routes');
const MarksRouter = require('./marks.routes');
const CourseRouter = require('./course.routes');
const allRoutes = express();

allRoutes.use('/student', StudentRouter);
allRoutes.use('/marks', MarksRouter);
allRoutes.use('/course', CourseRouter);

module.exports = allRoutes;