import cn from '@/utils/helper/cn';
import Image from 'next/image';
import React from 'react';

const ExpertImage = ({ color, imageSrc, altText, className }) => {
    const bgVariant = {
        'primary': 'bg-primary',
        'redThree': 'bg-redThree',
        'sky': 'bg-sky',
        'yellow': 'bg-yellow',
        'secondary': 'bg-secondary',
        'skyFour': 'bg-skyFour',
        'skyTwo': 'bg-skyTwo',
    }
    const lightBGVariant = {
        'primary': 'bg-primary/20',
        'redThree': 'bg-redThree/20',
        'sky': 'bg-sky/20',
        'yellow': 'bg-yellow/20',
        'secondary': 'bg-secondary/20',
        'skyFour': 'bg-skyFour/20',
        'skyTwo': 'bg-skyTwo/20',
    }
    return (
        <div className='w-full min-h-[220px] md:min-h-[380px] flex items-end relative'>
            <div className={`w-full h-[60px] md:h-[120px] ${lightBGVariant[color]}`}></div>
            <div className={`h-[90%] w-[60px] ${bgVariant[color]} absolute top-1/2 -translate-y-1/2 left-5 border`}></div>
            <div className={cn("z-10 h-full absolute top-0 left-5")}>
                <Image
                    src={imageSrc}
                    alt={altText}
                    className={cn('w-full h-full object-contain object-center p-5', className)}
                />
            </div>
        </div>

    );
};

export default ExpertImage;