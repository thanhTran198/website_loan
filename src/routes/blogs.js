const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/blogsController');


router.use('/:slug', newController.show);
router.use('/', newController.blog);

module.exports = router;
