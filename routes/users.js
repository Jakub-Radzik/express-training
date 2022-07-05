var express = require('express');
const { route } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/r1', (req, res, next) => {
  res.send('r1');
});

router.get('/r2', function (req, res, next) {
  res.send('r2');
});

router.all('/secret', (req, res, next) => {
  console.log('secret route');
  next();
});

router.get('/secret', (req, res, next) => {
  console.log('secret get');
  res.send('secret');
});

router.get('/:id/books/:bookId', (req, res, next) => {
  console.log('secret get');
  console.log(req.pa);
  res.send('secret');
});

router.get(
  '/handlers',
  (req, res, next) => {
    console.log('first handler');
  },
  (req, res, next) => {
    console.log('second handler');
  }
);

module.exports = router;
