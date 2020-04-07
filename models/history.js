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
    date: {
        type: Date,
        default: () => { return new Date() },
        required: true
    }
});

module.exports = mongoose.model('History', historySchema, 'History');
