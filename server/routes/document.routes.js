module.exports = app => {
    const documentController = require("../controllers/document.controller.js");

    const router = require("express").Router();

    // Add document
    router.post("/add", documentController.add);

    // Fetch all documents
    router.get("/all", documentController.findAll)

    //Delete document
    router.delete("/:id", documentController.delete)

    // Update document
    router.put("/:id", documentController.update)

    app.use('/api/document', router);
};