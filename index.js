const express = require("express");

const config = require("./config");

const router = express();

router.get('/isAlive', (req, res) => {
    res.send("alive");
});

router.get('/message', (req, res) => {
    res.send(config.message);
});

router.get('/message-two', (req, res) => {
    res.send(config.message + "two");
});

router.listen(3000, () => {
    console.log("Listening on port:", 3000)
});