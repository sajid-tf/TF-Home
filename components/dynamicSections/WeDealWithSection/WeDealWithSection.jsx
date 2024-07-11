"use client"
import { globalImages } from '@/utils/images/globaIImages';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';

const WeDealWithSection = ({ title, subTitle, renderedData, variant = 'tertiary' }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const rightBorderVariant = {
        primary: 'border-sky',
        secondary: 'border-secondary',
        tertiary: 'border-yellowTwo',
        redThree: 'border-redThree',
        secondaryTwo: 'border-secondaryTwo',
        purple: 'border-purple',
        purpleTwo: 'border-purpleTwo'
    }
    const leftBorderVariant = {
        primary: 'hover:bg-sky/5 hover:border-sky-5',
        secondary: 'hover:bg-secondary/5 hover:border-secondary-5',
        tertiary: 'hover:bg-yellowTwo/5 hover:border-yellowTwo-5',
        redThree: 'hover:bg-redThree/5 hover:border-redThree-5',
        secondaryTwo: 'hover:bg-secondaryTwo/5 hover:border-secondaryTwo-5',
        purple: 'hover:bg-purple/5 hover:border-purple-5',
        purpleTwo: 'hover:bg-purpleTwo/5 hover:border-purpleTwo-5'
    }
    const activeBGColor = {
        primary: 'border-sky bg-sky/10',
        secondary: 'border-secondary bg-secondary/10',
        tertiary: 'border-yellowTwo bg-yellowTwo/10',
        redThree: 'border-redThree bg-redThree/10',
        secondaryTwo: 'border-secondaryTwo bg-secondaryTwo/10',
        purple: 'border-purple bg-purple/10',
        purpleTwo: 'border-purpleTwo bg-purpleTwo/10'
    }
    const transparentBGColor = {
        primary: 'border-sky/20',
        secondary: 'border-secondary/20',
        tertiary: 'border-yellowTwo/20',
        redThree: 'border-redThree/20',
        secondaryTwo: 'border-secondaryTwo/20',
        purple: 'border-purple/20',
        purpleTwo: 'border-purpleTwo/20'
    }
    const btnColorVariant = {
        primary: 'border-sky text-sky hover:bg-sky',
        secondary: 'border-secondary text-secondary hover:bg-secondary',
        tertiary: 'border-yellowTwo text-yellowTwo hover:bg-yellowTwo',
        redThree: 'border-redThree text-redThree hover:bg-redThree',
        secondaryTwo: 'border-secondaryTwo text-secondaryTwo hover:bg-secondaryTwo',
        purple: 'border-purple text-purple hover:bg-purple',
        purpleTwo: 'border-purpleTwo text-purpleTwo hover:bg-purpleTwo'
    }
    const activeTextVariant = {
        normal: 'text-sm text-lightBGText font-tertiary font-medium text-center px-8',
        active: 'text-sm text-lightBGText font-tertiary font-semibold text-center px-8',
    }
    const smallBtnVariant = {
        primary: 'bg-sky text-strongWhite hover:bg-transparent hover:text-sky hover:border-sky',
        secondary: 'bg-secondary text-strongWhite hover:bg-transparent hover:text-secondary hover:border-secondary',
        tertiary: 'bg-yellowTwo text-strongWhite hover:bg-transparent hover:text-yellowTwo hover:border-yellowTwo',
        redThree: 'bg-redThree text-strongWhite hover:bg-transparent hover:text-redThree hover:border-redThree',
        secondaryTwo: 'bg-secondaryTwo text-strongWhite hover:bg-transparent hover:text-secondaryTwo hover:border-secondaryTwo',
        purple: 'bg-purple text-strongWhite hover:bg-transparent hover:text-purple hover:border-purple',
        purpleTwo: 'bg-purpleTwo text-strongWhite hover:bg-transparent hover:text-purpleTwo hover:border-purpleTwo'
    }
    const indicatorColor = {
        primary: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-sky cursor-pointer',
        secondary: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondary cursor-pointer',
        tertiary: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-yellowTwo cursor-pointer',
        redThree: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-redThree cursor-pointer',
        secondaryTwo: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryTwo cursor-pointer',
        purple: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-purple cursor-pointer',
        purpleTwo: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-purpleTwo cursor-pointer',
        inActive: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryLightBG cursor-pointer',
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeIndex === renderedData?.length - 1) {
                setActiveIndex(0);
                setClicked(!clicked);
            } else {
                setActiveIndex(activeIndex + 1);
                setClicked(!clicked);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex, clicked]);
    return (
        <div className='w-[360px] h-fit lg:w-[1200px] lg:min-h-[516px] mx-auto flex flex-col lg:flex-row gap-[50px]'>
            <div className={`w-full lg:w-[380px] flex flex-col gap-2 items-center ${subTitle ? 'justify-center' : 'justify-center'}`}>
                <h3 className={`text-xl lg:text-4xl text-lightBGText font-tertiary font-bold ${subTitle ? 'text-start' : 'text-center'}`} dangerouslySetInnerHTML={{ __html: title ? title : "Types of Ransomware We Deal With" }}></h3>
                {subTitle &&
                    <p className='text-lightBGText text-base font-tertiary leading-relaxed'>
                        {subTitle}
                    </p>}
            </div>
            <div className='w-[770px] hidden lg:inline-block'>
                <div className='w-full h-full flex'>
                    <div className={`w-3/12 border-r-4 flex flex-col items-center justify-center gap-5 ${rightBorderVariant[variant]}`}>
                        {renderedData?.map((item, index) => (
                            <div
                                className={`w-full min-h-[52px] border-l-[10px] flex items-center justify-center cursor-pointer ${leftBorderVariant[variant]} ${activeIndex === index ? `${activeBGColor[variant]} transition duration-700 ease-in-out` : `${transparentBGColor[variant]}  bg-transparent`}`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setClicked(!clicked);
                                }}
                                key={index}>
                                <h4 className={`${activeIndex === index ? `${activeTextVariant.active}` : `${activeTextVariant.normal}`}`}>{item?.title}</h4>
                            </div>))}
                    </div>
                    <div className={`p-10 flex flex-col gap-5 w-[450px] h-[195px] ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>
                        <div className='w-[450px] h-[195px]'>
                            <Image src={renderedData[activeIndex]?.data?.img || globalImages?.hackRecoverWeDealImg} alt={renderedData[activeIndex]?.data?.alt || "hackRecovery"} className='h-full w-full object-cover' />
                        </div>
                        <p className='text-lightBGText text-base text-justify font-tertiary leading-relaxed w-[450px]'>
                            {renderedData[activeIndex]?.data?.desc || "Description"}
                        </p>
                        {
                            renderedData[activeIndex]?.data?.btnText && <Link href={renderedData[activeIndex]?.data?.btnUrl || '#'}><button className={`w-fit h-[53px] rounded-[4px] border-l-4  py-4 px-8 flex items-center justify-center text-lg font-tertiary font-bold ${btnColorVariant[variant]}  hover:text-strongWhite transition duration-700 ease-in-out active:scale-125`}>{renderedData[activeIndex]?.data?.btnText}</button></Link>
                        }

                    </div>
                </div>
            </div>
            <div className='w-full visible lg:hidden'>
                <div className='w-full h-fit flex items-center justify-center gap-2 pb-6'>
                    <button className={`w-10 h-10 border border-transparent rounded-md p-1 active:scale-110 ${smallBtnVariant[variant]}`}
                        onClick={() => {
                            if (activeIndex === 0) {
                                setActiveIndex(renderedData?.length - 1);
                                setClicked(!clicked);
                            } else {
                                setActiveIndex(activeIndex - 1);
                                setClicked(!clicked);
                            }
                        }}
                    >
                        <FaAngleLeft className='h-full w-full' />
                    </button>
                    {renderedData?.filter((item, index) => index === activeIndex).map((item, index) => (
                        <div className={`w-full min-h-[52px] border-x-[10px] flex items-center justify-center ${clicked ? 'animate-slide-up' : 'animate-slide-down'} ${rightBorderVariant[variant]}`} key={index + 1}>
                            <h4 className='text-md text-lightBGText font-tertiary font-semibold'>{item?.title}</h4>
                        </div>))}
                    <button className={`w-10 h-10 border border-transparent rounded-md p-1 active:scale-110 ${smallBtnVariant[variant]}`}
                        onClick={() => {
                            if (activeIndex === renderedData?.length - 1) {
                                setActiveIndex(0);
                                setClicked(!clicked);
                            } else {
                                setActiveIndex(activeIndex + 1);
                                setClicked(!clicked);
                            }
                        }}
                    >
                        <FaAngleRight className='h-full w-full' />
                    </button>
                </div>
                <div className={`w-full h-fit px-3 py-4 border-t-4 ${clicked ? 'animate-slide-up' : 'animate-slide-down'} ${rightBorderVariant[variant]}`}>
                    <div className='w-full'>
                        <Image src={renderedData[activeIndex]?.data?.img || globalImages?.hackRecoverWeDealImg} alt={renderedData[activeIndex]?.data?.alt || "hackRecovery"} className='h-full w-full' />
                    </div>
                    <p className='text-lightBGText text-base text-justify font-tertiary leading-relaxed my-4'>
                        {renderedData[activeIndex]?.data?.desc || "Description"}
                    </p>
                    <div className='flex items-center justify-center'>
                        {
                            renderedData[activeIndex]?.data?.btnText && <Link href={renderedData[activeIndex]?.data?.btnUrl || '/'}>
                                <button className={`w-fit h-[53px] rounded-[4px] border-l-4  py-4 px-8 flex items-center justify-center text-lg font-tertiary font-bold ${btnColorVariant[variant]}  hover:text-strongWhite transition duration-700 ease-in-out active:scale-125`}>{renderedData[activeIndex]?.data?.btnText}</button>
                            </Link>
                        }
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='flex items-center justify-center gap-3'>
                        {renderedData?.map((item, index) => (
                            <div
                                key={index}
                                className={`${activeIndex === index ? indicatorColor[variant] : indicatorColor.inActive}`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setClicked(!clicked)
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeDealWithSection;