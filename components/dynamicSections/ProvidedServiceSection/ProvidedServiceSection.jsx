"use client"
import React, { Fragment, useState } from 'react';
import ProvidedServiceCard from '@/components/common/ProvidedServiceCard/ProvidedServiceCard';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import IndicatorDot from '@/components/common/IndicatorDot/IndicatorDot';
import Link from 'next/link';

const ProvidedServiceSection = ({ title, desc, imgAlignRight, renderedData }) => {
    const [activeCard, setActiveCard] = useState(renderedData?.[0]?.itemName);
    const [activeIndex, setActiveIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const handleCardClick = (cardName) => {
        setActiveCard(cardName);
    };
    const btnColorVariant = {
        sky: 'w-fit h-[53px] rounded-[4px] border-l-4 border-sky py-4 px-8 flex items-center justify-center text-lg font-tertiary text-sky font-bold hover:bg-sky hover:text-strongWhite transition duration-700 ease-in-out active:scale-125',
        purple: 'w-fit h-[53px] rounded-[4px] border-l-4 border-purpleTwo py-4 px-8 flex items-center justify-center text-lg font-tertiary text-purpleTwo font-bold hover:bg-purpleTwo hover:text-strongWhite transition duration-700 ease-in-out active:scale-125',
        yellow: 'w-fit h-[53px] rounded-[4px] border-l-4 border-yellowTwo py-4 px-8 flex items-center justify-center text-lg font-tertiary text-yellowTwo font-bold hover:bg-yellowTwo hover:text-strongWhite transition duration-700 ease-in-out active:scale-125',
        red: 'w-fit h-[53px] rounded-[4px] border-l-4 border-redThree py-4 px-8 flex items-center justify-center text-lg font-tertiary text-redThree font-bold hover:bg-redThree hover:text-strongWhite transition duration-700 ease-in-out active:scale-125',
        yellowThree: 'w-fit h-[53px] rounded-[4px] border-l-4 border-yellowThree py-4 px-8 flex items-center justify-center text-lg font-tertiary text-yellowThree font-bold hover:bg-yellowThree hover:text-strongWhite transition duration-700 ease-in-out active:scale-125',
        purpleThree: 'w-fit h-[53px] rounded-[4px] border-l-4 border-purpleThree py-4 px-8 flex items-center justify-center text-lg font-tertiary text-purpleThree font-bold hover:bg-purpleThree hover:text-strongWhite transition duration-700 ease-in-out active:scale-125',
        secondaryTwo: 'w-fit h-[53px] rounded-[4px] border-l-4 border-secondaryTwo py-4 px-8 flex items-center justify-center text-lg font-tertiary text-secondaryTwo font-bold hover:bg-secondaryTwo hover:text-strongWhite transition duration-700 ease-in-out active:scale-125',
    }
    const overlayVariant = {
        sky: 'bg-sky/40',
        purple: 'bg-purpleTwo/40',
        yellow: 'bg-yellowTwo/40',
        red: 'bg-redThree/40',
        yellowThree: 'bg-yellowThree/40',
        purpleThree: 'bg-purpleThree/40',
        secondaryTwo: 'bg-secondaryTwo/40',
    }
    const borderVariant = {
        sky: 'w-[800px] bg-strongWhite p-10 shadow-xl border-l-[140px] border-sky relative z-50',
        purple: 'w-[800px] bg-strongWhite p-10 shadow-xl border-l-[140px] border-purpleTwo relative z-50',
        yellow: 'w-[800px] bg-strongWhite p-10 shadow-xl border-l-[140px] border-yellowTwo relative z-50',
        red: 'w-[800px] bg-strongWhite p-10 shadow-xl border-l-[140px] border-redThree relative z-50',
        yellowThree: 'w-[800px] bg-strongWhite p-10 shadow-xl border-l-[140px] border-yellowThree relative z-50',
        purpleThree: 'w-[800px] bg-strongWhite p-10 shadow-xl border-l-[140px] border-purpleThree relative z-50',
        secondaryTwo: 'w-[800px] bg-strongWhite p-10 shadow-xl border-l-[140px] border-secondaryTwo relative z-50',
    }
    const withOurBorderVariant = {
        sky: 'w-[800px] bg-strongWhite shadow-xl relative z-50',
        purple: 'w-[800px] bg-strongWhite shadow-xl relative z-50',
        yellow: 'w-[800px] bg-strongWhite shadow-xl relative z-50',
        red: 'w-[800px] bg-strongWhite shadow-xl relative z-50',
        yellowThree: 'w-[800px] bg-strongWhite shadow-xl relative z-50',
        purpleThree: 'w-[800px] bg-strongWhite shadow-xl relative z-50',
        secondaryTwo: 'w-[800px] bg-strongWhite shadow-xl relative z-50',
    }
    const imgAlignmentVariant = {
        imgLeft: 'w-full min-h-[585px] hidden lg:flex flex-row-reverse',
        imgRight: 'w-full min-h-[624px] hidden lg:flex',
        contentLeft: 'absolute bottom-0 left-0',
        contentRight: 'absolute bottom-0 right-0',
    }
    const btnTwoVariant = {
        sky: 'text-lg text-sky font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 absolute -top-5 hover:bg-sky hover:text-strongWhite hover:transition-colors hover:transition-background active:scale-110',
        purple: 'text-lg text-purpleTwo font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 absolute -top-5 hover:bg-purpleTwo hover:text-strongWhite hover:transition-colors hover:transition-background active:scale-110',
        yellow: 'text-lg text-yellowTwo font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 absolute -top-5 hover:bg-yellowTwo hover:text-strongWhite hover:transition-colors hover:transition-background active:scale-110',
        red: 'text-lg text-redThree font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 absolute -top-5 hover:bg-redThree hover:text-strongWhite hover:transition-colors hover:transition-background active:scale-110',
        yellowThree: 'text-lg text-yellowThree font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 absolute -top-5 hover:bg-yellowThree hover:text-strongWhite hover:transition-colors hover:transition-background active:scale-110',
        purpleThree: 'text-lg text-purpleThree font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 absolute -top-5 hover:bg-purpleThree hover:text-strongWhite hover:transition-colors hover:transition-background active:scale-110',
        secondaryTwo: 'text-lg text-secondaryTwo font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 absolute -top-5 hover:bg-secondaryTwo hover:text-strongWhite hover:transition-colors hover:transition-background active:scale-110',
    }
    const topBorderVariant = {
        sky: 'min-w-[145px] h-[44px] border-t-2 border-sky flex items-end justify-center relative',
        purple: 'min-w-[145px] h-[44px] border-t-2 border-purpleTwo flex items-end justify-center relative',
        yellow: 'min-w-[145px] h-[44px] border-t-2 border-yellowTwo flex items-end justify-center relative',
        red: 'min-w-[145px] h-[44px] border-t-2 border-redThree flex items-end justify-center relative',
        yellowThree: 'min-w-[145px] h-[44px] border-t-2 border-yellowThree flex items-end justify-center relative',
        purpleThree: 'min-w-[145px] h-[44px] border-t-2 border-purpleThree flex items-end justify-center relative',
        secondaryTwo: 'min-w-[145px] h-[44px] border-t-2 border-secondaryTwo flex items-end justify-center relative',
    }
    const textVariant = {
        sky: 'text-sky font-medium font-tertiary',
        purple: 'text-purpleTwo font-medium font-tertiary',
        yellow: 'text-yellowTwo font-medium font-tertiary',
        red: 'text-redThree font-medium font-tertiary',
        yellowThree: 'text-yellowThree font-medium font-tertiary',
        purpleThree: 'text-purpleThree font-medium font-tertiary',
        secondaryTwo: 'text-secondaryTwo font-medium font-tertiary',
    }
    const outerLightBGColor = {
        sky: 'w-5 h-5 rounded-full bg-sky/20 flex items-center justify-center',
        purple: 'w-5 h-5 rounded-full bg-purpleTwo/20 flex items-center justify-center',
        yellow: 'w-5 h-5 rounded-full bg-yellowTwo/20 flex items-center justify-center',
        red: 'w-5 h-5 rounded-full bg-redThree/20 flex items-center justify-center',
        yellowThree: 'w-5 h-5 rounded-full bg-yellowThree/20 flex items-center justify-center',
        purpleThree: 'w-5 h-5 rounded-full bg-purpleThree/20 flex items-center justify-center',
        secondaryTwo: 'w-5 h-5 rounded-full bg-secondaryTwo/20 flex items-center justify-center',
    }
    const innerColorVariant = {
        sky: 'w-3 h-3 rounded-full bg-sky',
        purple: 'w-3 h-3 rounded-full bg-purpleTwo',
        yellow: 'w-3 h-3 rounded-full bg-yellowTwo',
        red: 'w-3 h-3 rounded-full bg-redThree',
        yellowThree: 'w-3 h-3 rounded-full bg-yellowThree',
        purpleThree: 'w-3 h-3 rounded-full bg-purpleThree',
        secondaryTwo: 'w-3 h-3 rounded-full bg-secondaryTwo',
    }
    const smallScreenBorderColor = {
        sky: 'border-sky',
        purple: 'border-purpleTwo',
        yellow: 'border-yellowTwo',
        red: 'border-redThree',
        yellowThree: 'border-yellowThree',
        purpleThree: 'border-purpleThree',
        secondaryTwo: 'border-secondaryTwo',
    }
    const smallScreenBGColor = {
        sky: 'bg-sky',
        purple: 'bg-purpleTwo',
        yellow: 'bg-yellowTwo',
        red: 'bg-redThree',
        yellowThree: 'bg-yellowThree',
        purpleThree: 'bg-purpleThree',
        secondaryTwo: 'bg-secondaryTwo',
    }
    const smallBtnVariant = {
        sky: 'w-full border border-transparent text-lg bg-sky text-strongWhite font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 hover:border-sky hover:bg-transparent hover:text-sky hover:transition-colors hover:transition-background active:scale-110',
        purple: 'w-full border border-transparent text-lg bg-purpleTwo text-strongWhite font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 hover:border-purpleTwo hover:bg-transparent hover:text-purpleTwo hover:transition-colors hover:transition-background active:scale-110',
        yellow: 'w-full border border-transparent text-lg bg-yellowTwo text-strongWhite font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 hover:border-yellowTwo hover:bg-transparent hover:text-yellowTwo hover:transition-colors hover:transition-background active:scale-110',
        red: 'w-full border border-transparent text-lg bg-redThree text-strongWhite font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 hover:border-redThree hover:bg-transparent hover:text-redThree hover:transition-colors hover:transition-background active:scale-110',
        yellowThree: 'w-full border border-transparent text-lg bg-yellowThree text-strongWhite font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 hover:border-yellowThree hover:bg-transparent hover:text-yellowThree hover:transition-colors hover:transition-background active:scale-110',
        purpleThree: 'w-full border border-transparent text-lg bg-purpleThree text-strongWhite font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 hover:border-purpleThree hover:bg-transparent hover:text-purpleThree hover:transition-colors hover:transition-background active:scale-110',
        secondaryTwo: 'w-full border border-transparent text-lg bg-secondaryTwo text-strongWhite font-tertiary font-bold flex items-center justify-center gap-3 py-2 px-4 hover:border-secondaryTwo hover:bg-transparent hover:text-secondaryTwo hover:transition-colors hover:transition-background active:scale-110',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <div className='flex flex-col items-start gap-5'>
                <h3 className='text-2xl lg:text-4xl font-tertiary font-bold text-lightBGText'>{title ? title : "Services We Provide"}</h3>
                <p className='text-justify'>{desc ? desc : "Description"}</p>
            </div>
            <div className='hidden lg:flex items-stretch justify-center gap-10 py-10'>
                {renderedData?.map((item, index) => (
                    <ProvidedServiceCard
                        key={index}
                        active={activeCard?.includes(item?.itemName)}
                        variant={item?.variant}
                        itemName={item?.itemName}
                        onClick={() => {
                            handleCardClick(item?.itemName);
                            setActiveIndex(index);
                            setClicked(!clicked);
                        }}
                    />
                ))}
            </div>
            <div className={imgAlignRight ? `${imgAlignmentVariant.imgRight}` : `${imgAlignmentVariant.imgLeft}`}>
                <div className='w-5/12 relative overflow-visible'>
                    <div className={imgAlignRight ? `${imgAlignmentVariant.contentLeft}` : `${imgAlignmentVariant.contentRight}`}>
                        {imgAlignRight ?
                            <Fragment>
                                <div className='w-[461px] h-fit pr-5 py-5'>
                                    <h4 className={`text-4xl text-lightBGText font-tertiary font-bold  ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>{renderedData?.[activeIndex]?.data?.title}</h4>
                                </div>
                                <div className={`${borderVariant[renderedData?.[activeIndex]?.variant]}`}>
                                    <p className={`text-lightBGText text-justify leading-relaxed  ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>{renderedData?.[activeIndex]?.data?.desc}</p>
                                </div>
                            </Fragment> :
                            <Fragment>
                                <div className='flex justify-end'>
                                    <div className='w-[461px] h-fit py-5'>
                                        <h4 className={`text-4xl text-lightBGText font-tertiary font-bold  ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>{renderedData?.[activeIndex]?.data?.title}</h4>
                                    </div>
                                </div>
                                <div className={`${withOurBorderVariant[renderedData?.[activeIndex]?.variant]}`}>
                                    <div className='p-8'>
                                        <p className={`text-lightBGText leading-relaxed overflow-hidden  ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>{renderedData?.[activeIndex]?.data?.desc}</p>
                                    </div>
                                    <div className='w-full pb-8 flex'>
                                        <div className='w-9/12 flex'>
                                            {renderedData?.[activeIndex]?.data?.points?.map((item, index) => (
                                                <div className={`${topBorderVariant[renderedData?.[activeIndex]?.variant]}`} key={index}>
                                                    <div className={`absolute -top-3 ${outerLightBGColor[renderedData?.[activeIndex]?.variant]}`}>
                                                        <div className={`${innerColorVariant[renderedData?.[activeIndex]?.variant]}`}></div>
                                                    </div>
                                                    <p className={`text-lg ${textVariant[renderedData?.[activeIndex]?.variant]}`}>{item?.name}</p>
                                                </div>))}
                                        </div>
                                        <div className='w-3/12 relative'>
                                            <Link href={renderedData?.[activeIndex]?.data?.btnUrl || "#"}>
                                                <button className={`${btnTwoVariant[renderedData?.[activeIndex]?.variant]}`}>
                                                    {renderedData?.[activeIndex]?.data?.btnTxt}
                                                    <FaArrowRightLong className='text-full' />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>}
                    </div>
                </div>
                <div className='w-7/12 relative'>
                    <div className={`w-full absolute top-0 right-0 overflow-hidden  ${clicked ? 'animate-slide-up' : 'animate-slide-down'}`}>
                        <Image src={renderedData?.[activeIndex]?.data?.image} alt={renderedData?.[activeIndex]?.data?.alt} className='h-full w-full' />
                        <div className={`absolute inset-0 transform origin-bottom-left ${renderedData?.length <= 3 ? '-skew-x-[61deg]' : renderedData?.length >= 4 ? '-skew-x-[53deg]' : '-skew-x-[53deg]'} ${overlayVariant[renderedData?.[activeIndex]?.variant]}`}></div>
                    </div>
                    {imgAlignRight &&
                        <div className='absolute bottom-0 right-0'>
                            <Link href={renderedData?.[activeIndex]?.data?.btnUrl || "#"}>
                                <button className={`${btnColorVariant[renderedData?.[activeIndex]?.variant]}  ${clicked ? 'animate-slide-up' : 'animate-slide-down'}`}>{renderedData?.[activeIndex]?.data?.btnTxt}</button>
                            </Link>
                        </div>}
                </div>
            </div>
            <div className='w-full h-fit mt-4 visible lg:hidden'>
                <div className={`w-full  overflow-hidden  ${clicked ? 'animate-slide-up' : 'animate-slide-down'}`}>
                    <Image src={renderedData?.[activeIndex]?.data?.image} alt={renderedData?.[activeIndex]?.data?.alt} className='h-full w-full' />
                    <div className={`absolute inset-0 transform origin-bottom-left ${renderedData?.length <= 3 ? '-skew-x-[61deg]' : renderedData?.length >= 4 ? '-skew-x-[53deg]' : '-skew-x-[53deg]'} ${overlayVariant[renderedData?.[activeIndex]?.variant]}`}></div>
                </div>
                <div className={`w-[330px] h-fit bg-strongWhite -mt-20 mx-auto relative z-50 border-t-[20px] p-5 ${smallScreenBorderColor[renderedData?.[activeIndex]?.variant]}`}>
                    <div className={`min-w-[182px] h-fit p-2.5 absolute -top-12 left-0 ${smallScreenBGColor[renderedData?.[activeIndex]?.variant]}`}>
                        <h4 className={`text-lg text-strongWhite font-tertiary font-bold uppercase ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>
                            {renderedData?.[activeIndex]?.itemName}
                        </h4>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4 className={`text-lg text-lightBGText font-tertiary font-bold text-left  ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>{renderedData?.[activeIndex]?.data?.title}</h4>
                        <p className={`text-lightBGText text-justify leading-relaxed  ${clicked ? 'animate-slide-in' : 'animate-slide-out'}`}>{renderedData?.[activeIndex]?.data?.desc}</p>
                        <div className='flex items-center justify-center'>
                            <div className='grid grid-cols-2 items-center justify-between gap-x-6 gap-y-2'>
                                {renderedData?.[activeIndex]?.data?.points?.map((item, index) => (
                                    <div className={`flex items-center justify-start gap-2`} key={index}>
                                        <div className={`${outerLightBGColor[renderedData?.[activeIndex]?.variant]}`}>
                                            <div className={`${innerColorVariant[renderedData?.[activeIndex]?.variant]}`}></div>
                                        </div>
                                        <p className={`text-md ${textVariant[renderedData?.[activeIndex]?.variant]}`}>{item?.name}</p>
                                    </div>))}
                            </div>
                        </div>
                        <div className='w-full mx-auto'>
                            <Link href={renderedData?.[activeIndex]?.data?.btnUrl || '#'}>
                                <button className={`${smallBtnVariant[renderedData?.[activeIndex]?.variant]}`}>
                                    {renderedData?.[activeIndex]?.data?.btnTxt}
                                    <FaArrowRightLong className='text-full' />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center gap-4 pt-5'>
                        {renderedData?.map((item, index) => (
                            <IndicatorDot
                                key={index}
                                variant={item?.variant}
                                active={activeCard?.includes(item?.itemName)}
                                onClick={() => {
                                    handleCardClick(item?.itemName);
                                    setActiveIndex(index);
                                    setClicked(!clicked);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProvidedServiceSection;
