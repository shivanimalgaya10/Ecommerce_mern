const userModel =require('../models/userModel')
async function userDetailsController(req, res) {
    try {
      const user = await userModel.findById(req.userId); // Fetch user by ID
  
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          error: true,
          success: false
        });
      }
  
      // Return user details
      res.status(200).json({
        data: user,
        error: false,
        success: true,
        message: "User details s "
      });
    } catch (err) {
      // Handle errors
      res.status(500).json({
        message: err.message || "An error occurred",
        error: true,
        success: false
      });
    }
  }
  
  module.exports = userDetailsController;