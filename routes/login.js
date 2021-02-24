const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

router.post('/', async(req, res) => {
    let user = await userModel.findOne({ username: req.body.username });

    if (!user) {
        return res.status(400).send('No user found or bad password');
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
        return res.status(400).send('No user found or bad password');
    }

    const token = jwt.sign({ _id: user._id, username: user.username }, process.env.PK);
    let username = user.username;
    let userLevel = user.userLevel;

    res.status(200).send({ token, username });
})

module.exports = router;