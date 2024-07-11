import React from 'react';
import whiteTFLogo from '@/assets/logo/whiteTF.png';
import Image from 'next/image';
import companyHero from '@/assets/hero/more-hero/company-hero.png';

const CompanyHero = ({ titleFirstLine, titleMiddleLine, titleLowerLine, desc, textColorVariant = 'secondary', bgImage, backDropUse = 'false', className,logoClasses }) => {
    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-redThree',
        yellow: 'text-yellowThree',
        purple: 'text-purpleThree',
        sky: 'text-sky',
    }
    const backDrop = {
        true: 'backdrop-blur pb-8',
        false: ''
    }
    return (
        <div className={`w-full h-[600px] mx-auto relative overflow-hidden shadow-md ${className}`}
            style={{
                backgroundImage: `url(${bgImage ? bgImage : companyHero?.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='w-full lg:w-[772px] h-full absolute left-0 heroClipLeftBottomCorner heroVectorBackground boxShadow-heroDropShadow z-40'></div>
            <div className='w-full lg:w-[670px] h-[244px] absolute bottom-0 left-80 heroClipRightBottomCorner heroVectorBackground boxShadow-heroDropShadow z-10'></div>
            <div className='w-full lg:w-[670px] h-[244px] absolute top-0 left-52 heroClipTopRightCorner heroVectorBackground boxShadow-heroDropShadow z-10'></div>
            <div className='w-full lg:w-[600px] h-full absolute left-0 heroClipLeftBottomCorner heroVectorBackground boxShadow-heroDropShadow rotate-90 z-20'></div>
            <div className='w-full lg:w-[1200px] h-full mx-auto flex items-center justify-start z-50 relative'>
                <div className='w-full lg:w-[699px] min-h-[278px]'>
                    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center gap-3'>
                        <div className={`w-[120px] h-[120px] lg:w-[199px] lg:h-[199px] ${logoClasses}`}>
                            <Image src={whiteTFLogo} alt='tf-white-logo' className='w-full h-full hover:scale-105 translate-transform duration-300 ease-linear' />
                        </div>
                        <div className='w-full lg:w-[500px] h-fit lg:border-l-[1.75px] lg:border-strongWhite p-5'>
                            <div className={`flex flex-col gap-4 ${backDrop[backDropUse]}`}>
                                <h2 className='text-3xl lg:text-5xl text-center lg:text-left text-strongWhite font-tertiary font-bold leading-tight capitalize drop-shadow-lg animate-fadeIn duration-1000 ease-linear'>
                                    {titleFirstLine && <span>{titleFirstLine ? titleFirstLine : "Shaping"}</span>} <br className='hidden lg:inline-block' />
                                    {titleMiddleLine && <span>{titleMiddleLine ? titleMiddleLine : "Tomorrows"}</span>} <br className='hidden lg:inline-block' />
                                    {titleLowerLine && <span className={`${textColor[textColorVariant]}`}>{titleLowerLine ? titleLowerLine : "CyberSecurity"}</span>}
                                </h2>
                                {desc && <h5 className='text-base lg:text-lg text-center lg:text-left text-strongWhite animate-fadeIn duration-1000 ease-linear'>{desc ? desc : "WE'RE A CYBERSECURITY COMPANY WITH A HUMBLE BEGINNING, AIMING TO SHAPE TOMORROW'S CYBERSECURITY LANDSCAPE"}</h5>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyHero;