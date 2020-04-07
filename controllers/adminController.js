const room = require('../models/room');
const HistoryChat = require('../models/HistoryChat');
const HistorySocket = require('../models/HistorySocket');

exports.index = async (req, res, next) => {
    const roomList = await room.find();
    const historyList = await HistoryChat
        // .skip(50)
        // .limit(10)
        .find()
        .populate('room')
        .sort({ 'date': -1 });

    let userList = historyList.map(x => x.user);
    userList = [...new Set(userList)]

    res.render('admin',
        {
            title: 'Admin',
            roomList: roomList,
            userList: userList,
            historyList: historyList
        }
    );
}

exports.partialHistory = async (req, res, next) => {
    const historyList = await HistoryChat
        .find({
            $and: [
                req.query.user ? { "user": req.query.user } : {},
                req.query.roomId ? { "room": req.query.roomId } : {}
            ]
        })
        .populate('room')
        .sort({ 'date': -1 });

    // let query = {}
    // if (!req.query.roomId) {
    //     query["room"] = req.query.roomId;
    // }
    // if (!req.query.username) {
    //     query["user"] = req.query.user;
    // }

    // const historyList = await HistoryChat
    //     .find(req.query.roomId ? { "room": req.query.roomId } : {})
    //     .populate('room')
    //     .sort({ 'date': -1 });

    res.render('historyPartial',
        {
            title: 'History Partial',
            historyList: historyList
        }
    );
}


exports.socketEvents = async (req, res, next) => {
    const historyList = await HistorySocket
        .find()
        // .skip(50)
        // .limit(10)
        .populate('room')
        .sort({ 'date': -1 });

    res.render('socketEvents',
        {
            title: 'Queries',
            historyList: historyList
        }
    );
}