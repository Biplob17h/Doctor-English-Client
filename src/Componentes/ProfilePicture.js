import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import SliderLogin from '../Pages/Authentication/Login/SliderLogin';





const ProfilePicture = () => {
    const {updateUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleOnSubmit = event => {
        setError('')
        event.preventDefault();
        const from = event.target;
        const photo = from.photo.value;
        const profile = {photoURL : photo}
        updateUser(profile)
        .then(()=>{})
        .catch((error)=>console.log(error))
        navigate('/')
    }

    return (
        <div className='flex flex-col-reverse lg:flex-row mx-auto lg:ml-60'>
            <div className='w-1/2'>
                <div className="hero lg:w-[500px]">
                    <div className="hero-content w-[400px] flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full ">
                            <h1 className='text-4xl font-bold text-center ml-5 hidden lg:flex ctext3'>Update Your Profile</h1>
                            <form onSubmit={handleOnSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Profile Picture</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="PhotoUrl (your photo url)" className="input input-bordered input-success"/>
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

export default ProfilePicture;