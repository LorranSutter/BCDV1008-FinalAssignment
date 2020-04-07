const router = require('express').Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.index);

router.get('/socketEvents', adminController.socketEvents);

module.exports = router;
