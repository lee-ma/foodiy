const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: String,
  description: String,
  ingredients: [String],
  steps: [String],
  images: [String],
  rating: Number,
  time: Number,
  author: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  comments: [
      {
          type: Schema.Types.ObjectId,
          ref: 'comment'
      }
  ]
}, {usePushEach: true});

mongoose.model('recipe', RecipeSchema);
