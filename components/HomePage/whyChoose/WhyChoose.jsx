'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import whyChooseCircleImg from '@/assets/why-choose/circle.png';
import { whyChooseData } from '@/utils/mock/dummyData';
import IndicatorDot from '@/components/common/IndicatorDot/IndicatorDot';
import { useSwipeable } from 'react-swipeable';

const WhyChoose = () => {
    const [activeCard, setActiveCard] = useState(whyChooseData?.[0]?.title);
    const [activeIndex, setActiveIndex] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [isAutoChanging, setIsAutoChanging] = useState(true);

    const handleCardClick = (cardName) => {
        setActiveCard(cardName);
    };

    const changeContent = (direction) => {
        setClicked(!clicked);
        let newIndex;
        if (direction === 'NEXT') {
            newIndex = (activeIndex + 1) % whyChooseData.length;
        } else if (direction === 'PREV') {
            newIndex = (activeIndex - 1 + whyChooseData.length) % whyChooseData.length;
        }
        setActiveIndex(newIndex);
        handleCardClick(whyChooseData[newIndex].title);
    };

    useEffect(() => {
        let timer;
        if (isAutoChanging) {
            timer = setTimeout(() => {
                changeContent('NEXT');
            }, 2500); // Change every 3 seconds (adjust as needed)
        }
        return () => clearTimeout(timer);
    }, [activeIndex, isAutoChanging, clicked]);

    const handleSwipe = (direction) => {
        setIsAutoChanging(true); // Stop auto-changing when user interacts
        changeContent(direction === 'LEFT' ? 'NEXT' : 'PREV');
    };
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('LEFT'),
        onSwipedRight: () => handleSwipe('RIGHT'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });


    const borderXVariant = {
        redOne: 'border-red',
        secondary: 'border-secondary',
        yellowOne: 'border-yellow',
        ash: 'border-lightBlack',
        sky: 'border-sky',
        primary: 'border-primary',
    }
    const smallTransparentVariant = {
        redOne: 'bg-red/10',
        secondary: 'bg-secondary/10',
        yellowOne: 'bg-yellow/10',
        ash: 'bg-lightBlack/10',
        sky: 'bg-sky/10',
        primary: 'bg-primary/10',
    }
    const textColorVariant = {
        redOne: 'text-red',
        secondary: 'text-secondary',
        yellowOne: 'text-yellow',
        ash: 'text-lightBlack',
        sky: 'text-sky',
        primary: 'text-primary',
    }
    return (
        <div className='bg-white md:-mt-24 -mt-10'>
            <div className='w-[360px] lg:w-[800px] mx-auto py-12 lg:py-24'>
                <div>
                    <h2 className='text-2xl lg:text-5xl text-primary font-bold font-tertiary text-center'>Why <span className='text-secondary uppercase'>TECHFORING</span> is Your Ultimate Technology Partner</h2>
                    <p className='text-base text-primary text-center pt-4'>We’re not just a technology company, we’re your strategic ally. Our goal is to elevate your business with next-gen business solutions, unwavering security, and a commitment to your unique needs. Here’s why TechForing is the technological partner you need:</p>
                </div>
                <div className='lg:flex justify-center items-center mt-20 relative hidden'>
                    <Image src={whyChooseCircleImg} alt='circle' />
                    <div className='absolute -top-6 -start-[35px]'>
                        <div className='flex flex-col items-end justify-center gap-3'>
                            <div className='bg-red w-fit bg-opacity-10 rounded-full px-5 -mr-10'>
                                <h5 className='text-red text-lg font-semibold'>Worldwide Protection</h5>
                            </div>
                            <p className='w-[330px] text-justify text-lightBlack text-sm'>We've got your back, no matter where you are. We're a global force with a local touch, safeguarding businesses and individuals in over 90 countries.</p>
                        </div>
                    </div>
                    <div className='absolute -top-6 -end-[35px]'>
                        <div className='flex flex-col items-start justify-center gap-3'>
                            <div className='bg-secondary w-fit bg-opacity-10 rounded-full px-5 -ml-10'>
                                <h5 className='text-secondary text-lg font-semibold'>Your Security, Your Way</h5>
                            </div>
                            <p className='w-[330px] text-justify text-lightBlack text-sm'>We don't believe in one-size-fits-all. Our experts craft personalized cybersecurity strategies that fit your unique needs like a glove.</p>
                        </div>
                    </div>
                    <div className='absolute top-[115px] -left-[150px]'>
                        <div className='flex flex-col items-end justify-center gap-3'>
                            <div className='bg-lightBlack w-fit bg-opacity-10 rounded-full px-5 -mr-10'>
                                <h5 className='text-lightBlack text-lg font-semibold'>VIP Security Squad</h5>
                            </div>
                            <p className='w-[330px] text-justify text-lightBlack text-sm'>For those who demand the best, our white-glove service provides unparalleled protection for executives, high-net-worth individuals, and their families.</p>
                        </div>
                    </div>
                    <div className='absolute top-[115px] -right-[150px]'>
                        <div className='flex flex-col items-start justify-center gap-3'>
                            <div className='bg-sky w-fit bg-opacity-10 rounded-full px-5 -ml-10'>
                                <h5 className='text-sky text-lg font-semibold'>Your Business Made Easy</h5>
                            </div>
                            <p className='w-[330px] text-justify text-lightBlack text-sm'>Our comprehensive business management solutions streamline your operations, empower your teams, and drive growth.</p>
                        </div>
                    </div>
                    <div className='absolute -bottom-12 -left-[85px]'>
                        <div className='flex flex-col items-end justify-center gap-3'>
                            <div className='bg-yellow w-fit bg-opacity-10 rounded-full px-5 -mr-10'>
                                <h5 className='text-yellow text-lg font-semibold'>One Platform, Endless Possibilities</h5>
                            </div>
                            <p className='w-[330px] text-justify text-lightBlack text-sm'>From HR and finance to recruitment and more, our integrated platform simplifies your business processes, saving you time and money.</p>
                        </div>
                    </div>
                    <div className='absolute -bottom-6 -right-[85px]'>
                        <div className='flex flex-col items-start justify-center gap-3'>
                            <div className='bg-primary w-fit bg-opacity-10 rounded-full px-5 -ml-10'>
                                <h5 className='text-primary text-lg font-semibold'>Results That Speak for Themselves</h5>
                            </div>
                            <p className='w-[330px] text-justify text-lightBlack text-sm'>Our long list of success stories proves we're the real deal when it comes to protecting your digital world.</p>
                        </div>
                    </div>
                </div>
                <div {...swipeHandlers} className='visible flex flex-col items-center justify-center mt-4 lg:hidden'>
                    <div className='w-[330px] h-[180px] flex items-center justify-center'>
                        <div className={`flex flex-col items-center justify-center gap-3 ${clicked ? 'animate-slide-up' : 'animate-slide-down'}`}>
                            <div className={`w-[100px] h-[100px] rounded-full flex items-center justify-center ${smallTransparentVariant[whyChooseData?.[activeIndex]?.variant]}`}>
                                <div className='w-[75px] h-[75px] flex items-center justify-center'>
                                    {whyChooseData?.[activeIndex]?.svgIcon}
                                </div>
                            </div>
                            <h4 className={`text-base bg-lightWhite py-1 px-4 rounded-full font-tertiary font-semibold ${textColorVariant[whyChooseData?.[activeIndex]?.variant]}`}>
                                {whyChooseData?.[activeIndex]?.title}
                            </h4>
                        </div>
                    </div>
                    <div className={`w-full h-fit border-x-[2px] p-2.5 ${borderXVariant[whyChooseData?.[activeIndex]?.variant]}`}>
                        <p className={`text-base text-lightBGText text-justify ${clicked ? 'animate-slide-up' : 'animate-slide-down'}`}>
                            {whyChooseData?.[activeIndex]?.description}
                        </p>
                    </div>
                    <div className='w-full flex items-center justify-center gap-4 pt-5'>
                        {whyChooseData?.map((item, index) => (
                            <IndicatorDot
                                key={index}
                                variant={item?.variant}
                                active={activeCard?.includes(item?.title)}
                                onClick={() => {
                                    setIsAutoChanging(false);
                                    handleCardClick(item?.title);
                                    setActiveIndex(index);
                                    setClicked(!clicked);
                                }}
                            />
                        ))}
                    </div>
                    {/* Optional: Auto-change toggle button
                    <button onClick={() => setIsAutoChanging(!isAutoChanging)} className="mt-4">
                        {isAutoChanging ? 'Pause' : 'Resume'} Auto-Change
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;