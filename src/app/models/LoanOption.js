const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoanOption = new Schema({
    name: String,
    logo: String,
    title: String,
    Advantages: String,
    annual_interest_rate: String,
    introduce: Array
  });

module.exports = mongoose.model('loan_option', LoanOption); //loan_option vì để khi kết nối với mongose thì mongose sẽ tự thêm s vào sau loan_options và kết nối đến đúng data
