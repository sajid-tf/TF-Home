import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React from 'react';

const ExpertInstructors = ({ img, title, paraOne, paraTwo, variant = 'red' }) => {
    const colorVariants = {
        primary: 'border-l-4 border-sky lg:border-l-0',
        secondary: 'border-l-4 border-secondary lg:border-l-0',
        red: 'border-l-4 border-redThree lg:border-l-0',
    }
    return (
        <div className='w-[360px] h-fit lg:w-[1200px] lg:h-[600px] mx-auto'>
            <div className='w-full h-full flex flex-col lg:flex-row items-center'>
                <div className='w-full lg:w-1/2'>
                    <Image src={img ? img : globalImages?.exportInstructorBG} alt='Expert Instructors' className='w-full h-fit' />
                </div>
                <div className='w-full lg:w-1/2 p-5 lg:p-10 flex flex-col items-center justify-center'>
                    <div className={`${colorVariants[variant]}`}>
                        <h3 className='text-xl lg:text-4xl text-lightBGText font-tertiary font-bold pl-2 lg:pl-0 pr-10'>{title ? title : "Our Instructors Are Industry Expert"}</h3>
                    </div>
                    <div className='flex flex-col items-start gap-4 pt-5'>
                        <p className='text-sm lg:text-base font-tertiary text-lightBGText text-justify'>
                            {paraOne ? paraOne : "Para One"}
                        </p>
                        <p className='text-sm lg:text-base font-tertiary text-lightBGText text-justify'>
                            {paraTwo ? paraTwo : "Para Two"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertInstructors;