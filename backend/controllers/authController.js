const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');

const register = asyncHandler(async (req, res) => {
    const { first_name, last_name, email, password, role } = req.body;

    if ( !first_name || !last_name || !email || !password || !role ) {
        res.status(400).json({message: 'Please provide all required fields'});
    }

    const exists = await User.findOne({ email });
    if ( exists ) {
        res.status(400).json({message: 'User already exists'});
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);


    // Save user
    const user = await User.create({
        first_name,
        last_name,
        email,
        password: hashedPassword,
        role,
    });

    // Send some user data back if successful
    if(user) {
        res.status(201).json({
            _id: user._id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
        });
    } else {
        res.status(500).json({message: 'Something went wrong'});
    }
})

const login = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Login' });
})

module.exports = {
    register,
    login
}