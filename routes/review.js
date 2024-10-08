const express = require("express");
const router = express.Router({ mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn , isReviewAuthor} = require("../middleware.js");
const ExpressError = require("../utils/ExpressError.js");


const reviewController = require("../controllers/review.js");

// Review route
// post route
router.post("/", isLoggedIn ,validateReview, wrapAsync(reviewController.createReview));

// Delete Review Rate 
router.delete("/:reviewId",isLoggedIn,isReviewAuthor ,wrapAsync(reviewController.destroyReview));

module.exports = router;
