var AWS = require("aws-sdk")
var keys = require('../config/keys')

AWS.config.update({
  secretAccessKey: keys.awsSecretKey,
  accessKeyId: keys.awsAccessId,
  region: keys.s3Region
})
