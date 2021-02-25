const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const bodyParser = require('body-parser')
    //import routes
const login = require('./routes/login');

// Mongoose connection
mongoose.connect(process.env.DB_STRING, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/static/index.html'));

//routing
app.use('/login', login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Server is running...') });