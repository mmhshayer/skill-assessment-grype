const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { generateHash, generateToken } = require('../utils/tokenUtils');

const register = asyncHandler(async (req, res) => {
    const { first_name, last_name, email, password, role } = req.body;

    // Check if fields are valid
    if ( !first_name || !last_name || !email || !password || !role ) {
        res.status(400).json({message: 'Please provide all required fields'});
    }

    // Check if user already exists
    const exists = await User.findOne({ email });
    if ( exists ) {
        res.status(400).json({message: 'User already exists'});
    }

    // Save user
    const user = await User.create({
        first_name,
        last_name,
        email,
        password: generateHash(password),
        role,
    });

    // Send some user data back if successful
    if(user) {
        res.status(201).json({
            _id: user._id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            token: generateToken(user._id, user.role)
        });
    } else {
        res.status(500).json({message: 'Something went wrong'});
    }
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    // Checks if password is valid
    const validPassword = await bcrypt.compare(password, user.password);

    if ( !user || !validPassword ) {
        res.status(400).json({message: 'Invalid credentials'});
    }

    res.status(200).json({
        _id: user._id,
        name: `${user.first_name} ${user.last_name}`,
        email: user.email,
        token: generateToken(user._id, user.role)
    });
})

module.exports = {
    register,
    login
}