import React from 'react';
import exploreHero from '@/assets/hero/more-hero/exploreHeroBG.png';

const ExploreHero = ({ title, isDesc = true, desc, bgImage }) => {
    return (
        <div className={`w-full h-[600px] mx-auto relative overflow-hidden shadow-md`}
            style={{
                backgroundImage: `url(${bgImage ? bgImage : exploreHero?.src})`,
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
                <div className='w-full lg:w-[950px] h-fit px-8 py-0 lg:py-2.5 lg:px-2.5 flex flex-col gap-5'>
                    <h2 className='text-3xl lg:text-[64px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'>{title ? title : "Secure Your Digital World Today"}</h2>
                    {isDesc && (
                        <h6 className='text-lg lg:text-2xl text-strongWhite font-tertiary drop-shadow-md leading-relaxed'>{desc ? desc : "Description"}</h6>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExploreHero;