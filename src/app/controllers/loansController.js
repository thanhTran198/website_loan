
const LoanOption = require('../models/LoanOption');

class loanController {

    // [GET] /loans
    loans(req, res) {
        res.render('../../resources/views/loan')

        // GET data of mongodb 
        // LoanOption.find({}, function (err, loans) {
        //     if(!err) {
        //     res.json(loans)
        //     }else {
        //     res.status(400).json({error: 'message'})
        //     }
        // });
    }

    // [GET] /loans/:slug
    show(req, res) {
        res.send('ok 123456')
    }

}

module.exports = new loanController;
