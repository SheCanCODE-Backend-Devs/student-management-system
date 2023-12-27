require('dotenv').config();
const express = require('express');
// import express from 'express';
const allRoutes = require('./routes');
const { default: mongoose } = require('mongoose');
const app = express();
const colors = require('colors');

app.use(express.json());

app.use('/api/sms/v1/', allRoutes);

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(res => {
        console.log('> Database successfull connected...'.bgBlue);
        console.log(`> Server running on port ${process.env.PORT}...`.bgCyan.black);
    })
    .catch(err => console("Error connecting...."))
});