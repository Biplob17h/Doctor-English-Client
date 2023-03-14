import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleComment from './SingleComment';


const Comment = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('commentData.json')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className='text-center mb-40'>
            <h1 className='text-2xl lg:text-5xl font-bold mb-14'>Why we are the first choice of <br /> students and parents?</h1>
            <Slider {...settings}>
                {
                    comments.map(comment => <SingleComment
                    key={comment._id}
                    comment={comment}
                    ></SingleComment>)
                }
            </Slider>

        </div>
    );
};

export default Comment;