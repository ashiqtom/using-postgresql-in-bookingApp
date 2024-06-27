
const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

router.post('/users', adminController.postUser);

router.get('/users', adminController.getUser);

router.delete('/users/:userId', adminController.deleteUser);

module.exports = router;