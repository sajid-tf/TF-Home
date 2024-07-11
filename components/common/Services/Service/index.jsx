import React from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import { Button } from "@/components/common";

const Service = ({ service,color}) => {
    const { title, options, link } = service;
    return (
        <div className='flex flex-col items-center gap-5 md:gap-9 px-2 py-3 md:py-10 md:px-10'>
            <h4 className='text-2xl font-bold text-lightBGText text-center'>{title}</h4>
            <div className='flex flex-col gap-3 md:gap-[22px]'>
                {options.map((option, index) => (
                    <Wrapper key={index} color={color}>
                        {option}
                    </Wrapper>
                ))}
            </div>
            <Button variant="borderLeft" color={color} asChild className="w-full md:w-fit">
                <Link href={link.url}>
                        {link.text}
                </Link>
            </Button>
        </div>
    );
};

export default Service;