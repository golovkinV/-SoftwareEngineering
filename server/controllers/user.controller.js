const db = require("../models");
const User = db.user;

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Register User
exports.register = (req, res) => {
    const userParams = req.body;
    if (!userParams.email || !userParams.password) {
        res.status(400).send({ message: "Email and password can not be empty!" });
        return;
    }

    const user = new User({
        email: userParams.email,
        password: userParams.password,
        firstName: userParams.firstName,
        lastName: userParams.lastName,
        country: userParams.country
    });

    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Some error occurred while creating the User"
            });
        });
};

// Login User
exports.login = (req, res) => {
    const email = req.query.email
    const password = req.query.password
    User.findOne({ email: email, password: password})
        .then(data => {
            if (!data)
                res
                    .status(404)
                    .send({ message: "Not found User with email " + email });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + email });
        });
}