import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6446a907-2e16-4904-b90a-7a4e3c0ce1dd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target[0].value="";
      event.target[1].value="";
      event.target[2].value="";
    }
  };
  return (
    <div id='contact' className='contact flex justify-center items-start md:items-center flex-col gap-12 md:gap-20 mx-12 my-16 md:mx-20 md:my-40'>
        <div className="contact-title relative">
            <h1 className='p-0 text-5xl md:text-7xl font-semibold'>Get in touch</h1>
            <img className='absolute bottom-0 right-0 z-[-1] w-32 md:w-auto mr-5 md:mr-auto' src={theme_pattern} alt="" />
        </div>
        <div className="contact-section flex flex-col md:flex-row gap-[150px]">
          <div className="contact-left flex flex-col gap-7">
            <h1 className='text-5xl md:text-[80px] font-bold background-gradient-text'>Let's talk</h1>
            <p className='max-w-[550px] text-[#d8d8d8] text-lg md:text-[20px] leading-8'>I'm currently avaliable to take on new projects, so feel free </p>
            <div className="contact-details flex flex-col gap-7 text-[#d8d8d8] text-[22px]">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /><p>neerajkalawat018@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /><p>9713471304</p>
                </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" /><p>Bhopal, India</p>
              </div>
            </div>
          </div>
        <form onSubmit={onSubmit} className="contact-right flex flex-col gap-7 text-xl">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write Your message here</label>
          <textarea className='w-[95%] md:w-[650px] border-none p-6 rounded bg-[#32323c] text-[#a0a0a0] font-[Outfit] text-[20px]' name="message" rows="8" placeholder='Enter you message' />
          <button type='submit' className='contact-submit w-40 border-none text-white rounded-[50px] text-xl md:text-[22px] p-3 md:p-3 mb-[50px] background-gradient cursor-pointer transition duration-300 hover:transform hover:scale-110 hover:transition hover:duration-300'>Submit now</button>
        </form>
        </div>
    </div>
  )
}

export default Contact
