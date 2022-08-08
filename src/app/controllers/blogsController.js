
class blogController {

    // [GET] /blogs
    blog(req, res) {
        res.render('../../resources/views/blogs')
    }

    // [GET] /blogs/:slug
    show(req, res) {
        res.send(`ok slug: ${req.path }`)
    }

}

module.exports = new blogController;
