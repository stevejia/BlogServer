"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

const system = require("./router/system");
const user = require("./router/user");
const articles = require("./router/articles");

router.use("/system", system);
router.use("/user", user);
router.use("/articles", articles);

module.exports = router;