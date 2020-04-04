const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const roomsController = require('../controllers/roomsController');

router.get('/', celebrate({
  [Segments.HEADERS]: Joi.object().keys({
    username: Joi.string().required(),
  })
}), roomsController.index);

module.exports = router;
