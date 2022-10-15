
// const loansRouter = require('./loans');
const blogsRouter = require('./blogs');
const siteRouter = require('./site');
const adminRouter = require('./admin');

// controller
const loanController = require('../../src/app/controllers/loanController'); 

function route(app) {

    // app.use('/singin', (req, res, nex)=>{
    //     const messages = req.flash('error')
    //     res.render('../resources/views/signIn-signUp/signIn', {
    //         messages,
    //         hasErrors: messages.length > 0
    //     })
    // })
    
    // ROUTER KHOẢN VAY
    app.use('/loans/vaytinchap', loanController.unsecured);
    app.use('/loans/camdo', loanController.pawn);
    app.use('/loans/mothenganhang', loanController.openCard);
    app.use('/loans', loanController.home);
    
    // ROUTER BLOGS
    app.use('/blogs', blogsRouter);

    // ROUTER ADMIN
    app.get('/admin', adminRouter);
    
    // ROUTER PAGE HOME
    app.get('/', siteRouter);

}

module.exports = route;
