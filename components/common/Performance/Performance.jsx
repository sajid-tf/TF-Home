import React from 'react';
import Card from '@/components/common/Performance/Card';

const Performance = ({data}) => {
    return (
        <section className='max-w-[1200px] mx-auto'>
             <div className="w-full px-0 py-5 md:py-0 md:px-[60px] h-auto md:min-h-[300px] flex flex-col md:flex-row gap-2 md:gap-10  border-t-[20px] border-b-[20px] md:border-t-0 md:border-b-0 md:border-l-[50px] md:border-r-[50px] border-yellowTwo">
                {
                    data?.map((item,index) => (
                        <Card key={index}>
                        <h1 className='text-lightBGText text-2xl md:text-[68px] leading-normal font-normal' dangerouslySetInnerHTML={{__html: item?.value}}></h1>
                        <p className='text-lightBGText text-center text-sm md:text-base'>{item?.text}</p>
                    </Card>
                    ))
                }
             </div>
        </section>
    );
};

export default Performance;

