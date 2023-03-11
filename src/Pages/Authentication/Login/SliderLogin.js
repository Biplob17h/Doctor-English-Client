import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../asstes/routine.svg'
import img2 from '../../../asstes/routine1.svg'
import img3 from '../../../asstes/routine2.svg'
import img4 from '../../../asstes/routine3.svg'

const SliderLogin = () => {
    const SliderDatas = [
        {
            _id:1,
            img:img1,
        },
        {
            _id:1,
            img:img2,
        },
        {
            _id:1,
            img:img3,
        },
        {
            _id:1,
            img:img4,
        },
]
    return (
        <div>
            <Slider>
                {
                    SliderDatas.map(sliderData => <div key={sliderData._id}>
                        <img src={sliderData.img} alt="" />
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default SliderLogin;


