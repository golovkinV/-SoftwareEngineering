module.exports = app => {
    const users = require("../controllers/user.controller.js");

    const router = require("express").Router();

    // Register User
    router.post("/", users.register);

    // Login User
    router.get("/",users.login);

    // All Users
    router.get("/all",users.findAll);

    app.use('/api/users', router);
};