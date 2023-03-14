import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

import SliderLogin from '../Pages/Authentication/Login/SliderLogin';



const UpdateParentsInfo = () => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleOnSubmit = event => {
        setError('')
        event.preventDefault();
        const from = event.target;
        const parent = from.parents.value;
        const name = from.name.value;
        const parentPhone = from.phone.value;
        const parentInfo = { name, parentPhone, parent }

        if (parentPhone.length !== 11) {
            return setError('phone number is not valid')
        }
        else {
            fetch(`http://localhost:5000/student?email=${user.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(parentInfo)
            })
            .then(res => res.json())
            .then(data => {console.log(data)})
            navigate('/auth/photo')
        }

    }

    return (
        <div className='flex flex-col-reverse lg:flex-row mx-auto lg:ml-60'>
            <div className='w-1/2'>
                <div className="hero lg:w-[500px]">
                    <div className="hero-content w-[400px] flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full ">
                            <h1 className='text-4xl font-bold text-center ml-5 hidden lg:flex ctext3'>Parents Information</h1>
                            <form onSubmit={handleOnSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Parents</span>
                                    </label>
                                    <select className='text-l' name="parents" id="">
                                        <option disabled value="">Seclet your Parents</option>
                                        <option value="Father">Father</option>
                                        <option value="Mother">Mother</option>
                                        <option value="Brother">Brother</option>
                                        <option value="Sister">Sister</option>
                                        <option id='other' value="Other">others</option>
                                    </select>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Parent Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered input-success" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="number" name='phone' placeholder="phone" className="input input-bordered input-success" required />
                                </div>
                                <p className='text-red-600'>{error}</p>

                                <div className="form-control mt-3">
                                    <button className="btn cbtn3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center text-2xl lg:hidden'>
                <h1>Parents Information</h1>
            </div>
            <div className='w-1/2 lg:mb-5 mx-auto'>
                <SliderLogin></SliderLogin>
            </div>
        </div>
    );
};


export default UpdateParentsInfo;