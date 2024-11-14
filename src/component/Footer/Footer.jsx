import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from "../../assets/user_icon.svg"

function Footer() {
  return (
    <div id='footer' className='footer mx-[50px] my-16 md:my-[170px] flex flex-col gap-[30px] '>
        <div className='footer-top flex justify-between flex-col md:flex-row'>
            <div className="footer-top-left ">
            <div className="about-title relative">
                <h1 className='p-0 text-3xl font-semibold'>NeeRaj</h1> 
                <img className='absolute w-20 md:24 md:w-16 bottom-0 left-9 z-[-1]' src={theme_pattern} alt="" />
            </div>
                <p className='text-xl max-w-sm'>I am a Full Stack developer from , India with 1 year experience</p>
            </div>
            <div className="footer-top-right flex items-center gap-8">
                <div className="footer-email-input flex gap-7 p-4 rounded-[50px] bg-[#32323b] pr-20 hover:border-2 hover:border-solid hover:border-white">
                    <img src={user_icon} alt="" />
                    <input className='outline-none border-none bg-transparent text-[#a0a0a0] font-[Outfit] text-lg' type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-suscribe text-xl p-4 rounded-[40px] background-gradient cursor-pointer transition duration-300 hover:transform hover:scale-110 hover:transition hover:scale-110                                         
                ">Subscribe</div>
            </div>
        </div>
        <div className="footer-bottom flex flex-col-reverse md:flex-row text-lg  mb-12 mr-auto">
            <p className='footer-bottom-left mr-10'>@ 2024 Neeraj kalawat. All rights </p>
            <div className="footer-bottom-right flex gap-[50px] margin-bottom ">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
