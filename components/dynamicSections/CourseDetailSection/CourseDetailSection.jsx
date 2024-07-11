import { Button } from '@/components/common';
import { CourseDetailSVG } from '@/utils/svg/SVGImg';
import Link from 'next/link';
import React from 'react';
import { SlArrowRight } from "react-icons/sl";


const CourseDetailSection = ({ title, desc, btnTxt, variant = 'secondary', btnUrl = '/' }) => {
    const fillColorVariant = {
        primary: '#4285F4',
        secondary: '#5BBC2E',
        redThree: '#FF2B38',
    };
    return (
        <div className='w-[360px] lg:w-[1110px] h-fit mx-auto py-14 px-12 flex flex-col lg:flex-row gap-4 lg:gap-12 hover:shadow-2xl hover:translate-transform duration-700 ease-out rounded-lg relative overflow-hidden'>
            <div className='w-full lg:w-4/6'>
                <h3 className='text-4xl text-lightBGText font-tertiary font-bold drop-shadow-lg'>{title ? title : "Course Details"}</h3>
                <p className='text-base text-lightBGText font-tertiary text-justify pt-4'>
                    {desc ? desc : "Description of the course"}
                </p>
                <div className='w-[185px] h-[182px] -rotate-[130.495deg] absolute -left-36 bottom-0 corner-color'>
                    <CourseDetailSVG fillColor={`${fillColorVariant[variant]}`} />
                </div>
                <div className='w-[185px] h-[182px] -rotate-[130.495deg] absolute -top-16 left-[450px] corner-color'>
                    <CourseDetailSVG fillColor={`${fillColorVariant[variant]}`} />
                </div>
                <div className='w-[185px] h-[182px] -rotate-[130.495deg] absolute top-5 right-52 corner-color z-0'>
                    <CourseDetailSVG fillColor={`${fillColorVariant[variant]}`} />
                </div>
            </div>
            <div className='w-full lg:w-2/6 flex items-center justify-center z-50'>
                <Button
                    asChild
                    rightMove
                    variant='contained'
                    color={variant}
                    endIcon={<SlArrowRight className='text-lg' />}
                    className='active:scale-90 mt-6'
                >
                    <Link href={btnUrl ? btnUrl : "https://techforing.com/academy/download/CCSP_Course_Outline.pdf"} target='_blank'>
                        {btnTxt ? btnTxt : "Download Curriculum"}
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default CourseDetailSection;