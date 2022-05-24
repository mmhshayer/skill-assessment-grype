const express = require('express');
const dotenv = require('dotenv').config();
const { connectToDB } = require('./config/db');


const port = process.env.PORT || 3000;

connectToDB();
const app = express() ;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});