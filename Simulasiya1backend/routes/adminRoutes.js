// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const isAdmin = require('../middleware/isAdmin');
const { getAllUsers } = require('../controllers/adminController');

router.get('/users', isAdmin, getAllUsers);

module.exports = router;
