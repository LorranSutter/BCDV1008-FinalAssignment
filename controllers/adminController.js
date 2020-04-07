const Room = require('../models/Room');
const HistoryChat = require('../models/HistoryChat');
const HistorySocket = require('../models/HistorySocket');

exports.index = async (req, res, next) => {
    const roomList = await Room.find();
    const historyList = await HistoryChat.find({})
        // .skip(50)
        // .limit(10)
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


exports.socketEvents = async (req, res, next) => {
    const historyList = await HistorySocket.find({})
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