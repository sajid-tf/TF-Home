import React from 'react';
import { GoShieldCheck } from "react-icons/go";

const WeManageCard = ({ title, renderedData, numberOfCard = 4, variant = 'tertiary', cardWidth = 'normal' }) => {
    const topBorderVariant = {
        primary: 'border-sky',
        secondary: 'border-secondary',
        tertiary: 'border-purpleTwo',
        redThree: 'border-redThree',
        yellow: 'border-yellow',
        yellowTwo: 'border-yellowTwo',
    }
    const outerLightColorVariant = {
        primary: 'bg-sky/20  ',
        secondary: 'bg-secondary/20  ',
        tertiary: 'bg-purpleTwo/20 ',
        redThree: 'bg-redThree/20 ',
        yellow: 'bg-yellow/20 ',
        yellowTwo: 'bg-yellowTwo/20 ',
    }
    const innerDeepColorVariant = {
        primary: 'bg-sky',
        secondary: 'bg-secondary',
        tertiary: 'bg-purpleTwo',
        redThree: 'bg-redThree',
        yellow: 'bg-yellow',
        yellowTwo: 'bg-yellowTwo',
    }
    const numberOfCards = {
        1: 'grid grid-cols-1 gap-2 lg:gap-5',
        2: 'grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5',
        3: 'grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-5',
        4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 lg:gap-x-5 gap-y-20 lg:gap-y-24',
        5: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-0 lg:gap-x-5 gap-y-20 lg:gap-y-24'
    }
    const cardWidthWithPadding = {
        normal: 'w-[275px] px-10',
        small: 'w-[216px] px-5'
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <h3 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold text-center max-w-[850px] mx-auto' dangerouslySetInnerHTML={{ __html: title ? title : "Cybersecurity We Manage" }}></h3>
            <div className='flex items-center justify-center pt-[80px]'>
                <div className={`${numberOfCards[numberOfCard]}`}>
                    {renderedData?.map((data, index) => (
                        <div className={`${cardWidthWithPadding[cardWidth]} min-h-fit lg:min-h-fit border-t-4 ${topBorderVariant[variant]} pt-[80px] pb-[60px] relative cursor-pointer hover:-translate-y-5 transition-transform duration-500 ease-in-out hover:shadow-md`} key={index}>
                            <div className={`w-[106px] h-[106px] rounded-full ${outerLightColorVariant[variant]} flex items-center justify-center absolute -top-14 left-1/2 -translate-x-1/2 translate-transform`}>
                                <div className={`w-[78px] h-[78px] rounded-full ${innerDeepColorVariant[variant]}  shadow-sm flex items-center justify-center`}>
                                    <div className='text-5xl text-strongWhite'>
                                        {data?.icon ? data?.icon : <GoShieldCheck className='h-full w-full text-white' />}
                                    </div>
                                </div>
                            </div>
                            <h4 className='text-lg lg:text-2xl text-lightBGText font-tertiary font-bold'>{data?.title}</h4>
                            <p className='text-lightBGText font-tertiary pt-5'>
                                {data?.paragraph}
                            </p>
                        </div>))}
                </div>
            </div>
        </div>
    );
};

export default WeManageCard;