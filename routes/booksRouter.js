const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const bookCtrl = require('../controllers/bookCtrl');


router.route("/")
    .get(bookCtrl.getAllBooks)
    .post(bookCtrl.createBook)

router.route('/:id')
    .delete(bookCtrl.deleteBook)
    .put(bookCtrl.updateBook)
    .get(bookCtrl.getBookById)


// router.get('/insert', importBooks)

// router.get('/:id', getBookById);

// router.get('/', getAllBooks);

module.exports = router;