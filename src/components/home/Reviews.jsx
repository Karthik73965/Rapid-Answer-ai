import React, { useRef, useState } from 'react';
import Cards from './Cards';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


export default function Reviews() {
  return (
    <>
      <h3 className='text-4xl font-bold text-slate-800 flex justify-center align- mt-10'>What Students Say our Product </h3>
      <p className='text-gray-700 font-semibold flex justify-center align-middle m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fugit explicabo facere!</p>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true} // Enable looping
        autoplay={{
          delay: 0, // Delay between transitions (in ms). Adjust as needed.
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={5000} // Adjust transition speed for smoother animations (in ms)
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0   ,
          },
        }}
        modules={[Autoplay]} // Only include Autoplay module here
        className="mySwiper "
       
        
      >
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true} // Enable looping
        autoplay={{
          delay: 0, // Delay between transitions (in ms). Adjust as needed.
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        speed={5000} // Adjust transition speed for smoother animations (in ms)
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0   ,
          },
        }}
        modules={[Autoplay]} // Only include Autoplay module here
        className="mySwiper "
       
        
      >
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
        <SwiperSlide ><Cards/></SwiperSlide>
      </Swiper>
    </>
  )
}
