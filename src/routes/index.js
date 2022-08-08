const loansRouter = require('./loans');
const blogsRouter = require('./blogs');
const siteRouter = require('./site');

function route(app) {
    
    app.use('/blogs', blogsRouter);
    
    app.get('/loans', loansRouter);
    
    app.get('/', siteRouter);


}

module.exports = route
