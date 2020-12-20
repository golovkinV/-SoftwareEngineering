module.exports = app => {
    const eventController = require("../controllers/event.controller.js");

    const router = require("express").Router();

    // Fetch all events
    router.get("/all", eventController.findAll)

    // Add event
    router.post("/add", eventController.add);

    app.use('/api/event', router);
};