const reviewCtrl = require("../controllers/reviewCtrl");
const router = require('express').Router();
const auth = require('../middleware/auth');;


router.post('/', auth, reviewCtrl.postReview)

router.get('/:bookId', auth, reviewCtrl.getReviewByBook)

router.delete('/:reviewId', auth, reviewCtrl.deleteReview)




module.exports = router