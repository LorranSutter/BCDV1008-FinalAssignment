const mongoose = require('mongoose');

const room = require('../models/room');
const historyChat = require('../models/historyChat');

exports.index = async (req, res, next) => {
    const chatRoom = await room.findById(req.params.roomId);
    const msgList = await historyChat.find(
        { room: mongoose.Types.ObjectId(req.params.roomId) },
        { _id: -1, user: 1, room: -1, message: 1, date: 1 }
    ).sort({ 'date': 1 });

    res.cookie('roomId', req.params.roomId);

    res.render('chat',
        {
            title: 'Chat',
            room: chatRoom,
            msgList: msgList
        }
    );
}