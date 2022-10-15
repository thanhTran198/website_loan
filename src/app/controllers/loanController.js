const LoanOptions = require('../models/LoanOption');
const CardOptions = require('../models/openCard');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class LoanController {

    // [GET] loans/vaytinchap
    unsecured(req, res, next) {
        let mortgage = [];
        LoanOptions.find({})
            .then(loans => {
                mutipleMongooseToObject(loans).map(loan => {
                    loan.type.map(key => {
                        if(key == 'mortgage') {
                            mortgage.push(loan);
                        }
                    })
                });
                res.render('../../resources/views/unsecured_loan', { 
                    // loans: mutipleMongooseToObject(loans)
                    loans: mortgage
                })
            })
            .catch(error => next(error))
    }

    // [GET] loans/camdo
    pawn(req, res, next) {
        let pawn = [];
        LoanOptions.find({})
            .then(loans => {
                mutipleMongooseToObject(loans).map(loan => {
                    loan.type.map(key => {
                        if(key == 'pawn') {
                            pawn.push(loan);
                        }
                    })
                });
                res.render('../../resources/views/pawn', { 
                    // loans: mutipleMongooseToObject(loans)
                    loans: pawn
                })
            })
            .catch(error => next(error))
    }

    // [GET] loans/mothenganhang
    openCard(req, res, next) {
        CardOptions.find({})
            .then(cards => {
                res.render('../../resources/views/open_card', { 
                    cards: mutipleMongooseToObject(cards)
                })
            })
            .catch(error => next(error))
        // res.render('../../resources/views/open_card')
    }

    // [GET] /home
    home(req, res, next) {
        res.render('../../resources/views/all_loans')
    }

}

module.exports = new LoanController;
