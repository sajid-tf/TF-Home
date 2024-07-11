'use client';
import { productData } from '@/utils/mock/dummyData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

const ProductCards = () => {
    const [hover, setHover] = useState({ hover: false, hoveredItem: null });

    const handleButtonClick = (itemName) => {
        setHover({ hover: true, hoveredItem: itemName });
    };

    const borderColorVariants = {
        secondary: 'border-secondary',
        sky: 'border-sky',
        yellow: 'border-yellow'
    }
    const bgColorVariants = {
        secondary: 'bg-secondary',
        sky: 'bg-sky',
        yellow: 'bg-yellow'
    }
    const gridConditional = {
        normal: 'lg:grid-cols-3 gap-24 lg:gap-12',
        hovered: 'lg:grid-cols-1 gap-24 lg:gap-12 animate-expandWidth',
        normalWidth: 'w-2/6',
        hoveredWidth: 'w-full'
    }
    const buttonColorVariants = {
        human: 'bg-secondary',
        talent: 'bg-sky',
        cent: 'bg-yellow'
    }
    const buttonConfigurations = {
        human: [
            {
                className: 'cent',
                label: 'Cent',
                shadowClass: 'animate-shadowBounceYellow'
            },
            {
                className: 'talent',
                label: 'Talent',
                shadowClass: 'animate-shadowBounceSky'
            }
        ],
        cent: [
            {
                className: 'human',
                label: 'Human',
                shadowClass: 'animate-shadowBounceSecondary'
            },
            {
                className: 'talent',
                label: 'Talent',
                shadowClass: 'animate-shadowBounceSky'
            }
        ],
        talent: [
            {
                className: 'human',
                label: 'Human',
                shadowClass: 'animate-shadowBounceSecondary'
            },
            {
                className: 'cent',
                label: 'Cent',
                shadowClass: 'animate-shadowBounceYellow'
            }
        ]
    };
    return (
        <div className='productCard pt-12 pb-24'>
            <div className={`grid grid-cols-1 ${hover?.hover ? gridConditional.hovered : gridConditional.normal} relative`}>
                {productData.filter((item, index) => hover.hover ? item?.name === hover.hoveredItem : index < 3).map((item, index) => (
                    <div
                        className={`bg-transparent -mb-6 md:border-l-4 md:border-b-4 md:p-5 p-1 rounded-lg flex items-center justify-center relative z-30 ${borderColorVariants[item?.variant]}`}
                        key={index + 1}
                    >
                        <div className='absolute top-0 -right-1 lg:-right-6'>
                            {hover?.hover ?
                                <div className='flex flex-col gap-5 mt-14 -me-3 min-[380px]:-me-0'>
                                    <button className={`w-11 h-11 rounded-full rotate-90 lg:rotate-0 ${bgColorVariants[item?.variant]}`}
                                        onClick={() => setHover({ hover: false, hoveredItem: null })}
                                    > <BsChevronLeft className='text-white cardIcon' size='1.5em' /> </button>
                                    {hover?.hoveredItem && buttonConfigurations[hover?.hoveredItem]?.map((button, index) => (
                                        <button
                                            key={index}
                                            className={`w-11 h-11 rounded-full text-xs text-strongWhite relative z-40 inline-block ${buttonColorVariants[button.className]}`}
                                            onClick={() => handleButtonClick(button.className)}
                                        >
                                            <span className={`w-11 h-11 absolute top-0 left-0 rounded-full ${button?.shadowClass}`}></span>
                                            {button?.label}
                                        </button>
                                    ))}
                                </div>
                                :
                                <>
                                <button className={`w-12 h-12 rounded-full rotate-90 lg:rotate-0 ${bgColorVariants[item?.variant]}`}
                                    onClick={() => setHover({ hover: true, hoveredItem: item?.name })}
                                ><BsChevronRight className='text-white cardIcon' size='2em' /></button>
                                </>
                                }
                        </div>
                        <div className='w-full flex flex-col lg:flex-row items-start justify-around'>
                            <div className={`cardContent lg:flex flex-col items-center justify-center h-fit lg:h-[389px] ${hover?.hover ? gridConditional.hoveredWidth : gridConditional.normalWidth}`}>
                                <div className='flex items-center justify-center'>
                                    <Image src={JSON.parse(JSON.stringify(item?.img))} alt={item?.alt} width={214.763} height={75} />
                                </div>
                                <p className='text-sm lg:text-base'>{item?.content}</p>
                            </div>
                            {hover?.hover &&
                                <div className='w-full lg:w-4/6 mt-5 lg:mt-0'>
                                    {item?.rightSideContent?.map((item, index) => (
                                        <div key={index + 1}>
                                            {!item?.isLastItem ? <React.Fragment>
                                                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5 pb-5 lg:pb-2'>
                                                    <Image src={JSON.parse(JSON.stringify(item?.img))} alt={item?.alt} width={70} height={70} />
                                                    <div className='w-full flex flex-col lg:flex-row gap-4'>
                                                        <div className={`lg:border-r-2 border-${item?.color} rounded-xl w-full lg:w-44 lg:h-12`}>
                                                            <h6 className='text-base text-lightBlack font-medium text-center lg:text-left'>{item?.title}</h6>
                                                        </div>
                                                        <div className='w-full'>
                                                            <p className='text-sm lg:text-base text-lightBlack text-center lg:text-left'>
                                                                {item?.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                                :
                                                <div className='w-full flex flex-col lg:flex-row items-center'>
                                                    <div className='w-full lg:w-1/12 hidden lg:inline-block'>
                                                        <Image src={JSON.parse(JSON.stringify(item?.img))} alt={"productHumanImgOne"} width={70} height={70} />
                                                    </div>
                                                    <div className='w-full lg:w-11/12 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 lg:px-5'>
                                                        <h6 className={`text-base lg:text-lg text-${item?.color} font-medium`}>{item?.title}</h6>
                                                        <Link href={item?.btnLink} target="_blank" className={`text-base lg:text-lg text-white bg-${item?.color} px-4 py-2 lg:px-10 lg:py-4 rounded-full flex items-center justify-center gap-4 hover:scale-105 translate-transform duration-300 ease-linear`}>
                                                            {item?.btnText}
                                                            <GoArrowRight className='text-lg lg:text-2xl' style={{ animation: 'bounce 2s infinite' }} />
                                                        </Link>
                                                    </div>
                                                </div>}
                                        </div>
                                    ))}
                                </div>}
                        </div>
                    </div>))}
            </div>
        </div>
    );
};

export default ProductCards;