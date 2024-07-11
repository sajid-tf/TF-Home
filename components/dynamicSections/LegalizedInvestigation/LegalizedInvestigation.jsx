import React from 'react';
import legalImg from '@/asset/personal-cybersecurity/cyber-investigation/online-source-investigation/legalized.webp';
import Image from 'next/image';
import { MdCancel } from "react-icons/md";

const LegalizedInvestigation = ({ variant = 'secondaryTwo', renderData, ImgURL = legalImg, AltTag = 'legal investigation', percentage = '100%', title, paragraph }) => {
    const borderColorVariant = {
        sky: 'border-sky',
        red: 'border-red',
        yellow: 'border-yellow',
        purple: 'border-purple',
        green: 'border-green',
        secondaryTwo: 'border-secondaryTwo',
    }
    const borderLightVariant = {
        sky: 'border-sky/20',
        red: 'border-red/20',
        yellow: 'border-yellow/20',
        purple: 'border-purple/20',
        green: 'border-green/20',
        secondaryTwo: 'border-secondaryTwo/20',
    }
    const textColorVariant = {
        sky: 'text-sky',
        red: 'text-red',
        yellow: 'text-yellow',
        purple: 'text-purple',
        green: 'text-green',
        secondaryTwo: 'text-secondaryTwo',
    }
    const customSpan = {
        1: 'col-span-1',
        2: 'col-span-2'
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit lg:h-[500px] mx-auto'>
            <div className='w-full h-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-16'>
                <div className='w-full lg:w-8/12 flex flex-col items-start justify-center gap-4'>
                    <div className='w-full flex flex-col lg:flex-row gap-5'>
                        <div className='w-full lg:w-[270px] flex items-center justify-center'>
                            <h5 className={`text-5xl lg:text-[100px] ${textColorVariant[variant]} font-tertiary font-bold`}>{percentage}</h5>
                        </div>
                        <div className='w-full flex items-center justify-start'>
                            <h6 className='text-lg lg:text-2xl text-lightBGText uppercase font-tertiary font-bold text-center lg:text-start'>{title}</h6>
                        </div>
                    </div>
                    <p className='text-sm lg:text-base text-lightBGText text-justify leading-relaxed' dangerouslySetInnerHTML={{ __html: paragraph ? paragraph : "Description" }}></p>
                    <div className='flex items-center justify-around'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-y-3'>
                            {renderData?.map((item, index) => (
                                <div key={index} className={`flex items-center justify-start gap-2 px-2 py-1 ${customSpan[item?.span]}`}>
                                    <MdCancel className='text-lightBGText text-lg lg:text-2xl' />
                                    <h6 className='text-[11px] lg:text-[15px] text-lightBGText font-tertiary capitalize'>
                                        {item?.option}
                                    </h6>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className={`w-full lg:w-4/12 lg:border-l-[70px] ${borderColorVariant[variant]} lg:relative`}>
                    <div className={`w-full h-full lg:border-l-[40px] ${borderLightVariant[variant]}`}></div>
                    <div className='w-[360px] h-fit lg:w-[380px] lg:h-fit lg:absolute lg:top-1/2 lg:-left-[70px] lg:-translate-y-1/2'>
                        <Image src={ImgURL} alt={AltTag} className="h-fit w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalizedInvestigation;