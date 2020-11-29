const db = require("../index");
const User = db.user;

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