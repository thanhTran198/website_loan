const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardOption = new Schema({
    name: String,
    title: String,
    img: String,
    benefit: Array
  });

module.exports = mongoose.model('open_card', cardOption); //open_card vì để khi kết nối với mongose thì mongose sẽ tự thêm s vào sau loan_options và kết nối đến đúng data
