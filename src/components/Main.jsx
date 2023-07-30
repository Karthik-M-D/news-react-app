import React from 'react'
import Footer from './Footer'
import '../styles/main.css'
import logo from '../assets/logo2.png'
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='home'>
                <div className='main_page_container'></div>
                <div className='main_ctnt'>
                    <div className='home_content'>
                        <img src={logo} />
                        <h4>Empowering Minds with Timely News</h4>
                    </div>
                    <div className='abt'>
                        <p>Our news website serves as your go-to platform for staying informed on the latest developments in diverse fields such as politics, economics, technology, lifestyle, and more, ensuring you never miss crucial information.</p>
                    </div>
                    <div className='sign'>
                        <p>By signing in, you gain access to a plethora of benefits tailored just for you. Enjoy exclusive content, stay up-to-date with breaking news, and explore in-depth analysis on a wide range of topics.</p>
                        <button onClick={() => { navigate('/signin') }}>Sign In</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Main
