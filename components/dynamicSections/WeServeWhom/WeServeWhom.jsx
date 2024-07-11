"use client";
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import highNetIndividual from '@/public/Images/whom-we-serve/high-net-worth-person.jpg';
import Button from '@/components/common/Button';
import Link from "next/link";

const WeServeWhom = ({ variant = 'green', title, renderedData }) => {
    const [hoveredItem, setHoveredItem] = React.useState(null)
    const bgColorVariant = {
        primary: 'bg-sky/85',
        secondary: 'bg-secondary/85',
        tertiary: 'bg-purpleTwo/85',
        redThree: 'bg-redThree/85',
        green: 'bg-green/85',
        yellowTwo: 'bg-yellowTwo/85',
    }
    const heightExpand = {
        full: 'h-[450px] lg:h-[450px]',
        half: 'h-[132px] lg:h-[150px]',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <h4 className='text-2xl lg:text-4xl text-lightBGText font-tertiary text-center lg:text-left font-bold pb-[42px]'>{title ? title : "Whom We Serve"}</h4>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    {renderedData?.map((item, index) => (
                        <div
                            key={index}
                            className='w-[300px] h-[600px] relative'
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className={`w-full h-full ${hoveredItem === index ? 'opacity-100' : 'opacity-80'} shadow-lg transition-transform duration-700 ease-in-out`}
                                style={{
                                    backgroundImage: `url(${item?.image ? item?.image?.src : highNetIndividual?.src})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></div>
                            <div className={`w-full ${hoveredItem === index ? heightExpand?.full : heightExpand?.half} ${bgColorVariant[variant]} overflow-hidden absolute bottom-0 flex flex-col items-start gap-10 lg:gap-6 pt-[60px] pb-5 px-5 transition-height duration-700 ease-in-out`}>
                                <h6 className='text-xl lg:text-2xl text-strongWhite font-tertiary font-bold' dangerouslySetInnerHTML={{ __html: item?.title ? item?.title : "Title" }}></h6>
                                <p className='text-base text-strongWhite font-tertiary text-justify'>
                                    {item?.desc ? item?.desc : "Description"}
                                </p>

                                {
                                    item?.url &&
                                    <Button variant="text" rightMove size='medium' color={variant} className="w-fit p-0 bg-transparent md:text-white hover:text-white" asChild endIcon={<FaArrowRightLong className='size-4 text-white' />}>
                                        <Link href={item.url} target="_blank">
                                            Explore More
                                        </Link>
                                    </Button>
                                }
                            </div>
                        </div>))}
                </div>
            </div>
        </div >
    );
};

export default WeServeWhom;