const db = require("../index")
const Event = db.event


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