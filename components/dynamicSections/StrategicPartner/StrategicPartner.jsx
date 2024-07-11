"use client"
import React, { useState } from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import Image from 'next/image';
import { globalImages } from '@/utils/images/globaIImages';
import ExpandableDropDown from '@/components/common/ExpandableDropDown/ExpandableDropDown';

const StrategicPartner = ({
    imgLeftTextRightAlign,
    title,
    image,
    alt,
    renderedData,
    bulletPoint,
    checkBox,
    bulletWithDesc,
    desc,
    lowerDesc,
    renderParagraph,
    exploreBtn = true,
    variant = 'tertiary',
    topLightBG = true,
    bottomLightBG = true,
    leftLightBG = true,
    rightLightBG = true,
    topDeepBG = true,
    bottomDeepBG = true,
    leftDeepBG = true,
    rightDeepBG = true,
    onlyDesc = true,
    bigDeepWidth = false,
    dropDownExpandable = false
}) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const deepBGColorVariant = {
        primary: 'bg-sky',
        secondary: 'bg-secondary',
        tertiary: 'bg-purpleTwo',
        redThree: 'bg-redThree',
        yellow: 'bg-yellow',
        yellowThree: 'bg-yellowThree',
        secondaryTwo: 'bg-secondaryTwo',
        skyFour: 'bg-skyFour',
    }
    const lightBGColorVariant = {
        primary: 'bg-sky/20',
        secondary: 'bg-secondary/20',
        tertiary: 'bg-purpleTwo/20',
        redThree: 'bg-redThree/20',
        yellow: 'bg-yellow/20',
        yellowThree: 'bg-yellowThree/20',
        secondaryTwo: 'bg-secondaryTwo/20',
        skyFour: 'bg-skyFour/20',
    }
    const contentAlignment = {
        imgLeftTextRightAlign: 'w-full min-h-[400px] flex items-center justify-between gap-3 flex-col lg:flex-row',
        imgRightTextLeftAlign: 'w-full min-h-[400px] flex items-center justify-between gap-3 flex-col lg:flex-row-reverse',
        textEnd: 'w-full lg:w-7/12 flex items-center justify-end pt-8 lg:pt-0 animate-fadeIn',
        textStart: 'w-full lg:w-7/12 flex items-center justify-start pt-8 lg:pt-0 animate-fadeIn',
    }
    const outBulletPoint = {
        primary: 'bg-sky/10',
        secondary: 'bg-secondary/10',
        tertiary: 'bg-purpleTwo/10',
        redThree: 'bg-redThree/10',
        yellow: 'bg-yellow/10',
        yellowThree: 'bg-yellowThree/10',
        secondaryTwo: 'bg-secondaryTwo/10',
        skyFour: 'bg-skyFour/10',
    }
    const innerBulletPoint = {
        primary: 'bg-sky/20 border border-sky',
        secondary: 'bg-secondary/20 border border-secondary',
        tertiary: 'bg-purpleTwo/20 border border-purpleTwo',
        redThree: 'bg-redThree/20 border border-redThree',
        yellow: 'bg-yellow/20 border border-yellow',
        yellowThree: 'bg-yellowThree/20 border border-yellowThree',
        secondaryTwo: 'bg-secondaryTwo/20 border border-secondaryTwo',
        skyFour: 'bg-skyFour/20 border border-skyFour',
    }
    const innerRoundVariant = {
        primary: 'bg-sky/30',
        secondary: 'bg-secondary/30',
        tertiary: 'bg-purpleTwo/30',
        redThree: 'bg-redThree/30',
        yellow: 'bg-yellow/30',
        yellowThree: 'bg-yellowThree/30',
        secondaryTwo: 'bg-secondaryTwo/30',
        skyFour: 'bg-skyFour/30',
    }
    const markColorVariant = {
        primary: 'text-sky',
        secondary: 'text-secondary',
        tertiary: 'text-purpleTwo',
        redThree: 'text-redThree',
        yellow: 'text-yellow',
        yellowThree: 'text-yellowThree',
        secondaryTwo: 'text-secondaryTwo',
        skyFour: 'text-skyFour',
    }
    const btnColorVariant = {
        primary: 'border-sky text-sky hover:bg-sky',
        secondary: 'border-secondary text-secondary hover:bg-secondary',
        tertiary: 'border-purpleTwo text-purpleTwo hover:bg-purpleTwo',
        redThree: 'border-redThree text-redThree hover:bg-redThree',
        yellow: 'border-yellow text-yellow hover:bg-yellow',
        yellowThree: 'border-yellowThree text-yellowThree hover:bg-yellowThree',
        secondaryTwo: 'border-secondaryTwo text-secondaryTwo hover:bg-secondaryTwo',
        skyFour: 'border-skyFour text-skyFour hover:bg-skyFour',
    }
    return (
        <div className='container'>
            <div className={imgLeftTextRightAlign ? `${contentAlignment.imgLeftTextRightAlign}` : `${contentAlignment.imgRightTextLeftAlign}`}>
                <div className={`w-full lg:w-5/12 h-full ${imgLeftTextRightAlign ? 'animate-slideLeftIn' : 'animate-slideRightIn'}`}>
                    <div className='w-full h-full relative'>
                        <div className='w-full h-full p-5'>
                            <div className='w-full h-full p-5 relative'>
                                <div className='w-full relative z-50'>
                                    <Image src={image ? image : globalImages?.ourFocusImg} alt={alt ? alt : 'How We Work'} className='w-full h-fit shadow-sm' />
                                </div>
                                {topDeepBG && <div className={`${bigDeepWidth ? 'w-full h-[180px]' : 'w-full h-[60px]'} ${deepBGColorVariant[variant]} absolute top-0 shadow-sm`}></div>}
                                {bottomDeepBG && <div className={`${bigDeepWidth ? 'w-full h-[180px]' : 'w-full h-[60px]'} ${deepBGColorVariant[variant]} absolute bottom-0 shadow-sm`}></div>}
                                {leftDeepBG && <div className={`${bigDeepWidth ? 'w-[180px] h-full' : 'w-[60px] h-full'} ${deepBGColorVariant[variant]} absolute top-0 left-0 shadow-sm`}></div>}
                                {rightDeepBG && <div className={`${bigDeepWidth ? 'w-[180px] h-full' : 'w-[60px] h-full'} ${deepBGColorVariant[variant]} absolute top-0 right-0 shadow-sm`}></div>}
                            </div>
                        </div>
                        {topLightBG && <div className={`w-full h-[120px] ${lightBGColorVariant[variant]} absolute top-0 shadow-sm`}></div>}
                        {bottomLightBG && <div className={`w-full h-[120px] ${lightBGColorVariant[variant]} absolute bottom-0 shadow-sm`}></div>}
                        {leftLightBG && <div className={`w-[120px] h-full ${lightBGColorVariant[variant]} absolute top-0 left-0 shadow-sm`}></div>}
                        {rightLightBG && <div className={`w-[120px] h-full ${lightBGColorVariant[variant]} absolute top-0 right-0 shadow-sm`}></div>}
                    </div>
                </div>
                <div className={imgLeftTextRightAlign ? `${contentAlignment.textEnd}` : `${contentAlignment.textStart}`}>
                    {bulletPoint &&
                        <div className='w-full lg:w-[670px] h-fit'>
                            {
                                title &&
                                <div className='min-w-[310px] pb-5'>
                                    <h4 className='text-2xl font-tertiary text-lightBGText px-5 font-bold' dangerouslySetInnerHTML={{ __html: title && title }}></h4>
                                </div>
                            }
                            {
                                desc &&
                                <div className='pb-2.5 px-5'>
                                    <p className='text-lightBGText font-tertiary leading-relaxed text-justify'>
                                        {desc}
                                    </p>
                                </div>
                            }
                            <div className='flex flex-col gap-4'>
                                {renderedData?.map((data, index) => (
                                    <div className='w-full h-fit flex gap-4' key={index}>
                                        <div className='w-1/12 flex items-start justify-end'>
                                            <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full ${outBulletPoint[variant]} flex items-center justify-center`}>
                                                <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${innerBulletPoint[variant]}`}></div>
                                            </div>
                                        </div>
                                        <div className='w-11/12'>
                                            <p className='text-lightBGText font-tertiary leading-relaxed text-justify lg:pr-5'>{data?.point}</p>
                                        </div>
                                    </div>))}
                            </div>
                        </div>}
                    {checkBox && <div className='w-full h-fit'>
                        {
                            title &&
                            <div className='w-[264px] h-fit p-2.5'>
                                <h4 className='text-2xl font-tertiary text-lightBGText font-bold' dangerouslySetInnerHTML={{ __html: title && title }}></h4>
                            </div>
                        }
                        <div className='p-2.5'>
                            <p className='text-lightBGText font-tertiary leading-relaxed text-justify'>
                                {desc ? desc : "Description"}
                            </p>
                        </div>
                        <div className='p-2.5'>
                            <div className='grid grid-cols-2 gap-3'>
                                {renderedData?.map((checkbox, index) => (
                                    <div className='flex items-center gap-2' key={index}>
                                        <div className={`w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full ${outBulletPoint[variant]} relative z-50`}>
                                            <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${innerRoundVariant[variant]}`}>
                                                <IoCheckmarkSharp className={` text-2xl absolute top-0 left-0 lg:top-1 lg:left-1 ${markColorVariant[variant]}`} />
                                            </div>
                                        </div>
                                        <p className='text-lightBGText font-tertiary leading-relaxed text-justify'>{checkbox?.checkbox}</p>
                                    </div>))}
                            </div>
                        </div>
                        <div className='p-2.5 flex flex-col lg:flex-row items-start justify-between mt-3 gap-4 lg:gap-28'>
                            {
                                lowerDesc &&
                                <div className='w-[360px]'>
                                    <p className='text-lightBGText font-tertiary text-justify'>{lowerDesc}</p>
                                </div>
                            }
                            {
                                exploreBtn &&
                                <button className={`w-fit h-[53px] rounded-[4px] border-l-4 py-4 px-8 flex items-center justify-center text-lg font-tertiary font-bold hover:text-strongWhite transition duration-700 ease-in-out active:scale-125 ${btnColorVariant[variant]}`}>{"Explore More"}</button>
                            }
                        </div>
                    </div>}
                    {bulletWithDesc && <div className='w-full h-fit'>
                        {
                            title &&
                            <div className='min-w-[367px] p-2.5'>
                                <h4 className='text-2xl lg:text-4xl font-tertiary text-lightBGText font-bold' dangerouslySetInnerHTML={{ __html: title && title }}></h4>
                            </div>
                        }
                        <div className='mb-3'>
                            <div className='flex flex-col'>
                                {renderParagraph?.map((paragraph, index) => (
                                    <div className='p-2.5' key={index}>
                                        <p className='text-lightBGText font-tertiary leading-relaxed text-justify lg:pr-3'>{paragraph?.paragraph}</p>
                                    </div>))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            {renderedData?.map((item, index) => (
                                <div className='w-full h-fit flex gap-2 lg:gap-0' key={index}>
                                    <div className='w-1/12 flex items-start justify-center'>
                                        <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full ${outBulletPoint[variant]} flex items-center justify-center`}>
                                            <div className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${innerBulletPoint[variant]}`}></div>
                                        </div>
                                    </div>
                                    <div className='w-11/12'>
                                        <p className='text-lightBGText font-tertiary leading-relaxed text-justify lg:pr-5'>{item?.point}</p>
                                    </div>
                                </div>))}
                        </div>
                    </div>}
                    {onlyDesc && <div className='w-full h-fit'>
                        {
                            title &&
                            <div className='min-w-[367px] p-2.5'>
                                <h4 className='text-2xl lg:text-4xl font-tertiary text-lightBGText font-bold' dangerouslySetInnerHTML={{ __html: title && title }}></h4>
                            </div>
                        }
                        <div className='mb-3'>
                            <div className='flex flex-col'>
                                {renderParagraph?.map((paragraph, index) => (
                                    <div className='p-2.5' key={index}>
                                        <p className='text-lightBGText font-tertiary leading-relaxed text-justify lg:pr-3'>{paragraph?.paragraph}</p>
                                    </div>))}
                            </div>
                        </div>
                    </div>}
                    {dropDownExpandable &&
                        <div className='w-full h-fit'>
                            {
                                title &&
                                <div className='min-w-[367px] p-2.5'>
                                    <h4 className='text-2xl lg:text-4xl font-tertiary text-lightBGText font-bold' dangerouslySetInnerHTML={{ __html: title && title }}></h4>
                                </div>
                            }
                            <div className='mt-3'>
                                <div className='flex flex-col lg:pl-5'>
                                    {renderedData?.map((item, index) => (
                                        <ExpandableDropDown
                                            key={index}
                                            title={item?.title}
                                            desc={item?.desc}
                                            color={variant}
                                            isExpanded={expandedIndex === index}
                                            onExpand={() => setExpandedIndex(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default StrategicPartner;