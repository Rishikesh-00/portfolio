import React from 'react'
export default function Experience() {
  // const Experience=()=>{
    const techs=[
      {
        id:1,
        src:'../assets/html.png',
        title:'HTML',
        shadow:'shadow-orange-500'
      },
      {
        id:2,
        src:'../assets/css.png',
        title:'CSS',
        shadow:'shadow-blue-500'
      },
      {
        id:3,
        src:'../assets/javascript.png',
        title:'JavaScript',
        shadow:'shadow-yellow-500'
      },
      {
        id:4,
        src:'../assets/react.png',
        title:'React',
        shadow:'shadow-blue-600'
      },
      {
        id:5,
        src:'../assets/tailwind.png',
        title:'Tailwind',
        shadow:'shadow-sky-400'
      },
      {
        id:6,
        src:'../assets/mysql.png',
        title:'MySQL',
        shadow:'shadow-blue-400'
      },
      {
        id:7,
        src:'../assets/mongo.png',
        title:'MongoDB',
        shadow:'shadow-green-500'
      },
      {
        id:8,
        src:'../assets/github.jpeg',
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
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline-block'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  py-8 px-12 sm:px-0'>
          {
            techs.map(({id,src,title,shadow})=>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${shadow}`}>
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
