const reviewCtrl = require("../controllers/reviewCtrl");
const router = require('express').Router();
const auth = require('../middleware/auth');;


router.post('/', auth, reviewCtrl.postReview)

router.get('/:id', auth, reviewCtrl.getReviewByBook)




module.exports = router