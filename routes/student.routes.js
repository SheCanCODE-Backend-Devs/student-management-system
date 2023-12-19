const express = require('express');
const StudentRouter = express.Router();
const studentRoutes = require('../controllers/student.controller');
const { record, findByEmail, findById, remove, list, update } = studentRoutes;

StudentRouter.post('/add', record);
StudentRouter.get('/list', list);
StudentRouter.put('/update', update);
StudentRouter.delete('/delete', remove);
StudentRouter.get('/findById', findById);
StudentRouter.get('/findByEmail/:email', findByEmail);

module.exports = StudentRouter;