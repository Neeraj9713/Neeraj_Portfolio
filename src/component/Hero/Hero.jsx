import React from 'react'
import profile_img from '../../assets/NeerajProfile1.jpg';
import './Hero.css';

function Hero() {
  return (
    <div className='hero flex items-center flex-col gap-8'>
      <img className='mt-16 md:mt-20 w-80 rounded-full' src={profile_img} alt="" />
      <h1 className='text-center w-[90%] md:w-[70%] text-[50px] md:text-[70px] font-semibold'><span className='gradient-text'>I'm Neeraj Kalawat,</span> Full Stack developer from Bhopal, India.</h1>
      <p className='w-[60%] md:w-[50%] text-center text-[18px] md:text-[24px] leading-8 md:leading-10'> A passionate web developer with a strong foundation in front-end and back-end technologies</p>
      <div className='hero-action text-lg flex items-center gap-4 md:gap-6 font-medium mb-12'>
        <div className="hero-connect p-5 md:p-4 rounded-[50px] background-gradient cursor-pointer hover:border-2 border-[#fff]">Connect With Me</div>
        <div className="hero-resume p-4 md:p-3 cursor-pointer rounded-[40px] md:rounded-[50px] border-2 border-white hover:border-indigo-600">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
