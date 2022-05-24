const express = require('express');
const router = express.Router();

const { getAllMembers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAllMembers);

module.exports = router;