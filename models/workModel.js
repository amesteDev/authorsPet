const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    editor: {
        type: String
    },
    submittedAt: {
        type: Date,
        required: true
    },
    reviwedAt: {
        type: Date
    },
    title: {
        type: String,
        required: true
    },
    textContent: {
        type: String
    }

}, {
    collection: 'work'
});

const Work = mongoose.model("Work", WorkSchema);
module.exports = Work;