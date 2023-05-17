const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');


// User registration endpoint
router.post('/register', userController.register);


// User login endpoint
router.post('/login', userController.login);


// User profile endpoint
router.get('/profile', authMiddleware, userController.getProfile);

module.exports = router;
