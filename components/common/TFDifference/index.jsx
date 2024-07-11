import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React from 'react';
import Title from '@/components/common/Title/index';
import Subtitle from '../SubTitle';
import cn from "@/utils/helper/cn";
import { CheckTik } from '@/utils/svg/SVGImg';

const TechForingDifference = ({ data, color }) => {

    const generateMainBackground = (color) => {
        return {
            "bg-primary/10": color === 'primary',
            "bg-secondary/10": color === 'secondary',
            "bg-redThree/10": color === 'redThree',
            "bg-sky/10": color === 'sky',
            "bg-yellow/10": color === 'yellow',
            "bg-skyTwo/10": color === 'skyTwo',
            "bg-purple/10": color === 'purple',
            "bg-purpleTwo/10": color === 'purpleTwo',
            "bg-secondaryTwo/10": color === 'secondaryTwo',
            "bg-green/10": color === 'green',
        }
    }
    const generateSecondaryBackground = (color) => {
        return {
            "bg-primary/30": color === 'primary',
            "bg-secondary/30": color === 'secondary',
            "bg-redThree/30": color === 'redThree',
            "bg-sky/30": color === 'sky',
            "bg-yellow/30": color === 'yellow',
            "bg-skyTwo/30": color === 'skyTwo',
            "bg-purple/30": color === 'purple',
            "bg-purpleTwo/30": color === 'purpleTwo',
            "bg-secondaryTwo/30": color === 'secondaryTwo',
            "bg-green/30": color === 'green',
        }
    }
    const generateTextColor = (color) => {
        return {
            "text-primary": color === "primary",
            "text-redThree": color === "redThree",
            "text-sky": color === "sky",
            "text-yellow": color === "yellow",
            "text-secondary": color === "secondary",
            "text-skyTwo": color === "skyTwo",
            "text-purple": color === "purple",
            "text-purpleTwo": color === "purpleTwo",
            "text-secondaryTwo": color === "secondaryTwo",
            "text-green": color === "green",
        }
    }
    const generateBorder = (color) => {
        return {
            "border-primary/10": color === 'primary',
            "border-secondary/10": color === 'secondary',
            "border-redThree/10": color === 'redThree',
            "border-sky/10": color === 'sky',
            "border-yellow/10": color === 'yellow',
            "border-skyTwo/10": color === 'skyTwo',
            "border-purple/10": color === 'purple',
            "border-purpleTwo/10": color === 'purpleTwo',
            "border-secondaryTwo/10": color === 'secondaryTwo',
            "border-green/10": color === 'green',
        }
    }
    const generateBulletPoint = (color) => {
        return {
            "bg-primary": color === 'primary',
            "bg-secondary": color === 'secondary',
            "bg-redThree": color === 'redThree',
            "bg-sky": color === 'sky',
            "bg-yellow": color === 'yellow',
            "bg-skyTwo": color === 'skyTwo',
            "bg-purple": color === 'purple',
            "bg-purpleTwo": color === 'purpleTwo',
            "bg-secondaryTwo": color === 'secondaryTwo',
            "bg-green": color === 'green',
        }
    }

    return (
        <section className='max-w-[1200px] mx-auto'>
            <div className='flex flex-col gap-2 md:flex-row items-center justify-center py-5'>
                <Image className='size-[100px]' src={JSON.parse(JSON.stringify(globalImages?.tfDifferenceLogo))} alt="TechForing Logo" width={1000} height={1000} />
                <Title className={"ms-5"}> The Techforing Difference </Title>
            </div>
            <div className=' px-2 mt-5 flex flex-col md:flex-row justify-center gap-[50px]'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='flex gap-[20px] items-center'>
                                    <div className={cn('w-[48px] h-[48px] shrink-0 rounded-full flex justify-center items-center', generateMainBackground(color))}>
                                        <div className={cn('size-6 shrink-0 rounded-full relative', generateSecondaryBackground(color))} >
                                            <CheckTik className={cn("me-2 size-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", generateTextColor(color))} />
                                        </div>
                                    </div>
                                    <Subtitle>{item.title}</Subtitle>
                                </div>
                                {
                                    item.list?.map((listItem, index) => {
                                        return <div key={index} className="flex gap-2 ms-2 items-center mt-3">
                                            <div className='min-w-[50px]'>
                                                <div className={cn("w-[32px] h-[32px] border-2 rounded-full flex items-center justify-center", generateBorder(color))}>
                                                    <div className={cn("w-[22px] h-[22px] flex items-center justify-center rounded-full", generateMainBackground(color))}>
                                                        <div className={cn("w-[12px] absolute h-[12px] rounded-full", generateBulletPoint(color))}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className=" text-lightBGText text-base font-normal py-2">{listItem}</p>
                                        </div>
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default TechForingDifference;

