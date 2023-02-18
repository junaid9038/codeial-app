const express = require('express');

const router = express.Router();
console.log("router is working");

const userController = require('../controllers/home_controller');

router.get('/',userController.home);




module.exports = router;