const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express() ;

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});