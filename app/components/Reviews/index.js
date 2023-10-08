"use client";
import React  from 'react';
import {AiFillStar} from "react-icons/ai"
import Image from 'next/image'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = () => {
    const reviews = [
        {
          id: 1,
          image: "/assets/BrowsReviews1.svg",
          title: "James Williams",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        },
        {
            id: 2,
            image: "/assets/BrowsReviews1.svg",
            title: "James Williams",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },{
            id: 3,
            image: "/assets/BrowsReviews1.svg",
            title: "James Williams",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },{
            id: 4,
            image: "/assets/BrowsReviews1.svg",
            title: "James Williams",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },{
            id: 5,
            image: "/assets/BrowsReviews1.svg",
            title: "James Williams",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },{
            id: 6,
            image: "/assets/BrowsReviews1.svg",
            title: "James Williams",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },{
            id: 7,
            image: "/assets/BrowsReviews1.svg",
            title: "James Williams",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },{
            id: 8,
            image: "/assets/BrowsReviews1.svg",
            title: "James Williams",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          },
      ];

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
    <>
    <div className='max-w-widthmax w-full mx-auto my-16 md:px-4 px-2'>
        <h1 className="text-center font-extrabold text-2xl md:text-4xl text-black mb-12">Brows Reviews</h1>

        <div className="mb-6 ">
        <Swiper
          onSwiper={(swiperInstance) => (swiper = swiperInstance)}
          centeredSlides={false}
          breakpoints={breakpoints}
          spaceBetween={50}
          slidesPerView={3}
          slidesPerColumn={3}

        >
        {reviews.map((item) => (
          <SwiperSlide
            key={item.id}
            className="border border-reviews_border rounded-lg bg-white p-4 flex flex-col items-center justify-start gap-4 "
          >
           <div className='flex justify-start	items-center gap-3 w-full'>
           <Image
              src={item.image}
              width={48}
              height={48}
              alt={item.title}
              className='rounded-full'
            />
            <div className='flex gap-1 items-start justify-start flex-col'>
            <h3 className="text-base font-medium text-black">{item.title}</h3>
            <ul className='flex gap-1 '>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
            </ul>
            </div>
           </div>
           <div>
            <p className='text-darkgray text-sm'>{item.desc}</p>
           </div>
          </SwiperSlide>
        ))}
        </Swiper>
        </div>

        <Swiper
          onSwiper={(swiperInstance) => (swiper = swiperInstance)}
          centeredSlides={false}
          breakpoints={breakpoints}
          spaceBetween={50}
          slidesPerView={3}
          slidesPerColumn={3}

        >
        {reviews.map((item) => (
          <SwiperSlide
            key={item.id}
            className="border border-reviews_border rounded-lg bg-white p-4 flex flex-col items-center justify-start gap-4 "
          >
           <div className='flex justify-start	items-center gap-3 w-full'>
           <Image
              src={item.image}
              width={48}
              height={48}
              alt={item.title}
              className='rounded-full'
            />
            <div className='flex gap-1 items-start justify-start flex-col'>
            <h3 className="text-base font-medium text-black">{item.title}</h3>
            <ul className='flex gap-1 '>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
              <li><AiFillStar className='text-green text-lg'/></li>
            </ul>
            </div>
           </div>
           <div>
            <p className='text-darkgray text-sm'>{item.desc}</p>
           </div>
          </SwiperSlide>
        ))}
        </Swiper>
        
    </div>
    </>
  )
}

export default Reviews;