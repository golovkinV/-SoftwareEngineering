const db = require("../models");
const User = db.user;

// Register User
exports.register = (req, res) => {
    const body = req.body
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
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};
