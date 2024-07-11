import React from 'react';
import Service from './Service';
import Divider from '../Divider';
import DividerWrapper from './DividerWrapper';

const Services = ({ headline, servicesData, color }) => {
    return (
        <section className='max-w-[1200px] mx-auto'>
            {headline && <h2 className='text-xl lg:text-4xl font-tertiary font-bold text-lightBGText pb-10 lg:pt-0 text-center' dangerouslySetInnerHTML={{ __html: headline }} />}
            <div className='flex flex-col md:flex-row gap-2 lg:gap-0'>
                <Service service={servicesData[0]} color={color} />
                <DividerWrapper color={color}>
                    <Divider vertical color={color} className="w-[2px] hidden md:block absolute left-1/2 -translate-x-1/2" />
                    <Divider horizontal color={color} className="w-full h-[2px] md:hidden absolute left-1/2 -translate-x-1/2" />
                </DividerWrapper>
                <Service service={servicesData[1]} color={color} />
                <DividerWrapper color={color}>
                    <Divider vertical color={color} className="w-[2px] hidden md:block absolute left-1/2 -translate-x-1/2" />
                    <Divider horizontal color={color} className="w-full h-[2px] md:hidden absolute left-1/2 -translate-x-1/2" />
                </DividerWrapper>
                <Service service={servicesData[2]} color={color} />
            </div>
        </section>
    );
};

export default Services;