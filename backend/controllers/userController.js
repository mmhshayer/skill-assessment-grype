const getAllUsers = (req, res) => {
    res.status(200).json({ message: 'Users ...' });
}

module.exports = {
    getAllUsers
}