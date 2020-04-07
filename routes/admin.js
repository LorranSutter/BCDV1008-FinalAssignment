const router = require('express').Router();

const adminController = require('../controllers/adminController');

// TODO Create the admin page

router.get('/', adminController.index);

module.exports = router;
