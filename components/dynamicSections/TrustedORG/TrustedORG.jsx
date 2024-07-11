'use client'
import { TrustedOrgiesData } from '@/utils/mock/TrustedOrgiesData/TrustedOrgiesData';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const ITEMS_PER_PAGE = 24;
const TrustedORG = ({ variant = 'sky' }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const endIndex = (currentPage + 1) * ITEMS_PER_PAGE;

    const currentData = TrustedOrgiesData?.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const buttonVariant = {
        primary: 'bg-sky border border-sky hover:text-sky disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:scale-100',
        secondary: 'bg-secondaryTwo border border-secondaryTwo hover:text-secondaryTwo disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:scale-100',
        sky: 'bg-secondary border border-secondary hover:text-secondary disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:scale-100',
        yellow: 'bg-yellowThree border border-yellowThree hover:text-yellowThree disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:scale-100',
        purple: 'bg-purpleThree border border-purpleThree hover:text-purpleThree disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:scale-100',
        red: 'bg-redThree border border-redThree hover:text-redThree disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:scale-100',
        green: 'bg-green border border-green hover:text-green disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:scale-100',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-2 lg:grid-cols-6 items-center justify-center gap-3 lg:gap-8'>
                    {currentData?.map((item, index) => (
                        <div key={index} className='w-[166px] h-[166px] flex items-center justify-center p-5 hover:shadow-2xl hover:scale-105 translate-transform duration-300 ease-linear rounded-xl'>
                            <Image src={item?.orgImg} alt={item?.alt} className='w-fit h-fit rounded-xl' />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-3 mt-16">
                <button
                    className={`${buttonVariant[variant]} border hover:bg-transparent p-2 rounded-md shadow-xl text-strongWhite active:scale-125 transition-transform duration-300 ease-in-out`}
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                >
                    <IoChevronBackOutline className={`text-[32px]`} />
                </button>
                <button
                    className={`${buttonVariant[variant]} border hover:bg-transparent p-2 rounded-md shadow-xl text-strongWhite active:scale-125 transition-transform duration-300 ease-in-out`}
                    onClick={handleNextPage}
                    disabled={endIndex >= TrustedOrgiesData?.length}
                >
                    <IoChevronForwardOutline className={`text-[32px]`} />
                </button>
            </div>
        </div>
    );
};

export default TrustedORG;