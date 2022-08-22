
// const loansRouter = require('./loans');
const blogsRouter = require('./blogs');
const siteRouter = require('./site');

// controller
const loanController = require('../../src/app/controllers/loanController'); 

function route(app) {
    
    // ROUTER KHOẢN VAY
    app.use('/loans/vaytinchap', loanController.unsecured);
    app.use('/loans/camdo', loanController.pawn);
    app.use('/loans/mothenganhang', loanController.mortgage);
    app.use('/loans', loanController.home);
    
    // ROUTER BLOGS
    app.use('/blogs', blogsRouter);
    
    // ROUTER PAGE HOME
    app.get('/', siteRouter);

}

module.exports = route;
