'use client'
import Image from 'next/image';
import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const HappyClient = ({ title, renderedData, variant = 'sky' }) => {
    const [showMore, setShowMore] = React.useState(false)
    const borderVariant = {
        primary: 'border-primary',
        secondary: 'border-secondary',
        sky: 'border-skyThree',
        yellow: 'border-yellowThree',
        red: 'border-redThree',
        purple: 'border-purpleThree',
        green: 'border-green',
    }
    const textColorVariant = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        sky: 'text-skyThree',
        yellow: 'text-yellowThree',
        red: 'text-redThree',
        purple: 'text-purpleThree',
        green: 'text-green',
    }
    const upperBorderColorVariant = {
        primary: 'border-primary/20',
        secondary: 'border-secondary/20',
        sky: 'border-skyThree/20',
        yellow: 'border-yellowThree/20',
        red: 'border-redThree/20',
        purple: 'border-purpleThree/20',
        green: 'border-green/20'
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <div className={`w-full h-[48px] border-r-0 lg:border-r-[600px] border-l-[40px] p-2.5 ${upperBorderColorVariant[variant]}`}>
                <h4 className={`text-lg lg:text-2xl font-tertiary font-bold ${textColorVariant[variant]}`}>{title ? title : 'Business Cybersecurity'}</h4>
            </div>
            <div className='pt-[28px] grid grid-cols-1 lg:grid-cols-2 gap-y-[18px]'>
                {renderedData?.filter((item, index) => showMore ? index < renderedData?.length : index < 4)?.map((item, index) => (
                    <div key={index} className='w-full lg:w-[600px] min-h-[200px] py-5'>
                        <div className='w-full h-full flex hover:scale-105 translate-transform duration-500 ease-linear'>
                            <div className={`w-[160px] border-l-[50px] relative ${borderVariant[variant]}`}>
                                <div className='w-[140px] h-[140px] absolute -left-8 top-1/2 transform -translate-y-1/2'>
                                    <Image src={item?.img} alt={item?.alt} className='w-full h-full rounded-full shadow-md hover:shadow-xl hover:scale-110 translate-transform duration-300 ease-linear' />
                                </div>
                            </div>
                            <div className='w-full pl-14 flex flex-col items-start justify-center'>
                                <h4 className='text-md lg:text-2xl font-bold font-tertiary text-lightBGText'>{item?.clientName}</h4>
                                <h5 className='text-sm lg:text-lg font-medium font-tertiary text-lightBGText lg:pr-5'>{item?.designation}</h5>
                                <h5 className='text-sm lg:text-lg font-medium font-tertiary text-lightBGText'>{item?.location}</h5>
                            </div>
                        </div>
                    </div>))}
            </div>
            {renderedData?.length > 4 && <div className='flex items-center justify-center pt-3'>
                <div className='min-w-[151px] min-h-[75px] py-2.5 px-10 cursor-pointer' onClick={() => setShowMore(!showMore)}>
                    <p className={`${textColorVariant[variant]} text-lg capitalize font-tertiary font-bold`}>{showMore ? "Show Less" : "Show All"}</p>
                    <div className={`text-3xl flex items-center justify-center ${textColorVariant[variant]}`}>
                        {showMore ? <IoMdArrowDropup className='text-full' /> : <IoMdArrowDropdown className='text-full' />}
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default HappyClient;