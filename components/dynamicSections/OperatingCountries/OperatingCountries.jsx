import Image from 'next/image';
import React from 'react';

const OperatingCountries = ({ title, variant = 'secondary', renderedData }) => {
    const iconVariant = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        sky: 'text-skyThree',
        green: 'text-green',
        red: 'text-redThree',
        purple: 'text-purpleThree'
    }
    return (
        <div className='w-[360px] md:w-[1200px] h-fit mx-auto'>
            <h3 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold text-center pb-14'>{title ? title : 'Countries We Are Operating'}</h3>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5'>
                    {renderedData?.map((item, index) => (
                        <div key={index} className='hover:-translate-y-5 translate-transform duration-500 ease-linear'>
                            <div className='w-full lg:w-[224px] h-fit lg:h-[500px]'>
                                <Image src={item?.flagImg} alt={item?.alt} className='w-fit h-fit rounded-md shadow-xl' />
                            </div>
                            <div className='flex flex-col items-center justify-center pt-5 gap-4'>
                                <div className={`text-2xl lg:text-5xl ${iconVariant[variant]}`}>
                                    {item?.locationIcon}
                                </div>
                                <h6 className='text-base lg:text-2xl text-lightBGText font-tertiary font-bold uppercase'>{item?.country}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OperatingCountries;