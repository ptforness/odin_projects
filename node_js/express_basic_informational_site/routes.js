var express = require('express');
var router = express.Router();

//Home route
router.get('/', function(req, res) {
    res.sendFile('C:/Users/ptfornes/test-node/wiki_proj/index.html');
});

//About route
router.get('/about', function(req, res) {
    res.sendFile('C:/Users/ptfornes/test-node/wiki_proj/about.html');
});

//Contact route
router.get('/contact', function(req, res) {
    res.sendFile('C:/Users/ptfornes/test-node/wiki_proj/contact.html');
});

module.exports = router;