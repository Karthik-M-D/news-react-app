import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../assets/logo2.png'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();

    const [active, setActive] = useState("home");

    const [showNavbar, setShowNavbar] = useState(false)
    const [showx, setShowx] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
        setShowx(!showx)
    }

    const auth = getAuth();

    const out = () => {
        signOut(auth).then(() => {
            // setName('')
            navigate('/signin');
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='component'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className={`links ${showNavbar && 'active'}`}>
                <Link className={`link_class ${active === 'headline' ? "headline" : ""}`} onClick={() => { setActive("headline") }} to='/headlines' > Headlines</Link>
                <Link className={`link_class ${active === 'search' ? "search" : ""}`} onClick={() => { setActive("search") }} to='/search'>Search News</Link>
                <Link className={`link_class ${active === 'category' ? "category" : ""}`} onClick={() => { setActive("category") }} to='/categories'>Categories</Link>
                <Link className={`link_class ${active === 'weather' ? "weather" : ""}`} onClick={() => { setActive("weather") }} to='/weather'>Your Weather</Link>
                <button className='logt' onClick={out}>Logout</button>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                {
                    showx ? <AiOutlineClose className='icon' /> : <FaBars className='icon' />
                }
            </div>
        </div >
    )
}

export default Header
