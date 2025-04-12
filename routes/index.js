const express = require('express');
const router =  express.Router();

router.use('/log', require('./log'));


module.exports = router;