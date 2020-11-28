const db = require("../models");
const User = db.user;

// Register User
exports.register = (req, res) => {
    const body = req.body;
    if (!body.email || !body.password) {
        res.status(400).send({ message: "Email and password can not be empty!" });
        return;
    }

    const user = new User({
        email: body.email,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
        country: body.country
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