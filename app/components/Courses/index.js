"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { PiDotOutlineFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Courses = () => {
  const courses = [
    {
      id: 1,
      image: "/assets/Courses.png",
      courseName: "Data Science 1",
      courseCate: "Acmegrade",
      address: "Mumbai, India",
      rating: "4.9",
      reviews: "345",
      courseLevel: "Begginer Level Course",
    },
    {
      id: 2,
      image: "/assets/Courses.png ",
      courseName: "Data Science 2",
      courseCate: "Acmegrade",
      address: "Mumbai, India",
      rating: "4.9",
      reviews: "345",
      courseLevel: "Begginer Level Course",
    },
    {
      id: 3,
      image: "/assets/Courses.png",
      courseName: "Data Science 3",
      courseCate: "Acmegrade",
      address: "Mumbai,India",
      rating: "4.9",
      reviews: "345",
      courseLevel: "Begginer Level Course",
    },
    {
      id: 4,
      image: "/assets/Courses.png",
      courseName: "Data Science 4",
      courseCate: "Acmegrade",
      address: "Mumbai,India",
      rating: "4.9",
      reviews: "345",
      courseLevel: "Begginer Level Course",
    },
  ];

  const goPrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const goNext = () => {
    if (swiper) swiper.slideNext();
  };
  let swiper = null;

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="max-w-widthmax w-full mx-auto my-16 px-2">
      {/* heading */}
      <h1 className="text-center font-extrabold text-2xl md:text-4xl text-black mb-12">
        Courses We Offer
      </h1>
      <div className=" flex justify-between items-center gap-4 w-full">
        {/* prev button */}
        <div
          onClick={goPrev}
          className="w-7 h-7 bg-hero_bg text-white	hidden sm:flex justify-center items-center rounded cursor-pointer"
        >
          <MdKeyboardArrowLeft className="text-2xl" />
        </div>
        {/* slider */}
        <Swiper
          onSwiper={(swiperInstance) => (swiper = swiperInstance)}
          centeredSlides={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={breakpoints}
          spaceBetween={50}
          slidesPerView={3}
        >
          {courses.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="border flex-1 border-borderCourse rounded bg-white  flex flex-col items-start justify-start gap-4 ">
                {/* images & courses */}
                <div className="flex justify-start items-center p-4 gap-3 w-full">
                  <Image
                    src={item.image}
                    width={53}
                    height={48}
                    alt={item.title}
                    className="rounded"
                  />
                  <div>
                    <h3 className="text-base font-medium text-black">
                      {item.courseName}
                    </h3>
                    <h3 className="text-base font-normal text-darkgray">
                      {item.courseCate}
                    </h3>
                  </div>
                </div>
                {/* address & rating */}
                <div className="flex justify-between w-full gap-2 items-center px-4 flex-wrap">
                  <h3 className="flex items-center text-darkgray text-base font-normal gap-2">
                    <CiLocationOn className="text-darkgray w-5 h-5" />
                    {item.address}
                  </h3>
                  <div className="flex gap-2">
                    <p className="flex items-center text-base text-green">
                      <AiFillStar className="w-5 h-5" />
                      {item.rating}
                    </p>
                    <p className="text-darkgray">({item.reviews} Reviews)</p>
                  </div>
                </div>
                {/* courses level */}
                <div className="flex flex-wrap items-center justify-between w-full gap-2 p-3 border-t border-borderCourse">
                  <div className="flex gap-1 items-center">
                    <PiDotOutlineFill className="text-hero_bg text-lg" />
                    <p className="text-darkgray text-base font-normal">
                      {item.courseLevel}
                    </p>
                  </div>
                  <div className="text-green text-base font-normal">
                    <Link href="/">View Details</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

          {/* nextButton */}
          <div
            onClick={goNext}
            className="w-7 h-7 bg-hero_bg text-white hidden sm:flex justify-center items-center rounded cursor-pointer"
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </div>

      </div>
        {/* bottom btn */}
        <div className='flex justify-center items-center gap-2 mt-5'>
       <button className='rounded w-5 h-2 bg-hover_bg ' ></button>
         <button className='bg-hero_bg rounded w-5 h-2 hover:bg-hover_bg' ></button>
         <button className=' rounded w-5 h-2 bg-hover_bg' ></button>
    </div>
    </div>
  );
};

export default Courses;
