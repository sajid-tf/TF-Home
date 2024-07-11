"use client"
import { testimonialData } from '@/utils/mock/TestimonialsData/TestimonialsData';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Link from 'next/link';

const TestimonialSection = ({ variant = 'primary', data = testimonialData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  let adjustedIndex;
  switch (activeIndex) {
    case 0:
      adjustedIndex = 2;
      break;
    case 1:
      adjustedIndex = 1;
      break;
    case 2:
      adjustedIndex = 0;
      break;
    case 3:
      adjustedIndex = 4;
      break;
    case 4:
      adjustedIndex = 3;
      break;
    default:
      adjustedIndex = 0;
  }
  const testimonial = data[adjustedIndex];

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
    setAnimation(true);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % data.length);
    setAnimation(true);
  };

  const onAnimationEnd = () => {
    setAnimation(false);
  };
  const text = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    red: 'text-red',
    redThree: 'text-redThree',
    yellow: 'text-yellow',
    yellowTwo: 'text-yellowTwo',
    purpleTwo: 'text-purpleTwo',
    skyThree: 'text-skyThree',
    green: 'text-green',
    yellowThree: 'text-yellowThree',
    secondaryTwo: 'text-secondaryTwo',
    skyFour: 'text-skyFour',
  }
  const onHover = {
    primary: 'hover:bg-primary',
    secondary: 'hover:bg-secondary',
    red: 'hover:bg-red',
    redThree: 'hover:bg-redThree',
    yellow: 'hover:bg-yellow',
    yellowTwo: 'hover:bg-yellowTwo',
    purpleTwo: 'hover:bg-purpleTwo',
    skyThree: 'hover:bg-skyThree',
    green: 'hover:bg-green',
    yellowThree: 'hover:bg-yellowThree',
    secondaryTwo: 'hover:bg-secondaryTwo',
    skyFour: 'hover:bg-skyFour',
  }
  const bg = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    red: 'bg-red',
    redThree: 'bg-redThree',
    yellow: 'bg-yellow',
    yellowTwo: 'bg-yellowTwo',
    purpleTwo: 'bg-purpleTwo',
    skyThree: 'bg-skyThree',
    green: 'bg-green',
    yellowThree: 'bg-yellowThree',
    secondaryTwo: 'bg-secondaryTwo',
    skyFour: 'bg-skyFour',
  }
  const border = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    red: 'border-red',
    redThree: 'border-redThree',
    yellow: 'border-yellow',
    yellowTwo: 'border-yellowTwo',
    purpleTwo: 'border-purpleTwo',
    skyThree: 'border-skyThree',
    green: 'border-green',
    yellowThree: 'border-yellowThree',
    secondaryTwo: 'border-secondaryTwo',
    skyFour: 'border-skyFour',
  }
  return (
    <div className='w-[360px] lg:w-[1200px] min-h-[656px] lg:min-h-[556px] mx-auto'>
      {/* <h5 className={`text-lg uppercase ${text[variant]} font-tertiary`}>Testimonial</h5> */}
      <h3 className='text-lightBGText text-4xl font-tertiary font-bold'>Client Stories</h3>
      <div className='w-full h-fit flex flex-col items-center justify-center gap-8 lg:gap-16 pb-6 mt-6 bg-strongWhite overflow-hidden'>
        <div className='flex flex-col lg:flex-row gap-14'>
          <div className='w-full lg:w-6/12'>
            <div className='h-[90px] lg:h-[220px] mx-14 lg:mx-0 rounded-xl mt-5 lg:mt-20 flex items-center relative'>
              {data?.map((item, index) => (
                <div className={`rounded-full testimonialProfile-${(index + activeIndex) % data.length} absolute`} key={index}>
                  <Image src={JSON.parse(JSON.stringify(item?.image))} alt={`Testimonials ${index}`} className='rounded-full' />
                </div>))}
            </div>
          </div>
          <div className='w-full lg:w-7/12 flex flex-col items-end gap-4'>
            <div className={`border ${border[variant]} h-fit lg:min-h-[220px] rounded-xl mt-5 lg:mt-20 p-5 relative mx-2 lg:mx-0`}>
              <div className='bg-strongWhite py-6 lg:py-2.5 px-5 w-[220px] h-fit -mt-20'>
                <h4 className={`text-md lg:text-2xl font-bold font-tertiary text-lightBGText ${animation ? 'animate-slide-in' : ''}`} onAnimationEnd={onAnimationEnd}>{testimonial?.name}</h4>
                <h5 className={`text-sm lg:text-lg font-medium font-tertiary text-lightBGText ${animation ? 'animate-slide-in' : ''}`} onAnimationEnd={onAnimationEnd}>{testimonial?.position}</h5>
                <h5 className={`text-sm lg:text-lg font-medium font-tertiary text-lightBGText ${animation ? 'animate-slide-in' : ''}`} onAnimationEnd={onAnimationEnd}>{testimonial?.location}</h5>
              </div>
              <span className={`border h-2 w-2 rounded-full ${bg[variant]} absolute -top-1 left-[16px]`}></span>
              <span className={`border h-2 w-2 rounded-full ${bg[variant]} absolute -top-1 left-[236px]`}></span>
              <p className={`text-lightBGText font-tertiary text-sm lg:text-base text-justify pt-4 ${animation ? 'animate-slide-in' : ''}`} onAnimationEnd={onAnimationEnd}>
                <span className='text-lg lg:text-2xl'>&#8220; </span>
                {testimonial?.testimonial}
                <span className='text-lg lg:text-2xl'> &#8221;</span>
              </p>
            </div>
            <Link href="/testimonial">
              <button className={`${text[variant]} text-lg flex items-center justify-center gap-1 hover:font-semibold hover:scale-105 translate-transform duration-300 ease-linear`}>
                See All <HiChevronRight className='text-xl' />
              </button>
            </Link>
          </div>
        </div>
        <div className='h-fit w-fit'>
          <div className='flex items-center justify-center gap-5'>
            <button className={`cursor-pointer ${text[variant]} border border-transparent hover:rounded-full hover:text-white ${onHover[variant]} p-1 active:scale-75 duration-100 transform`}
              onClick={handlePrev}
            >
              <HiChevronLeft className='w-5 h-5' />
            </button>
            {data?.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === activeIndex ? bg[variant] : 'bg-lineColor'}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
            <button className={`cursor-pointer ${text[variant]} border border-transparent hover:rounded-full hover:text-white ${onHover[variant]} hover:text-strongWhite p-1 active:scale-75 duration-100 transform`}
              onClick={handleNext}
            >
              <HiChevronRight className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;