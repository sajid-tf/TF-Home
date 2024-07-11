'use client';
import React from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Content from '@/components/common/Content';

const OSINTService = ({ title, subtile, renderedData, fullBorder = false, squareShape = false, variant = 'secondary', noOfGrid = 5 }) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [clicked, setClicked] = React.useState(false);

    const gridNumber = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        7: 'grid-cols-7',
        8: 'grid-cols-8'
    }

    const textColorVariant = {
        primary: 'text-sky',
        secondary: 'text-secondaryTwo',
        sky: 'text-secondary',
        skyFour: 'text-skyFour',
        yellow: 'text-yellowThree',
        purple: 'text-purpleThree',
        red: 'text-redThree',
        green: 'text-green',
        purpleTwo: 'text-purpleTwo',
    }
    const outerBGVariant = {
        primary: 'bg-sky/20',
        secondary: 'bg-secondaryTwo/20',
        sky: 'bg-secondary/20',
        skyFour: 'bg-skyFour/20',
        yellow: 'bg-yellowThree/20',
        purple: 'bg-purpleThree/20',
        red: 'bg-redThree/20',
        green: 'bg-green/20',
        purpleTwo: 'bg-purpleTwo/20',
    }
    const buttonVariant = {
        primary: 'bg-sky border border-sky hover:text-sky',
        secondary: 'bg-secondaryTwo border border-secondaryTwo hover:text-secondaryTwo',
        sky: 'bg-secondary border border-secondary hover:text-secondary',
        skyFour: 'bg-skyFour border border-skyFour hover:text-skyFour',
        yellow: 'bg-yellowThree border border-yellowThree hover:text-yellowThree',
        purple: 'bg-purpleThree border border-purpleThree hover:text-purpleThree',
        red: 'bg-redThree border border-redThree hover:text-redThree',
        green: 'bg-green border border-green hover:text-green',
        purpleTwo: 'bg-purpleTwo border border-purpleTwo hover:text-purpleTwo',
    }
    const borderColorVariant = {
        primary: 'border-x-[20px] border-sky/20',
        secondary: 'border-x-[20px] border-secondaryTwo/20',
        sky: 'border-x-[20px] border-secondary/20',
        skyFour: 'border-x-[20px] border-skyFour/20',
        yellow: 'border-x-[20px] border-yellowThree/20',
        purple: 'border-x-[20px] border-purpleThree/20',
        red: 'border-x-[20px] border-redThree/20',
        green: 'border-x-[20px] border-green/20',
        purpleTwo: 'border-x-[20px] border-purpleTwo/20',
    }
    const fullBorderColorVariant = {
        primary: 'border-x-[30px] border-sky/20',
        secondary: 'border-x-[30px] border-secondaryTwo/20',
        sky: 'border-x-[30px] border-secondary/20',
        skyFour: 'border-x-[30px] border-skyFour/20',
        yellow: 'border-x-[30px] border-yellowThree/20',
        purple: 'border-x-[30px] border-purpleThree/20',
        red: 'border-x-[30px] border-redThree/20',
        green: 'border-x-[30px] border-green/20',
        purpleTwo: 'border-x-[30px] border-purpleTwo/20',
    }
    const indicatorColor = {
        primary: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-primary cursor-pointer',
        secondary: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryTwo cursor-pointer',
        sky: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-sky cursor-pointer',
        skyFour: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-skyFour cursor-pointer',
        yellow: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-yellowTwo cursor-pointer',
        red: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-redThree cursor-pointer',
        purple: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-purpleThree cursor-pointer',
        green: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-green cursor-pointer',
        secondaryTwo: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryTwo cursor-pointer',
        inActive: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryLightBG cursor-pointer',
    }
    const smallButtonVariant = {
        primary: 'text-2xl text-primary',
        secondary: 'text-2xl text-secondaryTwo',
        sky: 'text-2xl text-sky',
        skyFour: 'text-2xl text-skyFour',
        yellow: 'text-2xl text-yellowTwo',
        red: 'text-2xl text-redThree',
        purple: 'text-2xl text-purpleThree',
        green: 'text-2xl text-green',
        secondaryTwo: 'text-2xl text-secondaryTwo',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            {title && <h3 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold text-center capitalize'>{title ? title : "OSINT Services We provide"}</h3>}
            {subtile && <Content className='text-center py-5'>{subtile}</Content>}
            <div className={`pt-10 w-full h-fit ${fullBorder ? fullBorderColorVariant[variant] : ''}`}>
                <div className='lg:flex items-center justify-center hidden'>
                    <div className={`grid ${gridNumber[noOfGrid]} items-start justify-center ${renderedData.length > 5 ? 'gap-10' : 'gap-[80px]'}`}>
                        {renderedData?.map((item, index) => (
                            <div key={index}>
                                <div
                                    className='w-[106px] min-h-[172px] flex flex-col gap-[18px] cursor-pointer'
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <div className={`w-full h-[106px] ${squareShape ? 'rounded-md' : 'rounded-full'} flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 translate-transform duration-300 ease-linear ${activeIndex === index ? outerBGVariant[variant] : 'bg-secondaryLightBG'}`}>
                                        <div className='w-[78px] h-[78px] rounded-full bg-strongWhite flex items-center justify-center shadow-lg'>
                                            <div className={`text-5xl ${activeIndex === index ? textColorVariant[variant] : 'text-lightBGText'}`}>
                                                {item?.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <p className={`text-lightBGText font-tertiary ${activeIndex === index ? 'font-semibold' : 'font-medium'} text-center drop-shadow-lg`}>{item?.title}</p>
                                    </div>
                                </div>
                                {index === activeIndex && (
                                    <div className='my-3 flex flex-col items-center'>
                                        <BiSolidDownArrow className={`${textColorVariant[variant]} text-2xl animate-rotate`} />
                                    </div>)}
                            </div>
                        ))
                        }
                    </div >
                </div >
                <div className='visible lg:hidden flex flex-col items-center justify-center pb-5'>
                    <div className={`w-[106px] min-h-[172px] flex flex-col gap-[18px] cursor-pointer ${clicked ? 'animate-slide-up' : 'animate-slide-down'}`}>
                        <div className={`w-full h-[106px] ${squareShape ? 'rounded-md' : 'rounded-full'} flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 translate-transform duration-300 ease-linear ${outerBGVariant[variant]}`}>
                            <div className='w-[78px] h-[78px] rounded-full bg-strongWhite flex items-center justify-center shadow-lg'>
                                <div className={`text-5xl ${textColorVariant[variant]}`}>
                                    {renderedData?.[activeIndex]?.icon}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className={`text-lightBGText font-tertiary font-semibold text-center drop-shadow-lg`}>
                                {renderedData?.[activeIndex]?.title}
                            </p>
                        </div>
                    </div>
                    <div className='my-3 flex flex-col items-center'>
                        <BiSolidDownArrow className={`${textColorVariant[variant]} text-2xl ${clicked ? 'animate-rotate' : 'animate-reverseRotate'} `} />
                    </div>
                </div>
                <div className={`w-full min-h-[112px] py-5 px-5 lg:px-[60px] ${fullBorder ? '' : borderColorVariant[variant]}`}>
                    <p className={`text-lightBGText font-tertiary text-center translate-transform duration-300 ease-linear ${clicked ? 'animate-slide-up' : 'animate-slide-down'}`}>
                        {renderedData[activeIndex]?.description}
                    </p>
                </div>
                <div className='lg:flex items-center justify-center gap-5 pt-6 hidden'>
                    <button
                        className={`${buttonVariant[variant]} border hover:bg-transparent p-2 rounded-md shadow-xl text-strongWhite active:scale-125 transition-transform duration-300 ease-in-out`}
                        onClick={() => {
                            setActiveIndex(activeIndex === 0 ? renderedData?.length - 1 : activeIndex - 1);
                            setClicked(!clicked)
                        }}
                    >
                        <IoChevronBackOutline className={`text-[32px]`} />
                    </button>
                    <button
                        className={`${buttonVariant[variant]} border hover:bg-transparent p-2 rounded-md shadow-xl text-strongWhite active:scale-125 transition-transform duration-300 ease-in-out`}
                        onClick={() => {
                            setActiveIndex(activeIndex === renderedData?.length - 1 ? 0 : activeIndex + 1);
                            setClicked(!clicked)
                        }}
                    >
                        <IoChevronForwardOutline className={`text-[32px]`} />
                    </button>
                </div>
                <div className='w-full h-full flex items-center justify-center pt-6 visible lg:hidden'>
                    <div className='w-[80px] h-full flex items-center justify-center'>
                        <button className='w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-secondaryLightBG hover:shadow-lg active:scale-110'
                            onClick={() => {
                                setActiveIndex(activeIndex === 0 ? renderedData?.length - 1 : activeIndex - 1);
                                setClicked(!clicked)
                            }}
                        >
                            <HiOutlineChevronLeft className={`${smallButtonVariant[variant]}`} />
                        </button>
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
                    <div className='w-[80px] h-full flex items-center justify-center'>
                        <button className='w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-secondaryLightBG hover:shadow-lg active:scale-110'
                            onClick={() => {
                                setActiveIndex(activeIndex === renderedData?.length - 1 ? 0 : activeIndex + 1);
                                setClicked(!clicked)
                            }}
                        >
                            <HiOutlineChevronRight className={`${smallButtonVariant[variant]}`} />
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default OSINTService;