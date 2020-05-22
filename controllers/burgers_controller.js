var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//Setting the Routes here

// redirects me to main index
router.get('/', function (req, res) 
{
  res.redirect('/index');
});


router.get('/index', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// to create a new burger
router.post('/burger/create', function (req, res) 
{
  burger.insertOne(req.body.burger_name, function() 
  {
    res.redirect('/index');
  });
});

// Devour a Burger
router.post('/burger/eat/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});


module.exports = router;