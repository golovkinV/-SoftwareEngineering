module.exports = app => {
    const eventController = require("../controllers/event.controller.js");

    const router = require("express").Router();

    // Add role
    router.post("/add", eventController.add);

    app.use('/api/event', router);
};