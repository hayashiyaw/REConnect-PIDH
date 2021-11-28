var express = require('express');
// const ServicosController = require('../controllers/ServicosController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

module.exports = router;
