import React from "react";

const portfolios = [
  {
    id: 1,
    src: "../assets/photos/img2.png",
  },
  {
    id: 2,
    src: "../assets/photos/img3.png",
  },
  {
    id: 3,
    src: "../assets/photos/img4.png",
  },
  {
    id: 4,
    src: "../assets/photos/img5.png",
  },
  {
    id: 5,
    src: "../assets/photos/img6.png",
  },
  {
    id: 6,
    src: "../assets/photos/img1.png",
  }
];

export default function Portfolio() {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
