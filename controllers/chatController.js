const mongoose = require('mongoose');

const Room = require('../models/Room');
const HistoryChat = require('../models/HistoryChat');

exports.index = async (req, res, next) => {
    const room = await Room.findById(req.params.roomId);
    const msgList = await HistoryChat.find(
        { room: mongoose.Types.ObjectId(req.params.roomId) },
        { _id: -1, user: 1, room: -1, message: 1, date: 1 }
    ).sort({ 'date': 1 });

    res.cookie('roomId', req.params.roomId);

    res.render('chat',
        {
            title: 'Chat',
            room: room,
            msgList: msgList
        }
    );
}