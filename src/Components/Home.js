import React,{useEffect} from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Myimage from "../assets/pro.jpeg";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Resume from "../assets/Rishikesh_resume.pdf"
import { GoDownload } from "react-icons/go";
// import hero from ".//assets/hero.jpeg"
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    
   <div name="home" className='h-screen w-full bg-gradient-to-b from-black  via-black to-gray-800 '>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white' data-aos="fade-out" data-aos-duration="1500" > I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md' data-aos="slide-up" data-aos-duration="500" >
          Hey, my name is Rishikesh. Currently, I am pursuing MCA. I love to work on applications using technologies like React, Tailwind CSS, JavaScript, and MySQL.
          </p>
          <div className='flex'>
            <Link to='portfolio' duration={500} smooth className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor- group cursor-pointer' data-aos="slide-up" data-aos-duration="500" >Portfolio  <span className='group-hover:rotate-90 duration-300 ' ><MdKeyboardArrowRight size={25} className='ml-1' /></span></Link>
            

            <div class="m-3">
            <a href={Resume} download="resume.pdf" class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">Download Resume</span>
              <GoDownload size={25} />
            </a>
          </div>

          </div>
        </div>
        <div><img src={Myimage} alt="profile" className=' h-30 rounded-2xl mx-auto w-1/3 md:w-80'/></div>
      </div>
   </div>
  )
}
