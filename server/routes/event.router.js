module.exports = app => {
    const eventController = require("../controllers/event.controller.js");

    const router = require("express").Router();

    // Fetch all events
    router.get("/all", eventController.findAll)

    // Add event
    router.post("/add", eventController.add);

    // Add user to event
    router.put("/addUser/:id", eventController.addUser)

    // Remove user to event
    router.put("/removeUser/:id", eventController.removeUser)

    // Fetch event
    router.get("/:id", eventController.findOne)

    app.use('/api/event', router);
};