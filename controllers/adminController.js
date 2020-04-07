const room = require('../models/room');
const historyChat = require('../models/historyChat');
const historySocket = require('../models/historySocket');

exports.index = async (req, res, next) => {
    const roomList = await room.find();
    const historyList = await historyChat
        // .skip(50)
        // .limit(10)
        .find()
        .populate('room')
        .sort({ 'date': 1 });

    res.render('admin',
        {
            title: 'Admin',
            roomList: roomList,
            historyList: historyList
        }
    );
}

exports.partialHistory = async (req, res, next) => {
    const historyList = await historyChat
        .find(req.query.roomId ? { "room": req.query.roomId } : {})
        .populate('room')
        .sort({ 'date': 1 });

    res.render('historyPartial',
        {
            title: 'History Partial',
            historyList: historyList
        }
    );
}


exports.socketEvents = async (req, res, next) => {
    const historyList = await historySocket
        .find()
        // .skip(50)
        // .limit(10)
        .populate('room')
        .sort({ 'date': 1 });

    res.render('socketEvents',
        {
            title: 'Queries',
            historyList: historyList
        }
    );
}