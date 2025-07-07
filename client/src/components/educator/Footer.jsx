import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center w-full px-8 border-t border-gray-300 py-4 gap-4 md:gap-0'>

      {/* Left Section */}
      <div className='flex items-center gap-4'>
        <img className='hidden md:block w-20' src={assets.logo} alt="logo" />
        <div className='hidden md:block h-6 w-px bg-gray-400'></div>
        <p className='text-xs md:text-sm text-gray-500'>
          Copyright 2025 © GreatStack. All Rights Reserved.
        </p>
      </div>

      {/* Social Icons */}
      <div className='flex items-center gap-4'>
        <a href="#"><img src={assets.facebook_icon} alt="facebook_icon" className='w-5 h-5' /></a>
        <a href="#"><img src={assets.twitter_icon} alt="twitter_icon" className='w-5 h-5' /></a>
        <a href="#"><img src={assets.instagram_icon} alt="instagram_icon" className='w-5 h-5' /></a>
      </div>
      
    </footer>
  )
}

export default Footer
