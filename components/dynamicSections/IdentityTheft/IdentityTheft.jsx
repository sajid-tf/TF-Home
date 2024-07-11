'use client'
import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const IdentityTheft = ({ title, renderedData, variant = 'secondary' }) => {
    const [activeItem, setActiveItem] = React.useState(0);
    const [clickedItem, setClickedItem] = React.useState(false);
    const cardBGVariant = {
        primary: 'w-[220px] h-[88px] p-5 bg-primary shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
        secondary: 'w-[220px] h-[88px] p-5 bg-secondaryTwo shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
        sky: 'w-[220px] h-[88px] p-5 bg-sky shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
        yellow: 'w-[220px] h-[88px] p-5 bg-yellowTwo shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
        red: 'w-[220px] h-[88px] p-5 bg-redThree shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
        purple: 'w-[220px] h-[88px] p-5 bg-purpleThree shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
        green: 'w-[220px] h-[88px] p-5 bg-green shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
        inActive: 'w-[220px] h-[88px] p-5 bg-secondaryLightBG shadow-sm cursor-pointer rounded-sm transition duration-500 ease-in-out transform hover:shadow-lg',
        secondaryTwo: 'w-[220px] h-[88px] p-5 bg-secondaryTwo shadow-xl cursor-pointer rounded-sm transition duration-300 ease-in-out transform hover:scale-105',
    }
    const indicatorColor = {
        primary: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-primary cursor-pointer',
        secondary: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryTwo cursor-pointer',
        sky: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-sky cursor-pointer',
        yellow: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-yellowTwo cursor-pointer',
        red: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-redThree cursor-pointer',
        purple: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-purpleThree cursor-pointer',
        green: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-green cursor-pointer',
        secondaryTwo: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryTwo cursor-pointer',
        inActive: 'w-[14px] lg:w-[80px] h-[14px] lg:h-[20px] rounded-full lg:rounded-[100px] bg-secondaryLightBG cursor-pointer',
    }
    const buttonVariant = {
        primary: 'text-2xl text-primary',
        secondary: 'text-2xl text-secondaryTwo',
        sky: 'text-2xl text-sky',
        yellow: 'text-2xl text-yellowTwo',
        red: 'text-2xl text-redThree',
        purple: 'text-2xl text-purpleThree',
        green: 'text-2xl text-green',
        secondaryTwo: 'text-2xl text-secondaryTwo',
    }
    const iconColorVariant = {
        primary: 'text-primary',
        secondary: 'text-secondaryTwo',
        sky: 'text-sky',
        yellow: 'text-yellowTwo',
        red: 'text-redThree',
        purple: 'text-purpleThree',
        green: 'text-green',
        secondaryTwo: 'text-secondaryTwo',
    }
    const borderTopVariant = {
        primary: 'w-full h-[256px] p-5 border-t-[1.5px] border-primary',
        secondary: 'w-full h-[256px] p-5 border-t-[1.5px] border-secondaryTwo',
        sky: 'w-full h-[256px] p-5 border-t-[1.5px] border-sky',
        yellow: 'w-full h-[256px] p-5 border-t-[1.5px] border-yellowTwo',
        red: 'w-full h-[256px] p-5 border-t-[1.5px] border-redThree',
        purple: 'w-full h-[256px] p-5 border-t-[1.5px] border-purpleThree',
        green: 'w-full h-[256px] p-5 border-t-[1.5px] border-green',
        secondaryTwo: 'w-full h-[256px] p-5 border-t-[1.5px] border-secondaryTwo',
    }
    const outerBGvariantColor = {
        primary: 'bg-primary/20 rotate-[360deg]',
        secondary: 'bg-secondaryTwo/20 rotate-[360deg]',
        sky: 'bg-sky/20 rotate-[360deg]',
        yellow: 'bg-yellowTwo/20 rotate-[360deg]',
        red: 'bg-redThree/20 rotate-[360deg]',
        purple: 'bg-purpleThree/20 rotate-[360deg]',
        green: 'bg-green/20 rotate-[360deg]',
        secondaryTwo: 'bg-secondaryTwo/20 rotate-[360deg]',
    }
    const reverseOuterBGvariantColor = {
        primary: 'bg-primary/20 -rotate-[360deg]',
        secondary: 'bg-secondaryTwo/20 -rotate-[360deg]',
        sky: 'bg-sky/20 -rotate-[360deg]',
        yellow: 'bg-yellowTwo/20 -rotate-[360deg]',
        red: 'bg-redThree/20 -rotate-[360deg]',
        purple: 'bg-purpleThree/20 -rotate-[360deg]',
        green: 'bg-green/20 -rotate-[360deg]',
        secondaryTwo: 'bg-secondaryTwo/20 -rotate-[360deg]',
    }
    const innerBGVariantColor = {
        primary: 'border-primary -rotate-[360deg]',
        secondary: 'border-secondaryTwo -rotate-[360deg]',
        sky: 'border-sky -rotate-[360deg]',
        yellow: 'border-yellowTwo -rotate-[360deg]',
        red: 'border-redThree -rotate-[360deg]',
        purple: 'border-purpleThree -rotate-[360deg]',
        green: 'border-green -rotate-[360deg]',
        secondaryTwo: 'border-secondaryTwo -rotate-[360deg]',
    }
    const reverserInnerBGVariantColor = {
        primary: 'border-primary rotate-[360deg]',
        secondary: 'border-secondaryTwo rotate-[360deg]',
        sky: 'border-sky rotate-[360deg]',
        yellow: 'border-yellowTwo rotate-[360deg]',
        red: 'border-redThree rotate-[360deg]',
        purple: 'border-purpleThree rotate-[360deg]',
        green: 'border-green rotate-[360deg]',
        secondaryTwo: 'border-secondaryTwo rotate-[360deg]',
    }
    const borderColorVariant = {
        primary: 'border-primary/20',
        secondary: 'border-secondaryTwo/20',
        sky: 'border-sky/20',
        yellow: 'border-yellowTwo/20',
        red: 'border-redThree/20',
        purple: 'border-purpleThree/20',
        green: 'border-green/20',
        secondaryTwo: 'border-secondaryTwo/20',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto flex flex-col gap-14 lg:gap-[100px]'>
            <div className='w-full h-fit'>
                <h4 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold text-center'>{title ? title : "Types Of Identity Theft We Deal With"}</h4>
            </div>
            <div className='lg:flex items-center justify-center hidden'>
                <div className='grid grid-cols-5 items-center justify-between gap-6'>
                    {renderedData?.map((item, index) => (
                        <div
                            key={index}
                            className={`${activeItem === index ? cardBGVariant[variant] : cardBGVariant.inActive}`}
                            onClick={() => {
                                setActiveItem(index);
                                setClickedItem(!clickedItem);
                            }}
                        >
                            <h6 className={`text-lg ${activeItem === index ? 'text-strongWhite' : 'text-lightBGText'} font-tertiary text-center capitalize`} dangerouslySetInnerHTML={{ __html: item?.cardTitle }}></h6>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-fit hidden lg:inline-block'>
                <div className={`${borderTopVariant[variant]}`}>
                    <div className='w-full h-full flex'>
                        <div className={`w-[240px] relative shadow-sm transition-transform duration-1000 ease-in-out transform ${clickedItem ? outerBGvariantColor[variant] : reverseOuterBGvariantColor[variant]}`}>
                            <div className={`w-[140px] h-[240px] bg-strongWhite border-[1.5px] ${clickedItem ? innerBGVariantColor[variant] : reverserInnerBGVariantColor[variant]} absolute -top-16 left-7 shadow-sm flex items-center justify-center transition-transform duration-1000 ease-in-out transform`}>
                                <div className={`text-8xl ${iconColorVariant[variant]}`}>
                                    {renderedData?.[activeItem]?.icon}
                                </div>
                            </div>
                        </div>
                        <div className={`w-full p-10 ${clickedItem ? 'animate-slide-up' : 'animate-slide-down'}`}>
                            <h5 className='text-2xl text-lightBGText font-tertiary font-bold pb-3 capitalize' >{renderedData?.[activeItem]?.title}</h5>
                            <p className='text-lightBGText font-tertiary text-justify'>{renderedData?.[activeItem]?.description}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex items-center justify-center pt-5'>
                    <div className='min-w-[1084px] h-[100px] flex items-center justify-center'>
                        <div className='w-fit h-full flex items-center justify-center'>
                            <div className='w-[80px] h-full flex items-center justify-center'>
                                <button className='w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-secondaryLightBG hover:shadow-lg active:scale-110'
                                    onClick={() => {
                                        setActiveItem(activeItem === 0 ? renderedData?.length - 1 : activeItem - 1);
                                        setClickedItem(!clickedItem);
                                    }}
                                >
                                    <HiOutlineChevronLeft className={`${buttonVariant[variant]}`} />
                                </button>
                            </div>
                            <div className='w-full h-full flex items-center justify-center'>
                                <div className='flex items-center justify-center gap-3'>
                                    {renderedData?.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`${activeItem === index ? indicatorColor[variant] : indicatorColor.inActive}`}
                                            onClick={() => { setActiveItem(index); setClickedItem(!clickedItem); }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className='w-[80px] h-full flex items-center justify-center'>
                                <button className='w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-secondaryLightBG hover:shadow-lg active:scale-110'
                                    onClick={() => {
                                        setActiveItem(activeItem === renderedData?.length - 1 ? 0 : activeItem + 1);
                                        setClickedItem(!clickedItem);
                                    }}
                                >
                                    <HiOutlineChevronRight className={`${buttonVariant[variant]}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-[218px] visible lg:hidden'>
                <div className='w-full h-[40px] flex'>
                    <div className='w-full h-full flex items-center justify-start'>
                        <h5 className={`text-lg text-lightBGText font-tertiary font-bold capitalize ${clickedItem ? 'animate-slide-up' : 'animate-slide-down'}`} >{renderedData?.[activeItem]?.title}</h5>
                    </div>
                    <div className={`w-[128px] h-full relative shadow-sm transition-transform duration-1000 ease-in-out transform ${clickedItem ? outerBGvariantColor[variant] : reverseOuterBGvariantColor[variant]}`}>
                        <div className={`w-[70px] h-[80px] bg-strongWhite border-[1.5px] ${clickedItem ? innerBGVariantColor[variant] : reverserInnerBGVariantColor[variant]} absolute -top-[50px] left-1/2 -translate-x-1/2 shadow-sm flex items-center justify-center transition-transform duration-1000 ease-in-out transform`}>
                            <div className={`text-6xl ${iconColorVariant[variant]}`}>
                                {renderedData?.[activeItem]?.icon}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`border-l-[50px] p-4 ${borderColorVariant[variant]} my-4`}>
                    <p className={`text-lightBGText font-tertiary text-justify ${clickedItem ? 'animate-slide-in' : 'animate-slide-out'}`}>{renderedData?.[activeItem]?.description}</p>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-[80px] h-full flex items-center justify-center'>
                        <button className='w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-secondaryLightBG hover:shadow-lg active:scale-110'
                            onClick={() => {
                                setActiveItem(activeItem === 0 ? renderedData?.length - 1 : activeItem - 1);
                                setClickedItem(!clickedItem);
                            }}
                        >
                            <HiOutlineChevronLeft className={`${buttonVariant[variant]}`} />
                        </button>
                    </div>
                    <div className='w-full h-full flex items-center justify-center'>
                        <div className='flex items-center justify-center gap-3'>
                            {renderedData?.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${activeItem === index ? indicatorColor[variant] : indicatorColor.inActive}`}
                                    onClick={() => {
                                        setActiveItem(index);
                                        setClickedItem(!clickedItem);
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[80px] h-full flex items-center justify-center'>
                        <button className='w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-secondaryLightBG hover:shadow-lg active:scale-110'
                            onClick={() => {
                                setActiveItem(activeItem === renderedData?.length - 1 ? 0 : activeItem + 1);
                                setClickedItem(!clickedItem);
                            }}
                        >
                            <HiOutlineChevronRight className={`${buttonVariant[variant]}`} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdentityTheft;