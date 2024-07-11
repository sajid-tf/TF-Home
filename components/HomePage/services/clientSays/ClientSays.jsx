"use client";
import { clientSaysData } from '@/utils/mock/dummyData';
import Image from 'next/image';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { customClientSaysSliderOption, paginationStyle } from '@/utils/helper/customSliderRules';
import clientSaysLine from '@/assets/clientSays/union.png';

const ClientSays = () => {
    return (
        <div className='w-[360px] lg:w-full clientSays flex flex-col lg:flex-row item-center justify-between gap-8 lg:gap-0 mx-auto my-20 px-2 lg:px-0'>
            <div className='clientSaysHeadline'>
                <h4 className='text-primary text-center'>What Our Clients <br /> Says About Our Services</h4>
            </div>
            <Image src={clientSaysLine} alt='clientSaysLine' className='mr-10 hidden lg:inline-block' />
            <div className='w-full lg:w-2/3 p-2'>
                <style jsx global>{`
                        ${Object.entries(paginationStyle).map(([selector, style]) => (
                    `${selector} {
                            ${Object.entries(style).map(([property, value]) => (
                        `${property}: ${value};`
                    )).join('\n')}
                        }`
                )).join('\n')}
                        `}</style>
                <Splide options={customClientSaysSliderOption}>
                    {clientSaysData?.map((data, index) => (
                        <SplideSlide key={index + 1}>
                            <div className='flex items-center gap-5 cursor-pointer'>
                                <Image src={data?.img} alt={data?.alt} height={80} width={80} className='clientImg' />
                                <div>
                                    <h5 className='text-lg text-primary font-semibold'>{data?.name}</h5>
                                    <p className='text-md text-secondary font-semibold'>{data?.designation}</p>
                                </div>
                            </div>
                            <div className='px-0 lg:px-10 py-5'>
                                <p className='text-sm text-lightBlack text-justify'><span className='text-secondary text-2xl'>“</span> {data?.clientSays}</p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default ClientSays;