const Review = require("../models/reviewModel")

const reviewCtrl = {
    postReview: async (req, res) => {
        try {
            const {bookId, content} = req.body;
            const newReview = new Review({
                book: bookId,
                content: content,
                user:  req.user._id
            })
            await newReview.save()
            res.status(201).send("Review posted")
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getReviewByBook: async (req, res) => {
        const {bookId} = req.params
        const reviews = await Review.find({book: bookId})
        res.json(reviews)
    },
    deleteReview: async (req, res) => {
        const {reviewId} = req.params
        const review = await findOne({_id: reviewId})
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
        const review = await findOne({_id: reviewId})
        if (review) {
            if(review.user === req.user._id){
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