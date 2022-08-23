import React from "react";
import SingleReview from "../SingleReview/SingleReview";
import useReviews from "../../hooks/AllReviews";
import { Link } from "react-router-dom";
const SliceReviews = () => {
    const {review} = useReviews();
  return (
    <div className="row gy-3 mt-3">
      {
      review.slice(0,4).map((review) => {
        return <SingleReview review={review} key={review.id}></SingleReview>;

      })}
      <Link to="/reviews">See All Review</Link>
    </div>
  );
};

export default SliceReviews;
