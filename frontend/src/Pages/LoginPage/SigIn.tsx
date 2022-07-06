import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'

const SignIn = () => {
    return (
        <div className='text-center m-5-auto'>
            <h1 className='FontSize'>Sign in to us</h1>
            <div className='form'>
                <p>
                    <label>Username or email address</label>
                    <br />
                    <input className='InputBox' type='text' name='first_name' required />
                </p>
                <div>
                    <p className='pass-label'> Password</p>
                    <NavLink to='/forget-password'>
                        <span className='right-label'>Forget password?</span>
                    </NavLink>

                    <input className='InputBox' type='password' name='password' required />
                </div>
                <p>
                    <button id='sub_btn' type='submit'>
                        SignIn
                    </button>
                </p>
            </div>
            <div className='footer'>
                <p className='FontSize' >
                    First time? <NavLink to='/SignUp'>Create an account</NavLink>.
                </p>
                <p className='FontSize'>
                    <NavLink to='/'>Back to Homepage</NavLink>.
                </p>
            </div>
        </div>
    )
}

export default SignIn