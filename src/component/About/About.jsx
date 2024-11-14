import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/NeerajProfile1.jpg'

function About() {
  return (
    <div id='about' className='about flex items-start md:items-center flex-col justify-center gap-20 mx-12 my-16 md:mx-20 md:my-36'>
        <div className="about-title relative">
            <h1 className='p-0 text-5xl md:text-[80px] font-semibold'>About Me</h1> 
            <img className='absolute w-32 md:w-auto bottom-0 right-0 z-[-1]' src={theme_pattern} alt="" />
        </div>
      <div className="about-sections flex flex-col md:flex-row gap-20">
        <div className="about-left hidden md:block ">
            <img className='w-[600px] rounded-full mt-2' src={profile_img} alt="" />
        </div>
         <div className="about-right flex flex-col gap-12">
            <div className="about-para flex flex-col gap-5 text-lg md:text-[24px] font-medium leading-8 md:leading-none ">
                <p>Hello! I'm Neeraj Kalawat, a dedicated web developer with a passion for crafting exceptional web experiences.</p>
                <p>With a solid background in front-end and back-end development, I specialize in building dynamic, user-friendly web applications using a diverse set of technologies.</p>
            </div>
            <div className="about-skills flex flex-col">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Node JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Express Js</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>MongoDB</p><hr style={{width:"75%"}}/></div>
                <div className="about-skill"><p>S3 Bucket</p><hr style={{width:"45%"}}/></div>
            </div>
         </div>
      </div>
        <div className="about-achievements flex w-full justify-between md:justify-around mb-20">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>4+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>HAPPY</p>
            </div>
        </div>
    </div>
  )
}

export default About
