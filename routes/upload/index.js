const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const uuid = require('uuid')

app.use(fileUpload())

app.post("/", async (req, res) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }

    const idFile = uuid.v4();

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.filedata;
    const ext = sampleFile.name.split(".").reverse()[0];
    uploadPath = __dirname + `/uploads/` + `${idFile}.${ext}`;

    // Use the mv() method to place the file somewhere on your server
    await sampleFile.mv(uploadPath, function (err) {
        if (err) return res.status(500).send(err);

        res.send("File uploaded!");
    });
});

module.exports = app