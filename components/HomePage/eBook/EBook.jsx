"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { eBookData } from '@/utils/mock/dummyData';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { customEBookSliderOption } from '@/utils/helper/customSliderRules';
import Link from 'next/link';

const EBook = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const splideRef = useRef(null);

    useEffect(() => {
        const splideInstance = splideRef.current.splide;
        if (splideInstance) {
            splideInstance.on('moved', () => {
                setCurrentItemIndex(splideInstance.index);
            });
        }
    }, [splideRef.current]);


    const handleNext = () => {
        if (splideRef.current) {
            const splideInstance = splideRef.current.splide;
            const totalSlides = splideInstance.length;

            if (splideInstance.index === totalSlides - 1) {
                splideInstance.go(0);
            } else {
                splideInstance.go('+1');
            }
        }
    };

    const handlePrevious = () => {
        if (splideRef.current) {
            const splideInstance = splideRef.current.splide;
            const totalSlides = splideInstance.length;

            if (splideInstance.index === 0) {
                splideInstance.go(totalSlides - 1);
            } else {
                splideInstance.go('-1');
            }
        }
    };
    return (
        <section className='flex items-center justify-center px-3'>
            <div className='ebookContainer'>
                <Splide options={customEBookSliderOption} ref={splideRef}>
                    {eBookData?.map((data, index) => (
                        <SplideSlide key={index}>
                            <div className={`ebookContent flex flex-col md:flex-row justify-center items-center md:gap-10 gap-0 md:px-12 px-3 py-2 md:py-5 mx-auto ${index !== currentItemIndex && 'hidden'}`}>
                                <div className='ebookImg flex justify-center'>
                                    <Image src={data?.img} alt={data?.alt} width={148} height={201} />
                                </div>
                                <div className='ebookText'>
                                    <h3>{data?.text}</h3>
                                    <Link href={data?.link} target='_blank'>
                                        <button>{data?.button}</button>
                                    </Link>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                <div className='ebookController flex items-center justify-center gap-2 md:gap-5'>
                    <span className='leftEBookController cursor-pointer text-lightBlack hover:rounded-full hover:bg-lightWhite p-1' onClick={handlePrevious}>
                        <HiChevronLeft className='w-5 md:w-8 h-5 md:h-8' />
                    </span>
                    <h4 className='md:text-lg text-sm text-lightBlack'>{currentItemIndex + 1}/{eBookData?.length}</h4>
                    <span className='rightEBookController cursor-pointer text-lightBlack hover:rounded-full hover:bg-lightWhite p-1' onClick={handleNext}>
                        <HiChevronRight className='w-5 md:w-8 h-5 md:h-8' />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default EBook;