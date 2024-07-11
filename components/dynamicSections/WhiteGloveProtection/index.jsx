import Content from '@/components/common/Content';
import Subtitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';
import cn from '@/utils/helper/cn';
import Image from 'next/image';
import React from 'react';

const WhiteGloveProtection = ({color,data}) => {
    return (
        <section className='max-w-[1200px] mx-3 md:mx-auto'>
            <Title className="mb-10">{data.header}</Title>
            {
                data.contents.map((item,index) => (
                    <div className='flex flex-col md:flex-row' key={index} >
                        <div className="basis-full relative md:basis-1/3">
                            <div className={cn("hidden md:block w-[175px] h-full",{
                                                "bg-redThree/20": color === "redThree",
                                                "bg-primary/20": color === "primary",
                                                "bg-sky/20": color === "sky",
                                                "bg-secondary/20": color === "secondary",
                                                "bg-yellow/20": color === "yellow",
                                                "bg-yellowTwo/20": color === "yellowTwo",
                                                "bg-skyTwo/20": color === "skyTwo",
                                                "bg-purple/20": color === "purple",
                                                "bg-purpleTwo/20": color === "purpleTwo",
                                                "bg-secondaryTwo/20": color === "secondaryTwo",

                                                "float-left": index % 2 === 0,
                                                "float-right": index % 2 !== 0,
                                                })}>
                                                    
                            </div>
                            <div className={cn("static md:absolute md:top-1/2 md:-translate-y-1/2",{
                                "left-[50px]": index % 2 === 0,
                                "right-[50px]": index % 2 !== 0,
                            })}>       
                                 <div className="w-full md:w-[250px] h-auto md:h-[250px]">
                                   <Image 
                                            src={item.images.src}
                                            alt={item.images.alt}  
                                            className="w-full h-full object-center"
                                        />
                                   </div>
                                       
                            </div>
                        </div>
                        <div className="basis-full md:basis-2/3 px-0 py-5 md:py-[60px] md:px-10">
                            <Subtitle>{item.title}</Subtitle>
                            <Content>{item.desc}</Content>
                            <div className='py-[10px] flex flex-col gap-2'>
                            {
                            item.lists.map ((item,index) => (
                                <p key={index} className={cn("border-l-4 px-2 text-lightBGBodyText text-base font-normal leading-6",{
                                    'border-primary': color === 'primary', 
                                    'border-redThree': color === 'redThree', 
                                    'border-sky': color === 'sky', 
                                    'border-yellow': color === 'yellow',
                                    'border-yellowTwo': color === 'yellowTwo',
                                    'border-secondary': color === 'secondary',
                                    'border-secondaryTwo': color === 'secondaryTwo'
                                })}>{item}</p>
                              ))
                            }
                            </div>
                        </div>   
                   </div>
                ))
            }
           
        </section>
    );
};
export default WhiteGloveProtection;