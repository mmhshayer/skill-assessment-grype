const register = (req, res) => {
    res.status(200).json({ message: 'Register' });
}

const login = (req, res) => {
    res.status(200).json({ message: 'Login' });
}

module.exports = {
    register,
    login
}