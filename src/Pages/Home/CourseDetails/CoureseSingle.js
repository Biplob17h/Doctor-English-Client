import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const CoureseSingle = ({ course }) => {
    const [enter , setEnter] = useState(false)
    const { img, name, det } = course;
    return (
        <div onMouseEnter={()=> setEnter(true)} onMouseLeave={()=> setEnter(false)} className="card sm:text-red text-center ccard bg-white text-black shadow-xl">
            <figure><img className='w-40' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{det}</p>
                <BsArrowRight className={`mx-auto text-2xl mt-2 ${enter ? 'text-[#1DAB55]' : ''}`}/>
            </div>
        </div>
    );
};

export default CoureseSingle;