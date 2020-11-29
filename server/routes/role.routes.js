module.exports = app => {
    const roleController = require("../controllers/role.controller.js");

    const router = require("express").Router();

    // Add role
    router.post("/add", roleController.add);

    // Delete a role with id
    router.delete("/:id", roleController.delete);

    // All roles
    router.get("/all", roleController.findAll);

    app.use('/api/role', router);
};