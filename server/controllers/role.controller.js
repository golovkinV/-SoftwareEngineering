const db = require("../index")
const Role = db.role

// All roles
exports.findAll = (req, res) => {
    Role.find()
        .populate("users")
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Role"
            });
        });
};

// Add role
exports.add = (req, res) => {
    const roleParams = req.body
    const role = new Role({
        name: roleParams.name
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

//Delete role
exports.delete = (req, res) => {
    const id = req.params.id;
    Role.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Role with id=${id}`
                });
            } else {
                res.send({
                    message: "Role was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Role with id=" + id
            });
        });
};