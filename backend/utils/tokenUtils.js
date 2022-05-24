const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

const generateToken = (id, role) => {
    return jwt.sign({
        _id: id,
        role: role,
    }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

module.exports = {
    generateHash,
    generateToken
};