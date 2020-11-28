module.exports = app => {
    const users = require("../controllers/user.controller.js");

    const router = require("express").Router();

    // Register User
    router.post("/", users.register);

    // Login User
    router.get("/",users.login);
    app.use('/api/users', router);
};