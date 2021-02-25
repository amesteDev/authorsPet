const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

router.post('/', async(req, res) => {
    User.findOne({ username: req.body.username })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            const validPassword = bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                return res.status(401).send({
                    token: null,
                    message: "Invalid Password!"
                });
            }
            const token = jwt.sign({ _id: user._id, username: user.username }, process.env.PK, { expiresIn: 86400 });
            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
                userLevel: user.userLevel,
                token
            });
        });
})

module.exports = router;