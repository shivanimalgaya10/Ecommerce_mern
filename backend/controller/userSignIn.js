const bcrypt = require('bcryptjs');
const userModel=require('../models/userModel') // Import the user model
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide an email");
        }
        if (!password) {
            throw new Error("Please provide a password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        console.log('Password comparison result:', checkPassword);
        
        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            };
            
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

            const tokenOptions = {
                httpOnly: true,
                secure: false, // Set to true if using HTTPS
                path: '/',
                  // Path where the cookie is accessible
                // secure: process.env.NODE_ENV === 'production' // Uncomment in production with HTTPS
            };

            res.cookie("token", token, tokenOptions).json({
                message: "Sign in successful",
                data: token,
                success: true,
                error: false
            });
        } else {
            throw new Error("Please check your password");
        }

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignInController;
