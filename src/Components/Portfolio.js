import React,{useEffect} from "react";
import Desktop from "../assets/desktop.jpeg"
import Bookly from "../assets/bookly.png"
import Onlinexam from "../assets/onlinexam.png"
import tailwindreact from "../assets/tailwindreact.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { Link } from "react-scroll";
const portfolios = [
  {
    id: 1,
    src:Bookly,
    des:'MERN Application'
  },
  // {
  //   id: 2,
  //   src: "../assets/photos/img3.png",
  // },
  {
    id: 3,
    src: Onlinexam,
    des:'Web Application(python)'
  },
  {
    id: 4,
    src: tailwindreact,
    des:'Web Application (React & Tailwind)'
  },
  {
    id: 5,
    src:  Desktop ,
    des:'Desktop Application (Java & SQL)'
  },
  // {
  //   id: 6,
  //   src: "../assets/photos/img1.png",
  // }
];

export default function Portfolio() {
  useEffect(()=> {
    AOS.init({duration: 1000})
})
  return (
    <div
      name="portfolio" 
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-10 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 " data-aos="fade-in" data-aos-duration="800">
            Portfolio
          </p>
          <p className="py-6" data-aos="fade-in" data-aos-duration="1000">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,des }) => (
            <div key={id} data-aos="fade-in" data-aos-duration="1500" className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center p-2">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to="">Demo</Link>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
                <p>{des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
