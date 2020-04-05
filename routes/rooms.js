const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const auth = require('../middlewares/auth');
const roomsController = require('../controllers/roomsController');

// router.get('/', celebrate({
//   [Segments.COOKIES]: Joi.object().keys({
//     username: Joi.string().required(),
//   })
// }), roomsController.index);

router.post('/', roomsController.roomsLogin);

router.get('/', auth, roomsController.index);

module.exports = router;
