import React from 'react';

const WeWorkGridSection = ({ title, desc, renderedData, variant = 'secondaryTwo' }) => {
    const lightBGColor = {
        primary: 'w-[53px] h-full bg-sky/10',
        secondary: 'w-[53px] h-full bg-secondary/10',
        tertiary: 'w-[53px] h-full bg-purpleTwo/10',
        redThree: 'w-[53px] h-full bg-redThree/10',
        yellow: 'w-[53px] h-full bg-yellow/10',
        secondaryTwo: 'w-[53px] h-full bg-secondaryTwo/10'
    }
    const deepBGColor = {
        primary: 'w-[78px] h-[78px] flex items-center justify-center rounded-full bg-sky absolute top-4 left-3',
        secondary: 'w-[78px] h-[78px] flex items-center justify-center rounded-full bg-secondary absolute top-4 left-3',
        tertiary: 'w-[78px] h-[78px] flex items-center justify-center rounded-full bg-purpleTwo absolute top-4 left-3',
        redThree: 'w-[78px] h-[78px] flex items-center justify-center rounded-full bg-redThree absolute top-4 left-3',
        yellow: 'w-[78px] h-[78px] flex items-center justify-center rounded-full bg-yellow absolute top-4 left-3',
        secondaryTwo: 'w-[78px] h-[78px] flex items-center justify-center rounded-full bg-secondaryTwo absolute top-4 left-3'
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <div className='flex  flex-col gap-5'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <h1 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold'>{title ? title : 'How We Work'}</h1>
                    {desc && <p className='text-lightBGText font-tertiary text-justify lg:text-center' dangerouslySetInnerHTML={{ __html: desc ? desc : "Description" }}></p>}
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {renderedData?.map((item, index) => (
                        <div className='w-full lg:w-[600px] min-h-[220px] pt-10 pb-2.5 px-0 flex' key={index}>
                            <div className='w-[106px] relative'>
                                <div className={`${lightBGColor[variant]}`}></div>
                                <div className={`${deepBGColor[variant]}`}>
                                    <span className='text-5xl text-strongWhite'>{item?.id}</span>
                                </div>
                            </div>
                            <div className='w-full lg:w-[494px] px-6 lg:px-10 py-0'>
                                <h5 className='text-lg lg:text-2xl text-lightBGText font-bold font-tertiary'>{item?.title}</h5>
                                <p className='text-lightBGText font-tertiary text-justify pt-4'
                                    dangerouslySetInnerHTML={{ __html: item?.description }}></p>
                            </div>
                        </div>))}
                </div>
            </div>
        </div>
    );
};

export default WeWorkGridSection;