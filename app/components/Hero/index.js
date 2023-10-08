import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="h-[650px] pt-20 bg-cover relative overflow-hidden bg-bottom w-full bg-no-repeat bg-[url('/assets/hero.png')]">
      <div className="absolute w-full h-full bg-hero_bg bg-opacity-90 flex justify-center items-center">
        <div className="w-full max-w-widthmax m-auto pl-4 flex justify-between items-center gap-4">
          <div>
            <h1 className="text-white font-bold text-3xl	sm:text-4xl	">
              To be the best, <br />
              <span className="text-lightgreen"> Choose the best...</span>
            </h1>
            <p className="text-white text-sm sm:text-lg font-medium	">
              Company reviews, Course review, Internship
            </p>
            {/* input search by course */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6">
              {/* input */}
              <div className="flex items-center gap-2 bg-white p-4 rounded">
                <BiSearch className="text-darkgray w-5 h-5 " />
                <input
                  type="text"
                  placeholder="Search by course"
                  className="outline-none  sm:border-r border-border_r"
                />
                <select className="outline-none text-black text-base font-normal pr-8	hidden sm:block">
                  <option>Course</option>
                  <option>Course</option>
                  <option>Course</option>
                </select>
              </div>
              {/* button */}
              <button className="bg-lightgreen text-black rounded py-3 px-6 font-medium	text-base cursor-pointer">
                Search
              </button>
            </div>
          </div>
          <Image
            src="/assets/hero_img.png"
            width={946}
            height={631}
            alt="img"
            className="md:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
