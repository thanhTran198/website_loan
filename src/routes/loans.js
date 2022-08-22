
const express = require('express');
const router = express.Router();

const loanController = require('../app/controllers/loanController');


router.use('/vaythechap', loanController.mortgage);

router.use('/vaytinchap', loanController.unsecured);

router.use('/camdo', loanController.camdo);

router.use('/', loanController.home);

module.exports = router;
