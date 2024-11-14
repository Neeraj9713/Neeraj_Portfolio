import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function Services() {
  return (
    <div id='services' className='services flex flex-col items-start md:items-center justify-center gap-16 md:gap-20 mx-12 my-16 md:mx-20 md:my-30 '>
      <div className="services-title relative">
        <h1 className='p-0 text-5xl md:text-[80px] font-semibold'>My Services</h1>
        <img className='absolute bottom-0 right-0 z-[-1] w-32 md:w-auto' src={theme_pattern} alt="" />
      </div>
      <div className="services-container grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mb-20">
        {Services_Data.map((service , index)=>{ 
            return <div key={index} className='services-format flex flex-col justify-center gap-5 p-8 md:p-14 rounded-lg border-2 border-solid border-white transition duration-300 cursor-pointer hover:border-2 hover:border-solid hover:border-[#ff00ff] hover:background-image hover:transform hover:scale-105 hover:duration-300'>
                <h3 className='text-[28px] font-semibold'>{service.s_no}</h3>
                <h2 className='text-[38px] font-extrabold background-gradient-text'>{service.s_name}</h2>
                <p className='text-[#d4d4d4] text-lg md:text-[24px] leading-9 md:leading-10 max-w-72 md:max-w-xs'>{service.s_desc}</p>
                <div className="services-readmore flex gap-5 items-center mt-5 ">
                    <p>Read More</p>
                    <img className='w-5 md:w-auto' src={arrow_icon} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
