import React from 'react'

export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      {/* <span className='text-white'>helo</span> */}
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div >
          <p className='text-4xl font-bold inline-block border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit temporibus assumenda necessitatibus fugit eligendi minima sequi animi a explicabo. Quod fugiat aliquam, repudiandae ratione eius et id eligendi provident. Minus dolorem aperiam fuga architecto quam dolor eaque, error nesciunt? Harum similique doloribus nemo vel culpa. Necessitatibus esse et quo maiores?</p><br />
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur quas corrupti architecto vel quibusdam tenetur odio aliquid est rem, repellat itaque assumenda eveniet veritatis voluptatibus reiciendis fugiat, nihil, quasi fuga voluptatem soluta illo repudiandae facere eaque. Minima non, vel, ipsum adipisci cupiditate nemo rem atque facere, repellat voluptates ipsa.</p>
      </div>
    </div>
  )
}
