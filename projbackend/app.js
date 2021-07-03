require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("database connected");
}).catch(() => {
    console.log("database connection failed");
});

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`app is running at ${port}`);
});
