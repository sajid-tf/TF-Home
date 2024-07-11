'use client';
import React from 'react';
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

const ExpandableDropDown = ({ color = 'secondary', title, desc, isExpanded, onExpand }) => {
    const textColorVariant = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        yellow: 'text-yellow',
        redThree: 'text-redThree',
        green: 'text-green',
        tertiary: 'text-purpleTwo',
        yellowThree: 'text-yellowThree',
        secondaryTwo: 'text-secondaryTwo'
    }
    const outerDotColorVariant = {
        primary: 'bg-primary/10',
        secondary: 'bg-secondary/10',
        yellow: 'bg-yellow/10',
        redThree: 'bg-redThree/10',
        green: 'bg-green/10',
        tertiary: 'bg-purpleTwo/10',
        yellowThree: 'bg-yellowThree/10',
        secondaryTwo: 'bg-secondaryTwo/10'
    }
    const innerDotColorVariant = {
        primary: 'bg-primary/20',
        secondary: 'bg-secondary/20',
        yellow: 'bg-yellow/20',
        redThree: 'bg-redThree/20',
        green: 'bg-green/20',
        tertiary: 'bg-purpleTwo/20',
        yellowThree: 'bg-yellowThree/20',
        secondaryTwo: 'bg-secondaryTwo/20'
    }
    const borderLightColorVariant = {
        primary: 'border-primary/20',
        secondary: 'border-secondary/20',
        yellow: 'border-yellow/20',
        redThree: 'border-redThree/20',
        green: 'border-green/20',
        tertiary: 'border-purpleTwo/20',
        yellowThree: 'border-yellowThree/20',
        secondaryTwo: 'border-secondaryTwo/20'
    }
    const borderColorVariant = {
        primary: 'border-primary',
        secondary: 'border-secondary',
        yellow: 'border-yellow',
        redThree: 'border-redThree',
        green: 'border-green',
        tertiary: 'border-purpleTwo',
        yellowThree: 'border-yellowThree',
        secondaryTwo: 'border-secondaryTwo'
    }

    return (
        <div className={`w-full lg:w-[650px] ${isExpanded ? 'min-h-[164px]' : 'h-[52px]'}`}>
            <div className='w-full h-[52px] py-2.5 flex items-center justify-start gap-4 cursor-pointer' onClick={onExpand}>
                <div className='w-[44px] h-full'>
                    <div className={`w-full h-8 ${outerDotColorVariant[color]} rounded-[50px] flex items-center justify-center shadow-sm`}>
                        <div className={`w-6 h-3 ${innerDotColorVariant[color]} rounded-[50px] shadow-2xl flex items-center justify-center`}>
                            {isExpanded ? <BsFillCaretDownFill className={`${textColorVariant[color]} text-2xl translate-transform duration-500 ease-linear`} /> : <BsFillCaretRightFill className={`${textColorVariant[color]} text-2xl translate-transform duration-500 ease-linear`} />}
                        </div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <h5 className='text-sm lg:text-lg text-lightBGText font-semibold font-tertiary capitalize'>{title ? title : "Title"}</h5>
                </div>
            </div>
            {isExpanded && <div className={`w-full min-h-[112px] py-5 border-t-4 ${borderColorVariant[color]} ${isExpanded ? 'animate-slide-up' : 'animate-slide-down'} translate-transform duration-500 ease-linear`}>
                <div className={`w-full h-full border-l-[42px] ${borderLightColorVariant[color]} pl-[20px]`}>
                    <p className='text-sm lg:text-base text-lightBGText font-tertiary text-justify font-normal'>{desc ? desc : "Description"}</p>
                </div>
            </div>}
        </div>
    );
};

export default ExpandableDropDown;