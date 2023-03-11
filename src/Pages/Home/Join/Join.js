import React from 'react';
import img from '../../../asstes/96711721_110565517322925_5855518709241610240_n.jpg'

const Join = () => {
    return (
        <div className='text-center accimg2 mt-2 text-black ml-6 lg:ml-0'>
            <h1 className='text-2xl lg:text-6xl font-bold'>Join Today</h1>
            <h1 className='text-2xl lg:text-5xl font-bold'>Rajshahi biggest English learning platform.</h1>
            <div className='flex flex-col-reverse lg:flex-row mt-32'>
                <div className='lg:w-1/2 gap-5 grid grid-cols-1 lg:grid-cols-2 ctext2'>
                    <div className="card w-full cbg1">
                        <div className="card-body">
                           <h1 className='text-5xl font-bold'> 5000 + Students</h1>                           
                        </div>
                    </div>
                    <div className="card cbg2">
                        <div className="card-body">
                           <h1 className='text-5xl font-bold'> 5000 + Students</h1>                           
                        </div>
                    </div>
                    <div className="card cbg3">
                        <div className="card-body">
                           <h1 className='text-5xl font-bold'> 5000 + Students</h1>                           
                        </div>
                    </div>
                    <div className="card cbg4">
                        <div className="card-body">
                           <h1 className='text-5xl font-bold'> 5000 + Students</h1>                           
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 mb-5 lg:mb-0 flex items-center lg:ml-5'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Join;