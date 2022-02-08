const reviewCtrl = require("../controllers/reviewCtrl");
const router = require('express').Router();
const auth = require('../middleware/auth');;


router.post('/', auth, reviewCtrl.postReview)

router.get('/:bookId', reviewCtrl.getReviewByBook)

router.delete('/:reviewId', auth, reviewCtrl.deleteReview)

router.patch('/:reviewId', auth, reviewCtrl.updateReview)




module.exports = router