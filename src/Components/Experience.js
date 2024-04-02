import React,{useEffect} from 'react';
import Css from '../assets/css.png'
import Js from '../assets/js.png'
import Reactlogo from '../assets/react.png'
import Html from '../assets/html.png'
import Mysql from '../assets/mysql.png'
import Jquerry from '../assets/jquerry.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })
  // const Experience=()=>{
    const techs=[
      {
        id:1,
        src:Html,
        title:'HTML',
        shadow:'shadow-orange-500'
      },
      {
        id:2,
        src:Css,
        title:'CSS',
        shadow:'shadow-blue-500'
      },
      {
        id:3,
        src:Js,
        title:'JavaScript',
        shadow:'shadow-yellow-500'
      },
      {
        id:7,
        src:Jquerry,
        title:'JQuerry',
        shadow:'shadow-green-500'
      },
      {
        id:4,
        src:Reactlogo,
        title:'React',
        shadow:'shadow-blue-600'
      },
      
      {
        id:5,
        src:Tailwind,
        title:'Tailwind',
        shadow:'shadow-sky-400'
      },
      {
        id:6,
        src:Mysql,
        title:'MySQL',
        shadow:'shadow-blue-400'
      },
      
      {
        id:8,
        src:Github,
        title:'GitHub',
        shadow:'shadow-gray-400'
      }
    ]
  // }
  
  // <img src="" alt="" />
  return (
    <>
    {/* <div>hh</div> */}
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline-block' data-aos="fade-in" data-aos-duration="800">Experience</p>
          <p className='py-6' data-aos="fade-in" data-aos-duration="1000">These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  py-8 px-12 sm:px-0'>
          {
            techs.map(({id,src,title,shadow})=>(
              <div key={id}  data-aos="zoom-in" data-aos-duration="500" className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${shadow}`}>
            <img src={src} alt=""  className='w-20 mx-auto'/>
            <p className='mt-4 '>{title}</p>
          </div>

            ))
          }

          
        </div>
      </div>
    </div>
    </>
  )
}
