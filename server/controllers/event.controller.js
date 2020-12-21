const db = require("../index");
const Event = db.event;
const User = db.user;
const Role = db.role

// Fetch all Events
exports.findAll = (req, res) => {
    Event.find()
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

// Fetch Event
exports.findOne = (req, res) => {
    const id = req.params.id;
    Event.findById(id)
        .populate("users")
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

// Remove user from Event
exports.removeUser = (req, res) => {
    const id = req.params.id;
    const user = req.body.user;
    const oldRoleId = user.role._id
    const noRole = "5fc37f90f2a8280450a4176b"
    Event
        .findByIdAndUpdate(id, { $pull: { users: user.id } })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else {
                User.findByIdAndUpdate(
                    user.id,
                    { event: null, role: noRole })
                    .then(data => {
                        Role
                            .findByIdAndUpdate(oldRoleId, { $pull: { users: user.id } }, { new: true })
                            .then(res => {
                                Role
                                    .findByIdAndUpdate(noRole, { $addToSet: { users: [user.id] } }, { new: true })
                                    .then(res => {
                                    })
                            })
                        res.send(data)
                    })
            }
        })
        .catch(err =>  {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        })
}

// Add user to event
exports.addUser = (req, res) => {
    const id = req.params.id;
    const body = req.body
    const userId = body.user.id;
    const oldRoleId = body.user.role._id
    const roleId = body.role
    Event
        .findByIdAndUpdate(id, { $addToSet: { users: [userId] }}, { new: true })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else {
                User.findByIdAndUpdate(
                    userId,
                    { event: data.id, role: roleId },
                    { new: true })
                    .then(data => {
                        Role
                            .findByIdAndUpdate(oldRoleId, { $pull: { users: userId } }, { new: true })
                            .then(res => {
                                Role
                                    .findByIdAndUpdate(roleId, { $addToSet: { users: [userId] } }, { new: true })
                                    .then(res => {
                                    })
                            })
                        res.send(data);
                    })
                    .catch(err => {
                        res
                            .status(500)
                            .send({ message: "Error retrieving User with id=" + id });
                    });
            }
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
}

// Create Event
exports.add = (req, res) => {
    const eventParams = req.body
    const event = new Event({
        name: eventParams.name,
        start: eventParams.start,
        CStart: eventParams.CStart,
        CFinish: eventParams.CFinish,
        finish: eventParams.finish
    })

    event
        .save(event)
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