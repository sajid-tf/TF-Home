import React from 'react';
import Title from '@/components/common/Title';
import Content from '@/components/common/Content';
import { Button } from "@/components/common";
import Link from 'next/link';
import cn from '@/utils/helper/cn';

const CTABanner = ({color,data}) => {
    return (
        <section className='max-w-[1200px] w-full mx-3 md:mx-auto'>
            <div className='w-full h-[293px] flex justify-center items-center bg-[url("/images/cta/digital-security.png")] bg-cover bg-center'>
                <div className='mx-3 md:mx-auto max-w-[700px] flex flex-col items-center justify-center'>
                    <Title className={cn("mb-4",{
                        'text-primary': color === 'primary',
                    })}>{data.title}</Title>
                    <Content className="text-center mb-12">{data.desc}</Content>
                    <Button color={color} variant="contained" className="w-full max-w-[453px] p-3 md:p-3" asChild>
                        <Link href={data.btn.src} target='_blank'>
                         {data.btn.label}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;