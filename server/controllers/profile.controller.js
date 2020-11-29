const db = require("../index");
const User = db.user;
const hash = require("password-hash");

// Get User by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .populate("role")
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};

// Update password
exports.updatePassword = (req, res) => {
    const id = req.body.userId;
    const newPassword = req.body.newPassword
    User.updateOne({ _id: id}, { password: hash.generate(newPassword) })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};