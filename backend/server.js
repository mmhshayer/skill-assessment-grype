const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors')
const { connectToDB } = require('./config/db');
const path = require('path');

const port = process.env.PORT || 3000;

connectToDB();
const app = express() ;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});