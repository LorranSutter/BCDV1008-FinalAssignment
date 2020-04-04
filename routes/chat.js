const router = require('express').Router();
const { celebrate, Segments, Joi } = require('celebrate');

const chatController = require('../controllers/chatController');

router.get('/', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        username: Joi.string().required(),
    })
}), chatController.index);

module.exports = router;
