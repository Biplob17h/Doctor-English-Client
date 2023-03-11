import React from 'react';
import Footer from '../../Shered/Footer/Footer';
import Comment from '../Comment/Comment';
import CourseDetails from '../CourseDetails/CourseDetails';
import Join from '../Join/Join';
import Provide from '../Provide/Provide';

const Home = () => {
    return (
        <div className='lg:m-10'>
            <CourseDetails></CourseDetails>
            <Provide></Provide>
            <Comment></Comment>
            <Join></Join>
            <Footer></Footer>
        </div>
    );
};

export default Home;