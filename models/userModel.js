const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    userLevel: {
        type: String,
        required: true
    }
}, {
    collection: 'user'
});

const User = mongoose.model("meeting", UserSchema);
module.exports = User;