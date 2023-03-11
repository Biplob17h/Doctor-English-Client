import React from 'react';
import img1 from '../../../asstes/download.png'
import img2 from '../../../asstes/96090642_110488800663930_5363271674223394816_n.jpg'

const Accordion = () => {
    return (
        <div>
            <div className='lg:block hidden '>
                <div className='accimg1 cbor2 mx-32'>
                    <div className="collapse"  >
                        <input type="checkbox" />
                        <div className=" cbor2 collapse-title text-2xl font-bold flex justify-between">
                            Best english teacher will take your class.
                        </div>
                        <div className="collapse-content flex justify-between">
                            <div className='text-start w-1/2'>
                                <p className='mx-20 mt-3 font-semibold text-xl'>we  have the absolute best teacher for You to improve your English. They will help you with your English.</p>
                            </div>
                            <div className='w-1/2 flex justify-center items-center'>
                                <img className=' rounded h-[250px]' src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='accimg1 cbor2 mt-5 mx-32'>
                    <div className="collapse"  >
                        <input type="checkbox" />
                        <div className=" cbor2 collapse-title text-2xl font-bold flex justify-between">
                            Best english teacher will take your class.
                        </div>
                        <div className="collapse-content flex justify-between">
                            <div className='text-start w-1/2'>
                                <p className='mx-20 mt-3 font-semibold text-xl'>we  have the absolute best teacher for You to improve your English. They will help you with your English.</p>
                            </div>
                            <div className='w-1/2 flex justify-center items-center'>
                                <img className=' rounded  h-[250px]' src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='accimg1 cbor2 mt-5 mx-32'>
                    <div className="collapse"  >
                        <input type="checkbox" />
                        <div className=" cbor2 collapse-title text-2xl font-bold flex justify-between">
                            Best english teacher will take your class.
                        </div>
                        <div className="collapse-content flex justify-between">
                            <div className='text-start w-1/2'>
                                <p className='mx-20 mt-3 font-semibold text-xl'>we  have the absolute best teacher for You to improve your English. They will help you with your English.</p>
                            </div>
                            <div className='w-1/2 flex justify-center items-center'>
                                <img className=' rounded  h-[250px]' src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='block lg:hidden'>
                <div className="card accimg1 mx-2 cbor2 shadow-xl">
                    <figure><img className='rounded' src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Best english teacher will take your class.</h2>
                        <p>we  have the absolute best teacher for You to improve your English. They will help you with your English.</p>
                    </div>
                </div>
                <div className="card accimg1 mx-2 mt-5 cbor2 shadow-xl">
                    <figure><img className='rounded' src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Best english teacher will take your class.</h2>
                        <p>we  have the absolute best teacher for You to improve your English. They will help you with your English.</p>
                    </div>
                </div>
                <div className="card accimg1 mt-5 mx-2 cbor2 shadow-xl">
                    <figure><img className='rounded' src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Best english teacher will take your class.</h2>
                        <p>we  have the absolute best teacher for You to improve your English. They will help you with your English.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;