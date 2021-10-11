const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const keywordsSchema = new Schema({
  keyword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('keywordsModel', keywordsSchema);
