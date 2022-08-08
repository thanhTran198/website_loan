
const express = require('express');
const router = express.Router();

const loanController = require('../app/controllers/loansController');


router.use('/', loanController.loans);
router.use('/:slug', loanController.show);

module.exports = router;
