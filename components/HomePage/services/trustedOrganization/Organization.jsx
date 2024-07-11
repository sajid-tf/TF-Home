'use client';
import Image from 'next/image';
import React from 'react';
import { organizationSliderOption } from '@/utils/helper/customSliderRules';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Organization = ({ title, isTitle = true, variant = 'homePage', BGColor = 'transparent', renderedData }) => {
    const titleVariant = {
        homePage: 'text-primary text-lg lg:text-2xl text-center pb-10'
    }
    const BGVariant = {
        light: 'lg:flex items-center justify-evenly hidden bg-lightWhite',
        transparent: 'lg:flex items-center justify-evenly hidden'
    }
    return (
        <div className='w-full px-2 lg:w-[1200px] mx-auto organization'>
            {
                isTitle &&
                <div>
                    {
                        title ? title : <h4 className={`${titleVariant[variant]}`}>Trusted By WORLD’S Top Organizations</h4>
                    }
                </div>
            }
            <div className={`${BGVariant[BGColor]}`}>
                <Splide options={organizationSliderOption}>
                    {renderedData?.map((data, index) => (
                        <SplideSlide key={index} className='flex items-center justify-evenly py-8'>
                            <Image src={data?.img} alt={data?.name || 'image'} className='orgImg' />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div className='grid grid-cols-6 md:grid-cols-2 md:gap-y-8 gap-4 items-center justify-center lg:hidden'>
                {renderedData?.map((data, index) => (
                    <div key={index} className='flex items-center justify-center'>
                        <Image src={data?.img} alt={data?.name || 'image'} className='orgImg' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Organization;