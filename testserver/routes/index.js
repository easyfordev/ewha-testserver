var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/test', function(req, res, next) {
    res.status(200).send({
        'status' : 'success',
        'msg' : 'hello'
    });
});

router.get('/', function(req, res, next) {
    res.status(200).send();
});

module.exports = router;
