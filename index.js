const express = require('express');
const mongoose = require('mongoose');
const app = express();
//const io = require('socket.io')(http);

app.use(express.static(__dirname + '/static/'));

app.get(/.*/, (req, res) => res.sendFile(__dirname + '/static/index.html'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log('Server is running...') });