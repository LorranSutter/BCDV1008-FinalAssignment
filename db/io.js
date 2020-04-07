const Room = require('../models/Room');
const HistoryChat = require('../models/HistoryChat');
const HistorySocket = require('../models/HistorySocket');

function roomCreate(name) {
    let room = new Room({ name });

    room.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('New Room: ' + room.name);
    });
}

function historyChatCreate(user, room, message, date) {
    let historyChat = new HistoryChat(
        {
            user,
            room,
            message,
            date
        }
    );

    historyChat.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('New history chat: ' + historyChat.message);
    });
}

function historySocketCreate(user, room, message, date) {
    let historySocket = new HistorySocket(
        {
            user,
            room,
            message,
            date
        }
    );

    historySocket.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('New history socket: ' + historySocket.message);
    });
}

module.exports = {
    roomCreate,
    historyChat,
    historySocket
}