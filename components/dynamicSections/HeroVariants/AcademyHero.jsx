import React from 'react';
import { Button } from '@/components/common';
import academyHero from '@/assets/hero/more-hero/ccsp-hero.png';
import Link from 'next/link';

const AcademyHero = ({ title, btnText, textColorVariant = 'secondary', bgImage }) => {
    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-redThree',
        yellow: 'text-yellowThree',
        purple: 'text-purpleThree',
        sky: 'text-sky',
    }
    return (
        <div className={`w-full h-[600px] mx-auto relative overflow-hidden shadow-md`}
            style={{
                backgroundImage: `url(${bgImage ? bgImage : academyHero?.src})`,
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
                <div className='w-fit h-fit px-8 lg:px-0 flex flex-col gap-4'>
                    {title ? title : <h2 className='text-3xl lg:text-[64px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'>Train With Us <br className='hidden lg:inline-block' /> To Become A <span className={`${textColor[textColorVariant]}`}>Certified</span> <br className='hidden lg:inline-block' /> Cybersecurity Professional</h2>}
                    <Button variant="contained" size='medium' color={"secondary"} className="px-14 md:px-14" asChild>
                        <Link href="/get_start/" target="_blank">
                           {btnText ? btnText : "Get Started" }
                        </Link>
                   </Button>
                </div>
            </div>
        </div>
    );
};

export default AcademyHero;