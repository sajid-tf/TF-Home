'use client'
import { featuredSliderOption } from '@/utils/helper/customSliderRules'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import React, { Fragment } from 'react'

const FeaturedInSection = ({ isTitle, title, renderedData, variants = 'default' }) => {
    const titleVariants = {
        primary: 'text-primary text-4xl font-primary font-thin',
        secondary: 'text-secondary text-4xl font-primary font-thin',
        red: 'text-redThree text-4xl font-primary font-thin',
        default: 'text-4xl font-primary font-thin'
    }
    const borderVariants = {
        primary: 'w-[1px] h-1/2 mr-[30px] bg-primary/30 hidden lg:inline-block',
        secondary: 'w-[1px] h-1/2 mr-[30px] bg-secondary/30 hidden lg:inline-block',
        red: 'w-[1px] h-1/2 mr-[30px] bg-redThree/30 hidden lg:inline-block',
        default: 'w-[1px] h-1/2 mr-[30px] bg-black/30 hidden lg:inline-block'
    }
    return (
        <div className='bg-white w-full shadow-sm'>
            <div className='lg:flex items-center justify-center gap-5 mx-auto w-[360px] h-fit lg:h-36 lg:w-[1200px]'>
                {isTitle && (
                    <Fragment>
                        <div className='w-1/6 hidden lg:inline-block'>
                            <h2 className={`${titleVariants[variants]}`}>{title ? title : "Featured In"}</h2>
                        </div>
                        <span className={`${borderVariants[variants]}`}></span>
                    </Fragment>
                )}
                <div className='w-5/6 hidden lg:inline-block'>
                    <Splide options={featuredSliderOption}>
                        {renderedData?.map((data, index) => (
                            <SplideSlide key={index + 1} className='flex items-center justify-evenly'>
                                <Image src={data?.img} alt={data?.alt} className='cursor-pointer' />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
                <div className='grid grid-cols-3 items-start justify-between gap-8 py-10 visible lg:hidden px-2'>
                    {renderedData?.map((data, index) => (
                        <div key={index + 1} className='flex items-center justify-center'>
                            <Image src={data?.img} alt={data?.alt} className='cursor-pointer' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedInSection