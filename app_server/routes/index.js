var express = require('express');
var router = express.Router();

const ctrlMain = require('../contollers/main');
const ctrlFood = require('../contollers/food.js');
const ctrlAbout = require('../contollers/about');
const ctrlBook = require('../contollers/book');

/* GET home page. */
router.get('/favouritefood', ctrlFood.favouritefood);
router.get('/foodlist', ctrlFood.foodlist);
router.get('/', ctrlBook.homelist);
router.get('/about', ctrlAbout.about);
router.get('/list',ctrlBook.listdisplay);


module.exports = router;
