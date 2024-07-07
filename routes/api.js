const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const bookController = require('../controller/bookController');

// User Routes
router.post('/registeruser', userController.registeruser);
router.post('/loginuser', userController.loginuser);

// Book Routes
router.post('/addbook', bookController.addbook);
router.get('/getbooks', bookController.getbooks);
router.put('/updatebook/:id', bookController.updatebook);
router.delete('/deletebook/:id', bookController.deletebook);

// Review Routes


module.exports = router;