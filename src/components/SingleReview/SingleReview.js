import React from "react";
import { ImStarFull } from "@react-icons/all-files/im/ImStarFull";
const SingleReview = (props) => {
  // console.log(props);
  const { name, ratting } = props.review;
  return (
    <div className="col-lg-6 col-sm-6  ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
            <span>

              {
                [...new Array(ratting)].map((el,i)=> <ImStarFull key={i} style={{color:"goldenrod"}} ></ImStarFull> )
              }
            </span>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
