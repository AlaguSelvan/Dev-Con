const express = require('express');

var router = express.Router();

// @route GET api/profile/test
// @desc Tests post route
// @access Public
router.get('/test', (req, res) => res.json({
    msg: "profile Works"
}));

module.exports = router;