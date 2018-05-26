const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  googleId: String,
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'recipe'
    }
  ]
}, {usePushEach: true});

mongoose.model('user', UserSchema);
