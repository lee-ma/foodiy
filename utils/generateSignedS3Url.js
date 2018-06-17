const AWS = require("aws-sdk");
var s3 = new AWS.S3();

require('../services/awsconfig');

module.exports = fileName => {
  const url = s3.getSignedUrl('getObject', {
    Bucket: "foodiy-dev",
    Key: fileName,
    Expires: 60 * 5
});
}