const db = require("../index");
const hash = require("password-hash")
const User = db.user;
const Role = db.role

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.find()
        .populate("event")
        .populate("role")
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
    const noRoleId = "5fc37f90f2a8280450a4176b"
    if (!userParams.email || !userParams.password) {
        res.status(400).send({ message: "Email and password can not be empty!" });
        return;
    }

    const user = new User({
        email: userParams.email,
        password: hash.generate(userParams.password),
        firstName: userParams.firstName,
        lastName: userParams.lastName,
        country: userParams.country,
        about: "",
        pin: "",
        event: null,
        avatar: userParams.avatar,
        role: noRoleId
    });

    user
        .save(user)
        .then(data => {
            Role.updateOne({
                _id: noRoleId
            }, {
                $addToSet: { users: [data.id] }
            }, function(err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            })
        })
        .catch(err => {
            res
                .status(500)
                .send({
                    message: err.message || "Some error occurred while creating the User"
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const event = req.body
    User
        .findByIdAndUpdate(id, event, { useFindAndModify: false })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
}

// Login User
exports.login = (req, res) => {
    const email = req.query.email
    const password = req.query.password
    User.findOne({ email: email })
        .then(data => {
            console.log(email)
            if (!data || !hash.verify(password, data.password)) {
                res.status(404).send({
                    message: 'Wrong email or password'
                })
            }
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + email });
        });
}