import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import SliderLogin from './SliderLogin';


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleOnSubmit = event =>{
        setError('')
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        
        signIn(email, password)
        .then((result)=>{
            const user = result.user;
            console.log('user log in successfully', user)
            from.reset();
            navigate('/')
        })
        .catch((error) =>{
            const errorCode = error.code;
            setError(errorCode)
        })
        
    }
    return (
        <div className='flex flex-col-reverse lg:flex-row mx-auto lg:ml-60'>
            <div className='w-1/2'>
                <div className="hero lg:w-[500px]">
                    <div className="hero-content w-[400px] flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full ">
                        <h1 className='text-4xl font-bold text-center ml-5 hidden lg:flex ctext3'>Student Login</h1>
                            <form onSubmit={handleOnSubmit} className="card-body">
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
                                    <p className='text-red-600 my-2'>{error}</p>
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>

                                </div>
                                
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <h1 className="label-text-alt mb-2">Don't have an account? <span className='font-bold'><Link to='/auth/register'>Sign Up</Link></span></h1>
                                    </label>
                                    <button className="btn cbtn3">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 lg:mb-5 mx-auto'>
                <SliderLogin></SliderLogin>
            </div>
        </div>
    );
};

export default Login;