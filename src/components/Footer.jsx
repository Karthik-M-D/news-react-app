import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import '../styles/footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='ftr_icons'>
        <a href='https://www.facebook.com' target='_blank'><AiFillFacebook /></a>
        <a href='https://www.facebook.com' target='_blank'><AiFillInstagram /></a>
        <a href='https://www.facebook.com' target='_blank'><AiOutlineTwitter /></a>
        <a href='https://www.facebook.com' target='_blank'><AiFillLinkedin /></a>
        <a href='https://www.facebook.com' target='_blank'><AiFillGithub /></a>
      </div>
      <div className='ftr-content'>
        <h4>&#169;Karthik M D | All rights reserved</h4>
      </div>
    </div>
  )
}

export default Footer
