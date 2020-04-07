const mongoose = require('mongoose');

const Room = require('../models/room');
const History = require('../models/history');

exports.index = async (req, res, next) => {
    const historyList = await History.find({})
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