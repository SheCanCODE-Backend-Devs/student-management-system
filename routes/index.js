const express = require('express');
const StudentRouter = require('./student.routes');
const allRoutes = express();

allRoutes.use('/student', StudentRouter);
// allRoutes.use('/marks', MarksRouter);

module.exports = allRoutes;