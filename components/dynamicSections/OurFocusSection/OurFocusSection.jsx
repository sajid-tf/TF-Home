import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";

const OurFocusSection = ({ title, smallTitle, desc, lowerTitle, img, renderedData, variant = 'redThree' }) => {
    const outerRoundVariant = {
        primary: 'w-[28px] lg:w-[44px] h-[28px] lg:h-[44px] flex items-center justify-center rounded-full bg-sky/10 relative z-50',
        secondary: 'w-[28px] lg:w-[44px] h-[28px] lg:h-[44px] flex items-center justify-center rounded-full bg-secondary/10 relative z-50',
        redThree: 'w-[28px] lg:w-[44px] h-[28px] lg:h-[44px] flex items-center justify-center rounded-full bg-redThree/10 relative z-50',
    }
    const innerRoundVariant = {
        primary: 'w-4 lg:w-6 h-4 lg:h-6 rounded-full bg-sky/30',
        secondary: 'w-4 lg:w-6 h-4 lg:h-6 rounded-full bg-secondary/30',
        redThree: 'w-4 lg:w-6 h-4 lg:h-6 rounded-full bg-redThree/30',
    }
    const markColorVariant = {
        primary: 'text-sky text-2xl lg:text-4xl absolute top-0 left-0 lg:left-2',
        secondary: 'text-secondary text-2xl lg:text-4xl absolute top-0 left-0 lg:left-2',
        redThree: 'text-redThree text-2xl lg:text-4xl absolute top-0 left-0 lg:left-2',
    }
    const rightCornerShape = {
        primary: 'h-full w-[44px] lg:w-[67px] bg-sky absolute right-0 z-0',
        secondary: 'h-full w-[44px] lg:w-[67px] bg-secondary absolute right-0 z-0',
        redThree: 'h-full w-[44px] lg:w-[67px] bg-redThree absolute right-0 z-00',
    }
    const borderLineVariant = {
        primary: 'border-sky',
        secondary: 'border-secondary',
        redThree: 'border-redThree',
    }
    const scrollbarColorVariant = {
        primary: '#4285F4 rgb(66 133 244 / 30%)',
        secondary: '#5BBC2E rgb(91 188 46 / 30%)',
        redThree: '#FF2B38 rgb(255 43 56 / 30%)',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] mx-auto'>
            <div className='flex flex-col items-start gap-6'>
                <div className='h-[42px] flex flex-col lg:flex-row items-start lg:items-end justify-start gap-3 lg:gap-6'>
                    <h4 className={`text-xl lg:text-4xl text-lightBGText font-tertiary font-bold capitalize border-b-4 lg:border-none ${borderLineVariant[variant]}`}>{title ? title : "Our Focus"}</h4>
                    <div className={`h-full border-r-4 ${borderLineVariant[variant]} hidden lg:inline`}></div>
                    <h5 className='text-base lg:text-2xl text-lightBGText font-tertiary font-bold capitalize'>{smallTitle ? smallTitle : "Pen Testing That Leaves No Stones Unturned"}</h5>
                </div>
                <p className='text-base text-lightBGText font-tertiary text-justify pt-4 lg:pt-0'>{desc ? desc : "Description"}</p>
                <h6 className='text-base lg:text-lg text-lightBGText font-tertiary font-normal lg:font-semibold capitalize'>{lowerTitle ? lowerTitle : "Our Penetration Testing Services Focus on:"}</h6>
            </div>
            <div className='w-full h-[456px] gap-12 hidden lg:flex'>
                <div className='w-7/12 overflow-y-auto'
                    style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: `${scrollbarColorVariant[variant]}`,
                    }}>
                    {renderedData?.map(item => (
                        <div className='w-full min-h-[84px] relative flex items-center' key={item?.id}>
                            <div className={`${outerRoundVariant[variant]}`}>
                                <div className={`${innerRoundVariant[variant]}`}>
                                    <IoCheckmarkSharp className={`${markColorVariant[variant]}`} />
                                </div>
                            </div>
                            <div className='min-h-[64px] w-[620px] absolute right-5 rounded-full bg-secondaryLightBG z-0 py-5 px-10'>
                                <p className='text-base text-lightBGText font-tertiary'>{item?.title}</p>
                            </div>
                        </div>))}
                </div>
                <div className='w-5/12 flex items-center justify-start relative'>
                    <div className='w-[453px] h-[416px] z-50'>
                        <Image src={img ? img : globalImages?.ourFocusImg} alt="Our Focus" className='h-full w-full' />
                    </div>
                    <div className={`${rightCornerShape[variant]}`}></div>
                </div>
            </div>
            <div className='w-full visible lg:hidden mt-4'>
                <div className='w-full h-[320px] flex items-center justify-start relative'>
                    <div className='w-[340px] h-[270px] z-50'>
                        <Image src={img ? img : globalImages?.ourFocusImg} alt="Our Focus" className='h-full w-full' />
                    </div>
                    <div className={`${rightCornerShape[variant]}`}></div>
                </div>
                <div className='w-full pt-8'>
                    {renderedData?.map(item => (
                        <div className='w-full flex items-center' key={item?.id}>
                            <div className={`${outerRoundVariant[variant]}`}>
                                <div className={`${innerRoundVariant[variant]}`}>
                                    <IoCheckmarkSharp className={`${markColorVariant[variant]}`} />
                                </div>
                            </div>
                            <div className='w-full min-h-[74px] relative flex items-center'>
                                <div className='min-h-[54px] w-[340px] absolute right-2 rounded-full bg-secondaryLightBG z-0 py-5 pl-6 pr-2'>
                                    <p className='text-xs text-lightBGText font-tertiary'>{item?.title}</p>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div >
    );
};

export default OurFocusSection;