import {useState,useEffect} from 'react';

const useReviews = () => {

    const reviewArray=[
        {name:'Zilbrate',id:1,ratting:4},
        {name:'Zilbra',id:2,ratting:3},
        {name:'Zil',id:3,ratting:5},
        {name:'Zilbte',id:4,ratting:2},
        {name:'Zilte',id:5,ratting:4},
        {name:'Zilte',id:6,ratting:5},
        {name:'Zilte',id:7,ratting:1}
    ]
    
    const [review,setReview]=useState([]);

    useEffect(()=>{
        setReview(reviewArray);
    },[]);

    return {review,setReview};
};

export default useReviews;


