const router = require('express').Router();

const loginController = require('../controllers/loginController');

router.get('/', loginController.index);

router.get('/index', loginController.index);

router.post('/session', loginController.session);

module.exports = router;
