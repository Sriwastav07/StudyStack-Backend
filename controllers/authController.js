const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register
const register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);

    res.status(400).json({
      error: err.message,
    });
  }
};
// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user)
      return res.status(404).json({
        error: "User not found",
      });

    const isMatch = await user.comparePassword(password);

    if (!isMatch)
      return res.status(401).json({
        error: "Invalid Credentials",
      });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Register Error:");
    console.error(err);
    console.error(err.stack);

    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  register,
  login,
};