const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token; 
        // Retrieve token from cookies
        console.log('Retrieved Token:', token);



        // If no token is found, respond with an error
        if (!token) {
            return res.status(401).json({
                message: "User not logged in",
                error: true,
                success: false
            });
        }

        // Verify the token
        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
            if (err) {
                console.log("JWT verification error:", err);

                // Handle specific JWT errors such as expired tokens
                if (err.name === 'TokenExpiredError') {
                    return res.status(403).json({
                        message: "Session expired. Please log in again.",
                        error: true,
                        success: false
                    });
                } else {
                    return res.status(403).json({
                        message: "Invalid token. Please log in again.",
                        error: true,
                        success: false
                    });
                }
            }

            // If verification is successful, assign the decoded user ID to req.userId
            req.userId = decoded?._id;
            next(); // Pass control to the next middleware
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || "An error occurred during authentication",
            data: [],
            error: true,
            success: false
        });
    }
}

module.exports = authToken;
