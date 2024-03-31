import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white h-full '>
      {/* <span className='text-white'>helo</span> */}
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div >
          <p className='text-4xl font-bold inline-block border-b-4 border-gray-500'>About</p>
        </div>
       {/* <div className='w-full h-screen'> */}
       <p className='text-xl mt-20 '>Hey there! I'm Rishikesh, a passionate MCA student currently studying at Vivekananda Global University in Jaipur, Rajasthan. I completed my BCA from Patliputra University in Patna, Bihar, and my schooling journey took place at Oxford Sr. Sec School in Muzaffarpur, Bihar.</p><br />
        <p className='text-xl mb-5'>My journey into the world of technology began with a keen interest in computers and programming. I aspire to become a proficient software developer, channeling my creativity and problem-solving skills into crafting innovative solutions.</p>
        <p className='text-xl'>Through my portfolio website, I aim to showcase my projects, skills, and experiences, while also connecting with like-minded individuals and potential collaborators in the vast landscape of software development.

</p>
       </div>
      </div>
    // </div>
  )
}
