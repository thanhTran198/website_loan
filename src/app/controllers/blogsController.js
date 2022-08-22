
class blogController {

    // [GET] /blogs
    blog(req, res) {
        res.render('../../resources/views/blogs')
    }

    // [GET] /blogs/:slug
    show(req, res) {
        console.log(`slug là: ${req.params.slug}`)
        res.render('../../resources/views/blog-posts/ap-vay-tien-uy-tin')
    }

}

module.exports = new blogController;
