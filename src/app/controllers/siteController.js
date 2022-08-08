// những trang mà thường không có các đường chi tiết thì thêm vào controller này
const LoanOptions = require('../models/LoanOption');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    home(req, res, next) {
       // GET data of mongodb 
        LoanOptions.find({})
            .then(loans => {
                res.render('../../resources/views/home', { 
                    loans: mutipleMongooseToObject(loans)
                })
            })
            .catch(error => next(error))
    }

    // [GET] /search
    search(req, res) {
        res.send('ok')
    }

}

module.exports = new SiteController;
