const db = require("../index");
const Document = db.document;
const Event = db.event;

// Add new document
exports.add = (req, res) => {
    const documentParams = req.body
    const doc = new Document({
        name: documentParams.name,
        date: documentParams.date,
        desc: documentParams.desc,
        event: documentParams.event,
        isSigned: false,
        role: documentParams.role
    })

    doc
        .save(doc)
        .then(data => {
            Event
                .findByIdAndUpdate(doc.event, { $addToSet: { docs: [data.id] }}, { useFindAndModify: false })
                .then()
                .catch(err => {
                    res
                        .status(500)
                        .send({
                            message: err.message || "Some error occurred while creating the Event"
                        });
                });
            res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Some error occurred while creating the Doc"
                });
        });
};

// Update document
exports.update = (req, res) => {
    const id = req.params.id;
    const doc = req.body
    Document
        .findByIdAndUpdate(id, doc, { useFindAndModify: false })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Doc with id=" + id });
        });
}

// Fetch document

exports.findOne = (req, res) => {
    const id = req.params.id;
    Document.findById(id)
        .populate("role")
        .populate("event")
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Doc with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Doc with id=" + id });
        });
};

// Delete document
exports.delete = (req, res) => {
    const id = req.params.id;
    Document
        .findByIdAndDelete(id, { useFindAndModify: false })
        .then(data => {
            Event
                .findByIdAndUpdate(data.event, { $pull: { docs: data.id }}, { useFindAndModify: false })
                .then()
            res.send(data)
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Some error occurred while creating the Doc"
                });
        });
}

// Fetch documents
exports.findAll = (req, res) => {
    Document.find()
        .populate("role")
        .populate("event")
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Doc"
            });
        });
}