const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const{getAllBooks, getBookById, importBooks} = require('../controllers/bookCtrl');




router.get('/insert', importBooks)

router.get('/:id', getBookById);

router.get('/', getAllBooks);

module.exports = router;