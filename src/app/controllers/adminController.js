// những trang mà thường không có các đường chi tiết thì thêm vào controller này
// const LoanOptions = require('../models/LoanOption');
// const { mutipleMongooseToObject } = require('../../util/mongoose');
class AdminController {

    // [GET] /
    home(req, res, next) {
        // res.render('../../resources/views/admin/home')
        res.render('../../resources/views/signIn-signUp/signIn')
    }

    login(req, res, nex) {
        res.send('login')
    }

}

module.exports = new AdminController;
