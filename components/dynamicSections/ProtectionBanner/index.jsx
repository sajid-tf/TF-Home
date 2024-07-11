import Content from '@/components/common/Content';
import Subtitle from '@/components/common/SubTitle';
import cn from '@/utils/helper/cn';
import React from 'react';

const ProtectionBanner = ({ color, data }) => {
    return (
        <section className='max-w-[1200px] mx-3 md:mx-auto'>
            <div className={cn('w-full border-t-[25px] border-b-[25px]  md:border-t-0 md:border-b-0 md:border-l-[50px] md:border-r-[50px] px-4 md:px-[30px] bg-[url("/images/protection/protection-small-bg.svg")] md:bg-[url("/images/protection/protection-bg.svg")] bg-contain bg-no-repeat bg-center ', {
                'border-primary': color === 'primary',
                'border-redThree': color === 'redThree',
                'border-sky': color === 'sky',
                'border-yellow': color === 'yellow',
                'border-secondary': color === 'secondary',

            })}>
                <div className='flex flex-col md:flex-row py-[46px] md:py-[90px] gap-10 md:gap-20 items-center'>
                    <span className="flex-1 text-center text-2xl">{data.title}</span>
                    <Content className="flex-1 text-center">{data.desc}</Content>
                </div>
            </div>
        </section>
    );
};

export default ProtectionBanner;