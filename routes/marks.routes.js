const express = require('express');
const MarksRouter = express.Router();
const { record, findById, remove, list, update, findByMarks } = require('../controllers/marks.controller');

MarksRouter.post('/add', record);
MarksRouter.get('/list', list);
MarksRouter.put('/update', update);
MarksRouter.delete('/delete', remove);
MarksRouter.get('/findById', findById);
MarksRouter.get('/findByMarks/:marks', findByMarks);

module.exports = MarksRouter;