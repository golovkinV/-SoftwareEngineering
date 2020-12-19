
module.exports = app => {
    const profileController = require("../controllers/profile.controller.js");

    const router = require("express").Router();

    //User by id
    router.get("/:id", profileController.findOne);

    //Update password
    router.post("/update_password", profileController.updatePassword);

    //Update profile
    router.put("/update_profile/:id", profileController.updateProfile);

    app.use('/api/profile', router);
};