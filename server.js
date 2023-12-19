require('dotenv').config();
const express = require('express');
const connectToDb = require('./db/dbConnection');
const allRoutes = require('./routes');
const app = express();

app.use(express.json());
connectToDb();

app.use('/api/sms/v1/', allRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
