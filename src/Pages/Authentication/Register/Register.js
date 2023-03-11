import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import SliderLogin from '../Login/SliderLogin';


const Register = () => {
    const {signUp, updateUser} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleOnSubmit = event =>{
        setError('')
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        
        // Create user with email and password
        signUp(email, password)
        .then((result)=>{
            const user = result.user;
            console.log('user created successfully', user)
            from.reset()
            updateName(name)
            navigate('/parents')
        })
        .catch((error)=>{
            const errorCode = error.code;
            setError(errorCode)
        })
    }

    // update user name

    const updateName = name =>{
        const profile = {displayName : name}
        updateUser(profile)
        .then(()=>{console.log('user name update successfully')})
        .catch((error)=> {console.error(error)})
    }
    return (
        <div className='flex flex-col-reverse lg:flex-row mx-auto lg:ml-60'>
            <div className='w-1/2'>
                <div className="hero lg:w-[500px]">
                    <div className="hero-content w-[400px] flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full ">
                            <form onSubmit={handleOnSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered input-success" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered input-success" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered input-success" required/>
                                </div>
                                <p className='text-red-600'>{error}</p>

                                <div className="form-control mt-3">
                                    <label className="label">
                                        <h1 className="label-text-alt mb-2 link link-hover">Already have an account? <span className='font-bold'><Link to='/login'>Log in</Link></span></h1>
                                    </label>
                                    <button className="btn cbtn3">Sing Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='text-center  text-2xl lg:text-5xl'>
                <h1>Student Information</h1>
            </div> */}
            <div className='w-1/2 lg:mb-5 mx-auto'>
                <SliderLogin></SliderLogin>
            </div>
        </div>
    );
};

export default Register;