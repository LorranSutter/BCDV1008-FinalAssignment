const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date_message: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model('History', historySchema, 'History');
