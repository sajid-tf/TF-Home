"use client"
import { Button } from '@/components/common';
import CountUp from '@/utils/helper/countUp';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const StayAhead = ({ variant = 'green' }) => {
    const borderVariant = {
        primary: 'border-sky',
        secondary: 'border-secondary',
        green: 'border-green',
        redThree: 'border-redThree'
    }
    const textVariant = {
        primary: 'text-3xl lg:text-5xl font-tertiary font-bold text-sky',
        secondary: 'text-3xl lg:text-5xl font-tertiary font-bold text-secondary',
        green: 'text-3xl lg:text-5xl font-tertiary font-bold text-green',
        redThree: 'text-3xl lg:text-5xl font-tertiary font-bold text-redThree'
    }
    const btnVariants = {
        primary: 'bg-primary border-primary mb-5 lg:mb-0 hover:border-primary hover:text-primary active:scale-125',
        secondary: 'bg-secondary border-secondary mb-5 lg:mb-0 hover:border-secondary hover:text-secondary active:scale-125',
        green: 'bg-green border-green mb-5 lg:mb-0 hover:border-green hover:text-green active:scale-125',
        redThree: 'bg-redThree border-redThree mb-5 lg:mb-0 hover:border-redThree hover:text-redThree active:scale-125'
    }

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className={`w-[360px] lg:w-[1200px] h-fit lg:min-h-[440px] mx-auto border-y-[50px] lg:border-y-0 lg:border-x-[50px] flex flex-col lg:flex-row gap-10 py-0 px-0 lg:px-[100px] ${borderVariant[variant]}`}>
            <div className='w-full lg:w-1/2 bg-worldMap bg-no-repeat bg-center bg-auto flex flex-col justify-between'>
                <div className='w-full h-[200px] flex gap-0 lg:gap-10'>
                    <div className='min-w-[180px] lg:min-w-[220px] h-[200px] p-5 flex flex-col justify-between animate-slideLeftIn'>
                        <div className='w-full h-[80px] flex items-center justify-center'>
                            <p className='text-4xl lg:text-[68px] text-lightBGText font-tertiary'>
                                {isVisible && <CountUp
                                    start={0}
                                    end={300}
                                    duration={10000000}
                                    isDecimal={false}
                                    className="text-4xl lg:text-[68px] text-lightBGText font-tertiary"
                                />}
                                <span className={`${textVariant[variant]}`}>k+</span></p>
                        </div>
                        <div className='w-full h-[68px] py-2.5 flex items-center justify-center'>
                            <p className='text-lightBGText text-center drop-shadow-md'>Victims of <br /> Phishing</p>
                        </div>
                    </div>
                    <div className='min-w-[180px] lg:min-w-[220px] h-[200px] p-5 flex flex-col justify-between animate-slideRightIn'>
                        <div className='w-full h-[80px] flex items-center justify-center'>
                            <p className='text-4xl lg:text-[68px] text-lightBGText font-tertiary'>
                                {isVisible && <CountUp
                                    start={0}
                                    end={2.7}
                                    duration={10000000}
                                    isDecimal={true}
                                    startText={'$'}
                                    endText={''}
                                    className="text-4xl lg:text-[68px] text-lightBGText font-tertiary"
                                />}
                                <span className={`${textVariant[variant]}`}>B+</span></p>
                        </div>
                        <div className='w-full h-[68px] py-2.5 flex items-center justify-center'>
                            <p className='text-lightBGText text-center drop-shadow-md'>Damage from Business Email Compromised</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[200px] flex gap-0 lg:gap-10'>
                    <div className='min-w-[180px] lg:min-w-[220px] h-[200px] p-5 flex flex-col justify-between animate-slideLeftIn'>
                        <div className='w-full h-[80px] flex items-center justify-center'>
                            <p className='text-4xl lg:text-[68px] text-lightBGText font-tertiary'>
                                {isVisible && <CountUp
                                    start={0}
                                    end={3.3}
                                    duration={10000000}
                                    isDecimal={true}
                                    startText={'$'}
                                    endText={''}
                                    className="text-4xl lg:text-[68px] text-lightBGText font-tertiary"
                                />}
                                <span className={`${textVariant[variant]}`}>B+</span></p>
                        </div>
                        <div className='w-full h-[68px] py-2.5 flex items-center justify-center'>
                            <p className='text-lightBGText text-center drop-shadow-md'>Lost in Investment Scams</p>
                        </div>
                    </div>
                    <div className='min-w-[180px] lg:min-w-[220px] h-[200px] p-5 flex flex-col justify-between animate-slideRightIn'>
                        <div className='w-full h-[80px] flex items-center justify-center'>
                            <p className='text-4xl lg:text-[68px] text-lightBGText font-tertiary'>
                                {isVisible && <CountUp
                                    start={0}
                                    end={40}
                                    duration={10000000}
                                    isDecimal={false}
                                    className="text-4xl lg:text-[68px] text-lightBGText font-tertiary"
                                />}
                                <span className={`${textVariant[variant]}`}>k+</span></p>
                        </div>
                        <div className='w-full h-[68px] py-2.5 flex items-center justify-center'>
                            <p className='text-lightBGText text-center drop-shadow-md'>Victims of Online Extortion</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex items-center justify-center'>
                <div className='w-full lg:w-[480px] py-0 px-0 lg:px-[50px] flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                    <h3 className='text-[52px] text-lightBGText font-light pb-5 animate-fadeIn hidden lg:inline-block'>Stay Ahead Of Cyber Attacks</h3>
                    <h3 className='text-2xl text-lightBGText font-light pb-5 animate-fadeIn visible lg:hidden'>Stay Ahead Of Cyber Attacks</h3>
                    <Button variant='contained' size='medium' className={`${btnVariants[variant]}`} asChild>
                        <Link href={"/get_started"}>
                            Take Action Today
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StayAhead;