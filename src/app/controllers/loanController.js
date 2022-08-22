const LoanOptions = require('../models/LoanOption');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class LoanController {

    // [GET] loans/vaytinchap
    mortgage(req, res, next) {
        res.render('../../resources/views/mortgage_loan')
    }

    // [GET] loans/vaythechap
    unsecured(req, res, next) {
        LoanOptions.find({})
            .then(loans => {
                res.render('../../resources/views/unsecured_loan', { 
                    loans: mutipleMongooseToObject(loans)
                })
            })
            .catch(error => next(error))
    }

    // [GET] loans/camdo
    pawn(req, res, next) {
        res.render('../../resources/views/pawn')
    }

    // [GET] /home
    home(req, res, next) {
        res.render('../../resources/views/all_loans')
    }

}

module.exports = new LoanController;
