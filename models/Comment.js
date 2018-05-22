const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  author: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  content: String,
  createdAt: Date
});

mongoose.model('comment', CommentSchema);
