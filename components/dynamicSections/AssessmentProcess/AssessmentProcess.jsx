"use client";
import React from 'react';
import bg from '@/assets/assessments/access-process.jpg';
import { AssessmentProcessData } from '@/utils/mock/AssessmentProcessData/AssessmentProcessData';
import { BiSolidUpArrow } from "react-icons/bi";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import Content from '@/components/common/Content';

const AssessmentProcess = () => {
    const [hovered, setHovered] = React.useState({ left: false, right: false })
    const [activeIndex, setActiveIndex] = React.useState(0)
    const iconColor = {
        white: 'text-strongWhite',
        light: 'text-lightBGText'
    }
    return (
        <div className='h-[464px] lg:h-[600px] mb-10 relative'
            style={{
                backgroundImage: `url(${bg?.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
            <div className='w-full h-full relative z-10 bg-[#F6F6F6]/5 backdrop-blur-sm'>
                <div className={`absolute w-[130px] lg:w-[422px] h-full bg-transparent sm-clip-path-right-chevron lg:clip-path-right-chevron z-0 ${`processChevronIndex-${activeIndex}`}`} style={{
                    backgroundImage: `url(${bg?.src})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}></div>
                <div className='relative z-100 flex justify-center text-center flex-col gap-2 pt-[51px]'>
                    <h3 className='text-base md:text-2xl lg:text-4xl text-strongWhite text-center font-tertiary font-bold drop-shadow-2xl relative z-100'>Our Risk Assessment Process</h3>
                    <Content className="text-strongWhite text-center max-w-[950px] mx-auto">TechForing's cyber security risk assessment can help companies of any scale, regardless of your protection sophistication level.Our risk assessment process follows the following model:</Content>
                </div>
                <div className='relative z-100 pt-10'>
                    <div className='flex items-center justify-center gap-2 lg:gap-6'>
                        {AssessmentProcessData?.map((item, index) => (
                            <div
                                key={index}
                                className={`relative lg:w-[220px] lg:h-[140px] ${activeIndex === index ? 'bg-redThree' : 'bg-strongWhite'}  rounded-lg shadow-xl cursor-pointer flex items-center justify-center`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className='flex flex-col items-center justify-center gap-3 p-3 lg:px-16'>
                                    <span>{React.cloneElement(item?.icon, {
                                        className: `text-[32px] ${activeIndex === index ? iconColor.white : iconColor.light}`
                                    })}</span>
                                    <h6 className={`h-[60px] text-lg font-tertiary hidden lg:inline-block ${activeIndex === index ? 'text-strongWhite' : 'text-lightBGText'} text-center`}>{item?.title}</h6>
                                </div>
                                {activeIndex === index && (
                                    <span className={`absolute -bottom-12 ${activeIndex === index ? 'rotate-transition' : ''}`}><BiSolidUpArrow style={{ color: '#fff', fontSize: '2rem' }} /></span>
                                )}
                                {activeIndex === index && (
                                    <div className={`w-[336px] lg:w-[1200px] h-fit py-3 px-5 bg-strongWhite shadow-xl rounded-lg absolute ${`processIndex-${activeIndex}`} -bottom-40 lg:-bottom-32`}>
                                        <p className='font-tertiary text-lightBGText'>{item?.desc}</p>
                                    </div>)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='absolute lg:flex items-center justify-center gap-5 bottom-10 left-1/2 transform -translate-x-1/2 hidden'>
                    <button
                        className='border p-2 hover:bg-strongWhite rounded-md shadow-xl cursor-pointer active:-translate-x-5 transition-transform duration-300 ease-in-out'
                        onMouseEnter={() => setHovered({ ...hovered, left: true })}
                        onMouseLeave={() => setHovered({ ...hovered, left: false })}
                        onClick={() => setActiveIndex(activeIndex === 0 ? AssessmentProcessData.length - 1 : activeIndex - 1)}
                    >
                        <IoChevronBackOutline style={{ color: hovered.left ? '#2C2C33' : '#fff', fontSize: '2rem' }} />
                    </button>
                    <button
                        className='border p-2 hover:bg-strongWhite rounded-md shadow-xl cursor-pointer active:translate-x-5 transition-transform duration-300 ease-in-out'
                        onMouseEnter={() => setHovered({ ...hovered, right: true })}
                        onMouseLeave={() => setHovered({ ...hovered, right: false })}
                        onClick={() => setActiveIndex(activeIndex === AssessmentProcessData.length - 1 ? 0 : activeIndex + 1)}
                    >
                        <IoChevronForwardOutline style={{ color: hovered.right ? '#2C2C33' : '#fff', fontSize: '2rem' }} />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default AssessmentProcess;