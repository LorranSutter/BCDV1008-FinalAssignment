const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const auth = require('../middlewares/auth');
const chatController = require('../controllers/chatController');

router.get('/', auth, chatController.index);

// router.get('/', celebrate({
//     [Segments.HEADERS]: Joi.object().keys({
//         username: Joi.string().required(),
//     })
// }), chatController.index);

module.exports = router;
