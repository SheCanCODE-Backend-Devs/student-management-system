const mongoose = require('mongoose');

const connectToDb = () => {
    return mongoose.connect(process.env.MONGODB_URL);
}

module.exports = connectToDb;