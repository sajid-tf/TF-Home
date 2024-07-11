'use client';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { productClientSaysData } from '@/utils/mock/dummyData';
import { customClientSaysSliderOption } from '@/utils/helper/customSliderRules';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ProductSaysSlider = () => {
    return (
        <Fragment>
            <Splide options={customClientSaysSliderOption}>
                {productClientSaysData.map((item, index) => (
                    <SplideSlide className={`w-full h-fit lg:w-[1100px] lg:h-[360px] border-t-2 border-r-2 border-${item?.color} flex items-center justify-center rounded-lg p-4 md:p-5`} key={index + 1}>
                        <div className='w-full h-full bg-white rounded-lg z-40 flex flex-col lg:flex-row items-center justify-center shadow-sm p-3 md:p-5'>
                            <div className={`w-full lg:w-1/4 h-full border-b-2 border-l-2 border-${item?.color} rounded-lg flex flex-col items-center justify-center py-3 md:py-5`}>
                                <div className='w-[127px] h-[127px] mx-auto'>
                                    <Image src={JSON.parse(JSON.stringify(item?.img))} alt={item?.alt} className='w-fit h-fit' />
                                </div>
                                <div className='pt-3 flex flex-col items-center justify-center'>
                                    <h3 className='text-primary text-xl font-semibold text-center'>{item?.name}</h3>
                                    <h4 className='text-secondary text-lg text-center'>{item?.designation}</h4>
                                </div>
                            </div>
                            <div className='w-full lg:w-3/4 h-full md:px-10'>
                                <div className='p-3'>
                                    <Image src={JSON.parse(JSON.stringify(item?.serviceLogo))} alt={item?.serviceLogoAlt} height={40.09} width={114.798} />
                                    <div className='pt-2'>
                                        <p className='text-sm text-lightBlack text-justify'><span className='text-secondary text-2xl mr-1'>“</span>
                                            {item?.clientSays}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>))}
            </Splide>
        </Fragment>
    );
};

export default ProductSaysSlider;