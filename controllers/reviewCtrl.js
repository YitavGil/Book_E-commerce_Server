const Review = require("../models/reviewModel")

const reviewCtrl = {
    postReview: async (req, res) => {
        try {
            const {bookId, content} = req.body;
            if(!req.user.id){
                res.status(401).send("Invalid Token")
                return
            }
            const newReview = new Review({
                book: bookId,
                content: content,
                user:  req.user.id
            })
            await newReview.save()
            res.status(201).send("Review posted")
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getReviewByBook: async (req, res) => {
        const {bookId} = req.params
        const reviews = await Review.find({book: bookId}).populate("user")
        res.json(reviews)
    },
    deleteReview: async (req, res) => {
        const {reviewId} = req.params
        const review = await Review.findOne({_id: reviewId})
        if (review) {
            if(review.user === req.user._id){
                await Review.deleteOne({_id: reviewId})
                return res.send("Comment deleted")
            } else{
                res.status(401).send("Not valid user")
                return
            }
        } else {
            res.status(404).send("Review not found")
        }
    },

    updateReview: async (req, res) => {
        const {reviewId} = req.params
        const {content} = req.body
        const review = await Review.findOne({_id: reviewId})
        if (review) {
            console.log(review.user, req.user);
            if(review.user.toString() === req.user._id.toString()){ //user is an object*
                review.content = content
                await review.save()
                res.status(200).send('Review updated')
                return 
            } else{
                res.status(401).send("Not valid user")
                return
            }
        } else {
            res.status(404).send("Review not found")
        }
    }
}

module.exports = reviewCtrl