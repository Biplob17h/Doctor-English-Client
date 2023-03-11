import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from 'react-icons/bs';

const Carousel = () => {
    const [courses, setCoureses] = useState([])
    const [enter , setEnter] = useState(false)
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCoureses(data))
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
        <div className='text'>
            <Slider {...settings}>
                {
                    courses.map(course => <div onMouseEnter={()=> setEnter(true)} onMouseLeave={()=> setEnter(false)} key={course._id}>
                        <div  className="card text-center ccard bg-white text-black shadow-xl mx-5">
                            <figure><img className='w-40' src={course.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                 <h2 className="card-title">{course.name}</h2>
                                <p>{course.det}</p>
                                <BsArrowRight className={`mx-auto text-2xl mt-2 ${enter ? 'text-[#1DAB55]' : ''}`}/>
                            </div>
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default Carousel;