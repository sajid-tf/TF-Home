import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React from 'react';

const WeWork = ({ imgLeftTextRightAlign, title, desc, image, alt, wrapperImgBG, variant = 'tertiary' }) => {
    const deepBGColorVariantRight = {
        primary: 'bg-sky',
        secondary: 'bg-secondary',
        tertiary: 'bg-purpleTwo',
        redThree: 'bg-redThree',
        yellow: 'bg-yellow',
        secondaryTwo: 'bg-secondaryTwo',
        skyThree: 'bg-skyThree',
        skyFour: 'bg-skyFour',
        yellowTwo: 'bg-yellowTwo',
    }
    const deepBGColorVariantLeft = {
        primary: 'bg-sky',
        secondary: 'bg-secondary',
        tertiary: 'bg-purpleTwo',
        redThree: 'bg-redThree',
        yellow: 'bg-yellow',
        secondaryTwo: 'bg-secondaryTwo',
        skyThree: 'bg-skyThree',
        skyFour: 'bg-skyFour',
        yellowTwo: 'bg-yellowTwo',
    }
    const lightBGColorVariantBottom = {
        primary: 'bg-sky/20',
        secondary: 'bg-secondary/20',
        tertiary: 'bg-purpleTwo/20',
        redThree: 'bg-redThree/20',
        yellow: 'bg-yellow/20',
        secondaryTwo: 'bg-secondaryTwo/20',
        skyThree: 'bg-skyThree/20',
        skyFour: 'bg-skyFour/20',
        yellowTwo: 'bg-yellowTwo/20',
    }
    const lightBGColorVariantTop = {
        primary: 'bg-sky/20',
        secondary: 'bg-secondary/20',
        tertiary: 'bg-purpleTwo/20',
        redThree: 'bg-redThree/20',
        yellow: 'bg-yellow/20',
        secondaryTwo: 'bg-secondaryTwo/20',
        skyThree: 'bg-skyThree/20',
        skyFour: 'bg-skyFour/20',
        yellowTwo: 'bg-yellowTwo/20',
    }
    const contentAlignment = {
        imgLeftTextRightAlign: 'w-full min-h-[400px] flex flex-col lg:flex-row',
        imgRightTextLeftAlign: 'w-full min-h-[400px] flex flex-col lg:flex-row-reverse',
        textEnd: 'w-full lg:w-1/2 flex items-center justify-end pt-8 lg:pt-0 animate-fadeIn',
        textStart: 'w-full lg:w-1/2 flex items-center justify-start pt-8 lg:pt-0 animate-fadeIn',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-full mx-auto'>
            <div className={imgLeftTextRightAlign ? `${contentAlignment.imgLeftTextRightAlign}` : `${contentAlignment.imgRightTextLeftAlign}`}>
                <div className={`w-full lg:w-1/2 h-full ${imgLeftTextRightAlign ? 'animate-slideLeftIn' : 'animate-slideRightIn'}`}>
                    <div className='w-full h-full relative'>
                        <div className='w-full h-full p-5'>
                            <div className='w-full h-full p-5 relative'>
                                <div className='w-full h-fit relative z-50'>
                                    <Image src={image ? image : globalImages?.howWeWorkImg} alt={alt ? alt : 'How We Work'} className='w-full h-fit shadow-sm' />
                                </div>
                                {!wrapperImgBG && <div className={`w-[60px] h-full absolute top-0 shadow-sm ${imgLeftTextRightAlign ? `right-0 ${deepBGColorVariantRight[variant]}` : `left-0 ${deepBGColorVariantLeft[variant]}`}`}></div>}
                            </div>
                        </div>
                        <div className={imgLeftTextRightAlign ? `w-full h-[120px] absolute bottom-0 shadow-sm ${lightBGColorVariantBottom[variant]}` : `w-full h-[120px] absolute top-0 shadow-sm ${lightBGColorVariantTop[variant]}`}></div>
                        {wrapperImgBG && <div className={imgLeftTextRightAlign ? `w-full h-[120px] absolute top-0 shadow-sm ${lightBGColorVariantTop[variant]}` : `w-full h-[120px] absolute bottom-0 shadow-sm ${lightBGColorVariantBottom[variant]}`}></div>}
                    </div>
                </div>
                <div className={imgLeftTextRightAlign ? `${contentAlignment.textEnd}` : `${contentAlignment.textStart}`}>
                    <div className='max-w-[560px] h-fit'>
                        <h4 className='text-2xl font-tertiary text-lightBGText px-5 font-bold' dangerouslySetInnerHTML={{ __html: title ? title : "Title" }}></h4>
                        {
                            desc && <p className='text-lightBGText text-justify p-5 font-tertiary leading-relaxed' dangerouslySetInnerHTML={{ __html: desc ? desc : "Description" }}></p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeWork;