import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Contact() {
  
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  return (
    <div name='contact' className=' bg-gradient-to-b from-black to-gray-800 p-4 text-white '>
      <div className='max-w-screen-lg mx-auto  '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500' data-aos="fade-in" data-aos-duration="800">Contact</p>
            <p className='py-6' data-aos="fade-in" data-aos-duration="1000">submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" data-aos="slide-up" data-aos-duration="500" name="name" id='nam' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'  required/>
                
                <input type="email" data-aos="slide-up" data-aos-duration="700" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' id='mail'  required/>
                
                <textarea name="message" data-aos="fade-in" data-aos-duration="900" id='msg'  rows="10" required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message'></textarea>


                <button  className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300' ><b>Let's talk</b></button>
            </form>
        </div>
      </div> 
    </div>
  )
}
//     
