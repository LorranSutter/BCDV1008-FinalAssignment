const room = require('../models/room');
const historyChat = require('../models/historyChat');
const historySocket = require('../models/historySocket');

function roomCreate(name) {
    let newRoom = new room({ name });

    newRoom.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('New Room: ' + newRoom.name);
    });
}

function historyChatCreate(user, room, message, date) {
    let newHistoryChat = new historyChat(
        {
            user,
            room,
            message,
            date
        }
    );

    newHistoryChat.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('New history chat: ' + newHistoryChat.message);
    });
}

function historySocketCreate(user, room, message, date) {
    let newHistorySocket = new historySocket(
        {
            user,
            room,
            message,
            date
        }
    );

    newHistorySocket.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('New history socket: ' + newHistorySocket.message);
    });
}

module.exports = {
    roomCreate,
    historyChatCreate,
    historySocketCreate
}