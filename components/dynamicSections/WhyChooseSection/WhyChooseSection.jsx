"use client";
import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoCheckmark } from "react-icons/io5";

const WhyChooseSection = ({ headline, upperHeadline, headlineSub, responsiveImgURL, renderedData, variant = 'primary' }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const border = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    redThree: 'border-redThree',
    yellow: 'border-yellowTwo',
    purple: 'border-purpleTwo',
    green: 'border-green',
    yellowThree: 'border-yellowThree',
    secondaryTwo: 'border-secondaryTwo',
    yellowTwo: 'border-yellowTwo',
    skyFour: 'border-skyFour',
  }
  const bg = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    redThree: 'bg-redThree',
    yellow: 'bg-yellowTwo',
    purple: 'bg-purpleTwo',
    green: 'bg-green',
    yellowThree: 'bg-yellowThree',
    secondaryTwo: 'bg-secondaryTwo',
    yellowTwo: 'bg-yellowTwo',
    skyFour: 'bg-skyFour',
  }
  const onHover = {
    primary: 'hover:bg-primary',
    secondary: 'hover:bg-secondary',
    redThree: 'hover:bg-redThree',
    yellow: 'hover:bg-yellowTwo',
    purple: 'hover:bg-purpleTwo',
    green: 'hover:bg-green',
    yellowThree: 'hover:bg-yellowThree',
    secondaryTwo: 'hover:bg-secondaryTwo',
    yellowTwo: 'hover:bg-yellowTwo',
    skyFour: 'hover:bg-skyFour',
  }
  const color = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    redThree: 'text-redThree',
    yellow: 'text-yellowTwo',
    purple: 'text-purpleTwo',
    green: 'text-green',
    yellowThree: 'text-yellowThree',
    secondaryTwo: 'text-secondaryTwo',
    yellowTwo: 'text-yellowTwo',
    skyFour: 'text-skyFour',
  }
  const imgShader = {
    primary: 'bg-primary/40',
    secondary: 'bg-secondary/40',
    redThree: 'bg-redThree/40',
    yellow: 'bg-yellowTwo/40',
    purple: 'bg-purpleTwo/40',
    green: 'bg-green/40',
    yellowThree: 'bg-yellowThree/40',
    secondaryTwo: 'bg-secondaryTwo/40',
    yellowTwo: 'bg-yellowTwo/40',
    skyFour: 'bg-skyFour/40',
  }
  const marginLeftVariant = {
    150: 'ml-[150px]',
    130: 'ml-[130px]',
    110: 'ml-[110px]',
    90: 'ml-[90px]',
    70: 'ml-[70px]',
    50: 'ml-[50px]',
    30: 'ml-[30px]',
    10: 'ml-[10px]'
  }
  const shaderHeight = {
    default: 'h-[460px]',
    6: 'h-[500px]',
    7: 'h-[540px]',
    8: 'h-[600px]',
    9: 'h-[670px]',
    10: 'h-[750px]'
  }
  return (
    <div className='w-[360px] h-fit lg:w-[1200px] lg:min-h-[568px] bg-strongWhite lg:bg-transparent mx-auto lg:flex flex-col lg:gap-12'>
      <div>
        <h3 className='text-4xl font-bold font-tertiary hidden lg:inline-block' dangerouslySetInnerHTML={{ __html: headline ? headline : 'Why Choose TechForing ?' }}></h3><br />
        {upperHeadline && <h6 className='text-2xl font-medium font-tertiary hidden lg:inline-block mt-2' dangerouslySetInnerHTML={{ __html: upperHeadline ? upperHeadline : 'Upper Headline' }}></h6>}
        {headlineSub && <p className='text-lightBGText pt-3 hidden lg:inline-block'>{headlineSub ? headlineSub : ""}</p>}
      </div>
      <div className='w-full h-fit lg:flex hidden'>
        <div className='w-1/2'>
          <div className='h-[438px] w-full'>
            <Image src={responsiveImgURL ? responsiveImgURL : globalImages?.whyChooseSideImg} alt={headline ? headline : 'why-choose-techforing'} quality={100} className='h-full w-full object-contain' />
          </div>
        </div>
        <div className='w-1/2 relative'>
          <div className={`w-[680px] ${renderedData?.length > 5 && expandedIndex ? shaderHeight[renderedData?.length] : shaderHeight?.default} ${imgShader[variant]} absolute top-1/2 -translate-y-1/2 right-[90px] clip-path-polygon z-10 hidden lg:inline-block`}></div>
          <div className='min-h-[500px] w-[740px] bg-strongWhite absolute top-1/2 -translate-y-1/2 right-0 clip-path-polygon z-50 hidden lg:inline-block'>
            {renderedData?.map((item, index) => {
              const mlValue = 150 - index * 20;
              return (
                <div className={`w-[574px] ${expandedIndex === index ? 'h-fit' : 'h-[42px]'} mt-8 ${marginLeftVariant[mlValue]}`} key={index + 1}>
                  <div className='h-fit flex items-center gap-3 px-2.5 cursor-pointer'
                    onClick={() => {
                      setExpandedIndex(index === expandedIndex ? null : index);
                    }}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${border[variant]} ${onHover[variant]} ${expandedIndex === index && bg[variant]}`}>
                      <IoCheckmark className={`text-2xl hover:text-strongWhite ${expandedIndex === index ? 'text-strongWhite' : color[variant]}`} />
                    </div>
                    <h5 className='text-lg font-tertiary font-semibold'>{item?.title}</h5>
                  </div>
                  {expandedIndex === index &&
                    <div className='h-[100px] py-2.5 px-6 animate-slide-up'>
                      <div className={`border-l-[2.5px] ${border[variant]} h-fit`}>
                        <p className='text-lightBGText text-justify pl-6'>{item?.description}</p>
                      </div>
                    </div>}
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='lg:hidden flex flex-col gap-6'>
        {upperHeadline && <h6 className='text-base font-medium font-tertiary pl-3' dangerouslySetInnerHTML={{ __html: upperHeadline ? upperHeadline : 'Upper Headline' }}></h6>}
        <div className='w-full h-[90px] relative'>
          <div className='w-[287px] h-[92px] absolute top-0 left-0 bg-strongWhite clip-path-polygon-reverse z-50 flex items-end py-2 px-4'>
            <h3 className='w-[130px] text-xl font-bold font-tertiary text-primary'>{headline ? headline : 'Why Choose TechForing ?'}</h3>
          </div>
          <div className={`w-[310px] h-[80px] absolute top-[0.30rem] left-0 ${imgShader[variant]} clip-path-polygon-reverse-two z-30`}></div>

          <div className='w-[152px] h-[90px] absolute top-0 right-0 z-10 overflow-hidden'>
            <Image src={responsiveImgURL ? responsiveImgURL : globalImages?.whyChooseSideImg} alt={headline ? headline : 'why-choose-techforing'} quality={100} />
          </div>

        </div>
        <div className='px-4'>
          {renderedData?.map((item, index) => (
            <div className={`w-[336px] ${expandedIndex === index ? 'h-fit' : 'h-[21px]'} mb-6`} key={index + 1}>
              <div className='h-fit flex items-center gap-3 px-2.5 cursor-pointer' onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}>
                <div className={`w-4 h-4 rounded-full flex items-center justify-center border ${border[variant]} ${onHover[variant]} ${expandedIndex === index && bg[variant]}`}>
                  <IoCheckmark className={`text-lg hover:text-strongWhite ${expandedIndex === index ? 'text-strongWhite' : color[variant]}`} />
                </div>
                <h5 className='text-sm font-tertiary text-primary'>{item?.title}</h5>
              </div>
              {expandedIndex === index &&
                <div className='h-fit py-2.5 px-6 animate-slide-up'>
                  <div className={`border-l-[2.5px] ${border[variant]} h-fit`}>
                    <p className='text-lightBGText text-justify pl-6 text-sm'>{item?.description}</p>
                  </div>
                </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;