const mongoose = require('mongoose');

const Room = require('../models/Room');
const HistoryChat = require('../models/HistoryChat');

exports.index = async (req, res, next) => {
    const historyList = await HistoryChat.find({})
        // .skip(50)
        // .limit(10)
        .populate('room')
        .sort({ 'date': 1 });

    res.render('admin',
        {
            title: 'Admin',
            historyList: historyList
        }
    );
}