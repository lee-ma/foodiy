module.exports = {
  cookieKey: process.env.SECRET,
  facebookclientID: process.env.CLIENT_ID_FB,
  facebookclientSecret: process.env.CLIENT_SECRET_FB,
  googleclientID: process.env.CLIENT_ID_GOOGLE,
  googleclientSecret: process.env.CLIENT_SECRET_GOOGLE,
  mongoURI: process.env.MONGO_URI,
  awsAccessId: process.env.AWS_ACCESS_ID,
  awsSecretKey: process.env.AWS_SECRET_KEY,
  bucketName: process.env.BUCKET_NAME,
  s3Region: process.env.S3_REGION
}