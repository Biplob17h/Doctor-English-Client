import React from 'react';
import Carousel from '../Carousel/Carousel';

const CourseDetails = () => {

    return (
        <div className='text-white show_bg_2 text-center mx-auto rounded'>
            <div className='py-20 '>
                <h1 className='text-2xl lg:text-5xl  font-bold '>Online batch Admission of 2023 is going on!</h1>
                <h1 className=' lg:text-3xl lg:mx-32 mt-5 font-semibold'>6-10 live classes per week depending on class, along with lecture sheets and regular exam facility with our best gide and teacher.</h1>
            </div>
            <Carousel></Carousel>
        </div>

    );
};

export default CourseDetails;
