import Content from '@/components/common/Content';
import Subtitle from '@/components/common/SubTitle';
import cn from '@/utils/helper/cn';
import React from 'react';

const PCICompliance = ({ color, data }) => {
    return (
        <section className='max-w-[1200px] mx-3 md:mx-auto flex flex-col gap-5'>
            <Subtitle className={cn("border-l-[20px] pl-5", { 'border-primary': color === 'primary', 'border-redThree': color === 'redThree', 'border-sky': color === 'sky', 'border-yellow': color === 'yellow', 'border-secondary': color === 'secondary', 'border-skyFour': color === 'skyFour' })}>{data.title}</Subtitle>
            <Content>{data.desc}</Content>
            <div className={cn("p-5 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-[30px] place-items-center border-x-[20px]", { 'border-primary/20': color === 'primary', 'border-redThree/20': color === 'redThree', 'border-sky/20': color === 'sky', 'border-yellow/20': color === 'yellow', 'border-secondary/20': color === 'secondary', 'border-skyFour/20': color === 'skyFour' })}>
                {
                    data.levels.map((item, index) => (
                        <div key={index} className="flex">
                            <div className={cn("w-[110px] h-[110px] md:w-[200px] md:h-[200px] border rounded-full flex items-center justify-center", {
                                'border-primary': color === 'primary',
                                'border-redThree': color === 'redThree',
                                'border-sky': color === 'sky',
                                'border-yellow': color === 'yellow',
                                'border-secondary': color === 'secondary',
                                'border-skyFour': color === 'skyFour',
                            })}>
                                <label className='text-lightBGText text-center text-xs md:text-lg font-medium max-w-[90px] md:max-w-[160px]'>{item}</label>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default PCICompliance;