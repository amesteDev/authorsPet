const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

//import routes
const login = require('./routes/login');

app.use(express.static(__dirname + '/static/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/static/index.html'));

//routing
app.use('/login', login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Server is running...') });