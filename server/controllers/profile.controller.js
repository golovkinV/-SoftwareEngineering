const db = require("../index");
const User = db.user;
const hash = require("password-hash");

// Get User by id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .populate("event")
        .populate("role")
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
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
                .send({ message: "Error retrieving User with id=" + id });
        });
};

// Update PIN
exports.updatePin = (req, res) => {
    const id = req.body.id;
    const newPin = req.body.pin
    User.updateOne({ _id: id}, { pin: newPin })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
};

// Update profile
exports.updateProfile = (req, res) => {
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Profile with id=${id}. Maybe Profile was not found!`
                });
            } else res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Profile with id=" + id
            });
        });
}