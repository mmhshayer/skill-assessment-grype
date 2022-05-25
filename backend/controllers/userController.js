const User = require('../models/user');
const asyncHandler = require('express-async-handler')

const getAllMembers = asyncHandler(async (req, res) => {
    const members = await User.find({ role: 'member' || 'Members' }).sort({ createdAt: -1 }).select('-password').exec();
    res.status(200).json(members);
})

module.exports = {
    getAllMembers
}