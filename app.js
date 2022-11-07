const express = require('express');
const connectDB = require('./db/connect');
require('dotenv').config();

const app = express();

// import routes
const tasks = require('./routes/tasks.route')

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_DB_URI)
        app.listen(3000, () => console.log(`listening to 3000 port ...`))
    } catch (err) {
        console.log(err);
    };
};

start();
