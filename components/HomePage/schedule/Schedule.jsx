import React from 'react';
import bg from '@/assets/schedule/schedule-bg.png';
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import { globalImages } from '@/utils/images/globaIImages';
import ScheduleMan from './ScheduleMan';
import Link from 'next/link';

const Schedule = () => {
    return (
        <section className='w-[360px] md:-mt-24 -mt-10 scheduleContainer min-h-[363px] flex items-center justify-center'
            style={{
                backgroundImage: `url(${bg?.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
            <div className='w-full lg:w-[1200px] h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 relative overflow-hidden'>
                <Image src={JSON.parse(JSON.stringify(globalImages?.scheduleLineOne))} alt='scheduleLineOne' className='absolute lg:top-[150px] lg:-left-52 hidden lg:inline-block' />
                <Image src={JSON.parse(JSON.stringify(globalImages?.scheduleLineThree))} alt='scheduleLineTwo' className='absolute -bottom-36 -right-72 lg:bottom-[230px] lg:right-24 rotate-0 lg:rotate-90 z-10' />
                <div className='z-50 w-full flex flex-col items-center lg:items-start lg:w-7/12 pt-8 lg:pt-0 px-4 lg:px-0'>
                    <h3 className='text-3xl text-strongWhite font-medium font-tertiary text-center lg:text-start'>Redefine <span className='scheduleThinHeadline'>your</span> Cyber Resilience <span className='scheduleThinHeadline'>with our</span> <br className='hidden lg:inline-block' /> <span className='scheduleColorHeadline'>Expert</span> Guidance</h3>
                    <p className='text-base text-strongWhite py-2 text-center lg:text-start'>Consult with our cybersecurity experts today for a customized cybersecurity plan</p>
                    <Link href='/get_start' target="_blank">
                        <button className='common-btn flex items-center gap-3 bg-secondary text-white mt-3 !px-6'>Schedule A Call <GoArrowRight /></button>
                    </Link>
                </div>
                <div className='relative w-full lg:w-5/12 hidden md:block'>
                    <ScheduleMan />
                    <Image src={JSON.parse(JSON.stringify(globalImages?.scheduleLineTwo))} alt='scheduleLineTwo' className='absolute -top-24 -left-72 lg:top-64 lg:-left-12' />
                </div>
            </div>
        </section>
    );
};

export default Schedule;