const s3 = require('../AWS');

exports.uploadImage = (req, res) => {

    const image = req.files.file

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'utmn',
        Key: image.name, // File name you want to save as in S3
        Body: image.data
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            console.log(err)
            throw err;
        }
        res.send(data.Location)
    });
}