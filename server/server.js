const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const cors = require("cors");

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./index");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// // file upload api
// app.post('/upload', (req, res) => {
//     const myFile = req.files.image;
//     console.log(myFile)
//     if (!req.files) {
//         return res.status(500).send({ msg: "file is not found" })
//     }
//     // accessing the file
//
//     console.log(myFile)
//     //  mv() method places the file inside public directory
//     // myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
//     //     if (err) {
//     //         console.log(err)
//     //         return res.status(500).send({ msg: "Error occured" });
//     //     }
//     //     // returing the response with file path and name
//     //     return res.send({name: myFile.name, path: `/${myFile.name}`});
//     // });
// })

// Requests routes
require("./routes/tutorial.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/role.routes")(app);
require("./routes/profile.routes.js")(app);
require("./routes/event.routes.js")(app);
require("./routes/document.routes.js")(app);
require("./routes/image.routes")(app);
