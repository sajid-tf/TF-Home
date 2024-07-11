import { Button } from '@/components/common';
import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React from 'react';
import { IoTimer } from "react-icons/io5";

const BusinessWithUsSection = () => {
    return (
        <div className='w-[360px] lg:w-[1200px] mx-auto py-16'>
            <h5 className='text-base lg:text-lg text-secondary font-tertiary'>ALL-IN-ONE CYBERSECURITY</h5>
            <h3 className='text-xl lg:text-4xl text-lightBGText font-tertiary font-bold'>Safeguard Your Business With Us</h3>
            <div className='h-fit w-fit pt-4 lg:pt-12'>
                <Image src={JSON.parse(JSON.stringify(globalImages?.businessWithUsBg))} alt='business-with-us' />
            </div>
            <div className='py-6'>
                <p className='text-lightBGText text-justify'>
                    Cyberattacks are more prevalent than ever, affecting businesses and individuals worldwide. TechForing’s expert team works with you to create a roadmap to protect your personal and business data and provide fast & effective incident response services to help you recover from a cyberattack.
                    <br /> Invest in your cybersecurity with us today!
                </p>
            </div>
            <div className='lg:w-[800px] flex flex-col lg:flex-row items-center justify-start gap-3'>
                <Button variant="contained" size='medium' className='w-full' endIcon={<IoTimer className='text-2xl' />}>
                    Schedule a Free Consultation
                </Button>
                <Button variant="outlined" size='medium' className='w-full bg-primary border-primary text-white hover:bg-transparent hover:text-primary' endIcon={<IoTimer className='text-2xl' />}>
                    Learn More About Us
                </Button>
            </div>
        </div>
    );
};

export default BusinessWithUsSection;