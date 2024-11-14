import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function MyWork() {
  return (
    <div id='work' className='mywork flex flex-col items-start md:items-center justify-center gap-12 md:gap-20 mx-12 my-16 md:mx-20 md:my-40'>
      <div className="relative mywork-title px-0 py-0 text-[80px] font-semibold">
        <h1 className='p-0 text-5xl md:text-7xl font-semibold'>My latest work</h1>
        <img className='absolute bottom-0 right-0 z-[-1] w-32 md:w-auto mr-5 mr-auto' src={theme_pattern} alt="" />
      </div>
      <div className='mywork-container grid grid-cols-2 md:grid-cols-3 gap-7 md:gap-10'>
        {mywork_data.map((work,index)=>{
            return <img className='box-border w-full md:w-[419px] h-full md:h-[280px] duration-300 cursor-pointer hover:transform hover:scale-110 hover:border-4 hover:border-purple-500 hover:rounded-lg hover:transition hover:duration-300' key={index} src={work.w_img} alt=''/>
        })}
      </div>
      <div className="mywork-showmore flex items-center rounded-[50px] border-2 border-solid border-white p-5 text-lg md:text-[22px] font-medium mx-12 my-auto md:mb-20 gap-[15px] transition-all duration-500 cursor-pointer hover:gap-[30px]">
        <p className=''>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
