const db = require("../index");
const Document = db.document;

// Add new document
exports.add = (req, res) => {
    const documentParams = req.body
    const role = new Document({
        name: documentParams.name,
        date: documentParams.date,
        desc: documentParams.desc,
        role: documentParams.role
    })

    role
        .save(role)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Some error occurred while creating the Role"
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
                .send({ message: "Error retrieving Event with id=" + id });
        });
}

// Fetch document

exports.findOne = (req, res) => {
    const id = req.params.id;
    Document.findById(id)
        .populate("role")
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Event with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Event with id=" + id });
        });
};

// Delete document
exports.delete = (req, res) => {
    const id = req.params.id;
    Document
        .findByIdAndDelete(id, { useFindAndModify: false })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Some error occurred while creating the Role"
                });
        });
}

// Fetch documents
exports.findAll = (req, res) => {
    Document.find()
        .populate("role")
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Role"
            });
        });
}