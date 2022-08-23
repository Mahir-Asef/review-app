import React from 'react';
import SingleReview from '../SingleReview/SingleReview';
import useReviews from '../../hooks/AllReviews';

const Reviews = () => {
    const {review} = useReviews();
    return (
       <div>
         <div className="row gy-3">
            <h1>This is Review Section</h1>
            {
                review.map(review => {
                    return <SingleReview review={review} key={review.id} ></SingleReview>
                })
            }
        </div>
       </div>
    );
};

export default Reviews;