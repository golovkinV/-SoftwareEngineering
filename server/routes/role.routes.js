module.exports = app => {
    const roleController = require("../controllers/role.controller.js");

    const router = require("express").Router();

    // Add role
    router.post("/add", roleController.add);

    // Delete a role with id
    router.delete("/:id", roleController.delete);

    // All roles
    router.get("/all", roleController.findAll);

    // Get Role
    router.get("/:id", roleController.findOne)
    app.use('/api/role', router);
};