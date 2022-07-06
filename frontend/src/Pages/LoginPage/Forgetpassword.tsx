import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'

export default function ForgetPasswordPage() {
    return (
        <div className='text-center m-5-auto'>
            <h1 className='FontSize'>Reset your password</h1>
            <h1 className='FontSize'>Enter your email address and we will send you a new password</h1>
            <div className='form'>
                <p>
                    <p className='pass-label'>Email address</p>
                    <br />
                    <input className='InputBox' type='email' name='email' required />
                </p>
                <p>
                    <button id='sub_btn' type='submit'>
                        Send password reset email
                    </button>
                </p>
            </div>
            <footer>
                <p className='FontSize'>
                    First time? <NavLink to='/SignUp'>Create an account</NavLink>.
                </p>
                <p className='FontSize'>
                    <NavLink to='/'>Back to Homepage</NavLink>.
                </p>
            </footer>
        </div>
    );
}
