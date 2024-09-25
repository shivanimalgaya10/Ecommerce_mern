const express = require("express");
const router = express.Router();

const userSignUpController = require("../controller/userSignUp");
const userSignInController = require("../controller/userSignIn");  // You need to uncomment and use this
const useDetailsController = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogout=   require('../controller/userLogout')

router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.get('/user-details',authToken, useDetailsController)
router.get("/userLogout",userLogout)

module.exports = router;
