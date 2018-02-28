var ids = {
  secret: process.env.SECRET,
  facebookclientID: process.env.CLIENT_ID_FB,
  facebookclientSecret: process.env.CLIENT_SECRET_FB,
  googleclientID: process.env.CLIENT_ID_GOOGLE,
  googleclientSecret: process.env.CLIENT_SECRET_GOOGLE,
  mongoURI: process.env.MONGO_URI
}

module.exports = ids;
