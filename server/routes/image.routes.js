module.exports = app => {
    const imageController = require("../controllers/images.controller.js");

    const router = require("express").Router();

    // Add image
    router.post("/upload", imageController.uploadImage);

    app.use('/api/image', router);
};