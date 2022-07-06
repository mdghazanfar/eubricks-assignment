import React from 'react';
import { NavLink } from 'react-router-dom';

import './Login.css'

export default function SignUp() {
    return (
        <div className='text-center m-5-auto'>
            <h1 className='FontSize'>Join us</h1>
            <h5 className='FontSize'>Create your personal account</h5>
            <div className='form'>
                <p>
                    <p className='pass-label'>Username</p>
                    <br />
                    <input className='InputBox' type='text' name='first_name' required />
                </p>
                <div>
                    <p className='pass-label' >Email address</p>
                    <br />
                    <input className='InputBox' type='email' name='email' required />
                </div>
                <p>
                    <p className='pass-label'>Password</p>
                    <br />
                    <input className='InputBox' type='password' name='password' required />
                </p>
                <p>
                    <button id='sub_btn' type='submit'>
                        Register
                    </button>
                </p>
            </div>
            <footer>
                <p className='FontSize'>
                    <NavLink to='/'>Back to Homepage</NavLink>.
                </p>
            </footer>
        </div>
    );
}
