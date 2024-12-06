import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";



function Services() {
    const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  return (
    
    <div data-scroll data-scroll-section data-scroll-speed = "-.1"  id="services" className=" sm:w-full w-[100%] h-[80vh]  pb-20 sm:-mt-20 -mt-24 bg-[#a9b448] rounded-tl-3xl rounded-tr-3xl text-black">
        <h1 className="capitalize text-black font-medium sm:text-[3vw]  text-[8vw] text-left mb-4 p-10 leading-none">Here's What we offer:-</h1>
      <h1 className="sm:text-[1.4vw] text-[5vw] sm:leading-none leading-5 px-10 tracking-tighter">
        Have a look at the services we provide and do connect if you need one!!
      </h1>

      <div className="flex gap-2 mt-14 p-2 -mb-5 justify-end">
        <button
          onClick={handlePrev}
          className="border-2 border-zinc-800 py-1 px-1 rounded-full"
        >
         <HiArrowSmLeft />
        </button>
        <button
          onClick={handleNext}
          className="border-2 border-zinc-800 py-1 px-1 rounded-full"
        >
         <HiArrowSmRight />
        </button>
      </div>

      <div className="swiper">
      <Swiper
      spaceBetween={20}
      breakpoints={{
        // Tailwind breakpoints can be mapped
        640: {
          slidesPerView: 2, // For screens >= 640px
        },
        768: {
          slidesPerView: 3, // For screens >= 768px
        },
        1024: {
          slidesPerView: 4, // For screens >= 1024px
        },
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
        
      <SwiperSlide className="text-white min-h-[30vh] border-2 mt-8 bg-zinc-800 rounded-xl relative"> <a href="" className="capitalize absolute bottom-0 right-0 m-4 border-2 rounded-3xl px-2 py-1 ">recent work</a></SwiperSlide>
      <SwiperSlide className="text-white min-h-[30vh] border-2 mt-8 bg-zinc-800 rounded-xl  "><a href="" className="capitalize absolute bottom-0 right-0 m-4 border-2 rounded-3xl px-2 py-1 ">recent work</a></SwiperSlide>
      <SwiperSlide className="text-white min-h-[30vh] border-2 mt-8 bg-zinc-800 rounded-xl  "><a href="" className="capitalize absolute bottom-0 right-0 m-4 border-2 rounded-3xl px-2 py-1 ">recent work</a></SwiperSlide>
      <SwiperSlide className="text-white min-h-[30vh] border-2 mt-8 bg-zinc-800 rounded-xl  "><a href="" className="capitalize absolute bottom-0 right-0 m-4 border-2 rounded-3xl px-2 py-1 ">recent work</a></SwiperSlide>
      <SwiperSlide className="text-white min-h-[30vh] border-2 mt-8 bg-zinc-800 rounded-xl  "><a href="" className="capitalize absolute bottom-0 right-0 m-4 border-2 rounded-3xl px-2 py-1 ">recent work</a></SwiperSlide>
      <SwiperSlide className="text-white min-h-[30vh] border-2 mt-8 bg-zinc-800 rounded-xl  "><a href="" className="capitalize absolute bottom-0 right-0 m-4 border-2 rounded-3xl px-2 py-1 ">recent work</a></SwiperSlide>
      <SwiperSlide className="text-white min-h-[30vh] border-2 mt-8 bg-zinc-800 rounded-xl  "><a href="" className="capitalize absolute bottom-0 right-0 m-4 border-2 rounded-3xl px-2 py-1 ">recent work</a></SwiperSlide>
    </Swiper>
    </div>
      
    </div>
  );
}

export default Services;
