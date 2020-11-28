module.exports = app => {
    const tutorials = require("../controllers/user.controller.js");

    const router = require("express").Router();

    // Register User
    router.post("/", tutorials.register);

    app.use('/api/user', router);
};