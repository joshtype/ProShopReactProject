// Rating component rendered via React Router

import React from 'react';
import { 
    FaStar,         // filled star
    FaStarHalfAlt,  // half-filled star
    FaRegStar       // empty star
} from 'react-icons/fa';

// display product.rating value as stars & product.numReviews as str
const Rating = ( { ratingVal, ratingNum }) => {
  // use ternary ops to determine stars
  return (
    <div className="rating">
      <span id="zeroToOneStars">
        { ratingVal >= 1 ? <FaStar /> : ratingVal >= 0.5 ?
            <FaStarHalfAlt /> : <FaRegStar /> }
      </span>

      <span id="oneToTwoStars">
        { ratingVal >= 2 ? <FaStar /> : ratingVal >= 1.5 ?
            <FaStarHalfAlt /> : <FaRegStar /> }
      </span>

      <span id="twoToThreeStars">
        { ratingVal >= 3 ? <FaStar /> : ratingVal >= 2.5 ?
            <FaStarHalfAlt /> : <FaRegStar /> }
      </span>

      <span id="threeToFourStars">
        { ratingVal >= 4 ? <FaStar /> : ratingVal >= 3.5 ?
            <FaStarHalfAlt /> : <FaRegStar /> }
      </span>

      <span id="fourToFiveStars">
        { ratingVal >= 5 ? <FaStar /> : ratingVal >= 4.5 ?
            <FaStarHalfAlt /> : <FaRegStar /> }
      </span>

      <span className="numRatings">
        { ratingNum ? ratingNum : null }
      </span>
    </div>
  )
}

export default Rating
