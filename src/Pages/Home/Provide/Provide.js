import React from 'react';
import Accordion from '../Accordion/Accordion';

const Provide = () => {
    return (
        <div className='mb-40'>
            <div className='mt-32 text-center mx-auto mb-32'>
                <h1 className='sm:text-2xl lg:text-5xl font-bold'>What we provide in our online batch ?</h1>
                <p className='sm:text-sm sm:mx-10 lg:text-xl lg:font-semibold mt-5 lg:mx-60'>May the progress of education continue from any part of the country under the care of the best english teacher.</p>
            </div>
            <div>
                <Accordion></Accordion>
            </div>
        </div>
    );
};

export default Provide;