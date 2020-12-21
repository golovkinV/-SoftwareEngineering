const db = require("../index");
const Event = db.event;
const User = db.user;

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

// Remove user from Event
exports.removeUser = (req, res) => {
    const id = req.params.id;
    const userId = req.body.userId;
    Event
        .findByIdAndUpdate(id, { $pull: { users: userId } })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else {
                User.findByIdAndUpdate(
                    userId,
                    { event: null },
                    function(err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(data);
                        }
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
    const userId = req.body.userId;
    Event
        .findByIdAndUpdate(id, { $addToSet: { users: [userId] }}, { new: true })
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with id " + id });
            else {
                User.findByIdAndUpdate(
                    userId,
                    { event: data.id },
                    function(err, result) {
                        if (err) {
                            res.send(err);
                        } else {
                            res.send(data);
                        }
                    })
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