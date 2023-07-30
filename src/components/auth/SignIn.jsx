import React, { useState } from 'react'
import '../../styles/signup.css'
import Footer from '../Footer';
import '../../firebase.js'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const auth = getAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/headlines');
                alert("Successfully Signed In! :)")
            })
            .catch((error) => {
                alert("Wrong username or password")
            });
    }

    return (
        <>
            <div className='signup'>
                <div className='signup_container'>
                    <h1 className='acc'>Sign In to your Account</h1>
                    <div className='signin_box'>
                        <div>
                        </div>
                        <div className='signin_form'>
                            <form onSubmit={signIn}>
                                <label>Email address</label>
                                <input type='email' placeholder='Enter your E-Mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Password</label>
                                <input type='password' placeholder='Enter your password (Min 6 characters)' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className='sign_btns'>
                                    <div>
                                        <button type='submit'>Sign In</button>
                                    </div>
                                    <div>
                                        <p className='alrdy'>Don't Have An Account?</p>
                                        <div className='login_go'>
                                            <button onClick={() => { navigate('/signup') }} className='log_btn'>Sign Up Here</button>
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

export default SignIn
