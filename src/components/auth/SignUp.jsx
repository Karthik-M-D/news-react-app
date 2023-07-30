import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/signup.css'
import Footer from '../Footer';
import '../../firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Successfully created an Account! Now Sign In :)");
                console.log(userCredential)
            })
            .catch((error) => {
                alert(error)
            });
        navigate('/signin')
    }

    const navigate = useNavigate();

    return (
        <>
            <div className='signup'>
                <div className='signup_container'>
                    <h1 className='acc'>Sign up here</h1>
                    <div className='signin_box'>
                        <div>
                            <h4>Create your new Account</h4>
                        </div>
                        <div className='signin_form'>
                            <form onSubmit={signUp}>
                                <label>Email address</label>
                                <input type='email' placeholder='Enter your E-Mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Password</label>
                                <input type='password' placeholder='Enter your password (Min 6 characters)' value={password} onChange={(e) => setPassword(e.target.value)} />

                                <div className='sign_btns'>
                                    <div>
                                        <button type='submit'>Sign Up</button>
                                    </div>
                                    <div>
                                        <p className='alrdy'>Already Have An Account?</p>
                                        <div className='login_go'>
                                            <p>Login</p>
                                            <button onClick={() => { navigate('/signin') }} className='log_btn'>Log In Here</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp
