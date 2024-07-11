"use client";
import React, { useState } from 'react';
import WhatWeAccessCard from '@/components/common/WhatWeAccessCard/WhatWeAccessCard';

const WhatWeAccess = ({ headline, subHeadline, renderedData, noOfGrid = 4, isBigWidthCard = false }) => {
    const [activeItem, setActiveItem] = useState(`${renderedData[0].id}: ${renderedData[0].title}`);
    const [rotate, setRotate] = useState(false);
    const gridNumber = {
        3: 'grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-2 lg:grid-cols-4',
    }
    return (
        <div className='lg:w-[1200px] w-full mx-auto px-3 md:px-0 justify-center hidden md:flex'>
            <div className='lg:w-7/12 flex flex-col items-start justify-center'>
                <h2 className='text-xl lg:text-4xl font-tertiary font-bold text-lightBGText pb-8 pt-5 lg:pt-0' dangerouslySetInnerHTML={{ __html: headline ? headline : "Headline" }}></h2>
                {
                    subHeadline && <h6 className='text-lg lg:text-[16px] font-tertiary  text-lightBGBodyText pb-5 pt-5 lg:pt-0' dangerouslySetInnerHTML={{ __html: subHeadline ? subHeadline : 'Sub Headline' }}></h6>
                }
                <div className={`lg:w-[620px] grid ${gridNumber[noOfGrid]} gap-5`}>
                    {renderedData?.map((item) => (
                        <div
                            key={item?.id}
                            onClick={() => {
                                setActiveItem(`${item?.id}: ${item?.title}`);
                                setRotate(!rotate);
                            }}
                        >
                            <WhatWeAccessCard
                                title={item?.title}
                                icon={item?.icon}
                                activeItem={activeItem === `${item?.id}: ${item?.title}` ? true : false}
                                isBigWidthCard={isBigWidthCard}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-5/12 lg:flex items-center justify-center relative hidden'>
                <div className={`w-[500px] h-[500px] bg-redThree rounded-[100px] ${rotate ? 'rotate-[9.456deg] transition-transform duration-700 ease-in-out' : '-rotate-[3.456deg] transition-transform duration-700 ease-in-out'}`}></div>
                <div className='w-[500px] h-[500px] bg-strongWhite absolute rounded-[100px] rotate-[3.752deg] border-2 border-redThree flex items-center justify-center p-10'>
                    {renderedData?.filter((item) => activeItem === `${item?.id}: ${item?.title}`).map((item) => (
                        <div className='flex flex-col items-start gap-5 p-2.5 relative -rotate-[3.752deg]' key={item?.id}>
                            <h4 className={`text-2xl font-bold font-tertiary text-lightBGText ${activeItem === `${item?.id}: ${item?.title}` ? 'animate-slide-in' : ''}`}>{item?.heading}</h4>
                            <p className={`text-lightBGText text-base font-tertiary text-justify ${activeItem === `${item?.id}: ${item?.title}` ? 'animate-slide-in' : ''}`}>{item?.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeAccess;