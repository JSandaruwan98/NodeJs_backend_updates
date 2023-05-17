const bcrypt = require('bcrypt');
const User = require('../models/User');

// User registration controller
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if user with the provided email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user
    const user = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const jwt = require('jsonwebtoken');


// User login controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id }, 'secretKey');
    // Return the token to the client
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// User profile controller
exports.getProfile = async (req, res) => {
    try {
      // Get the authenticated user's ID from the JWT
      const userId = req.userId;
      // Fetch the user's profile information from the database
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Return the user's profile information
      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  