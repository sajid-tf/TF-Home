import React from 'react';
import helpBG from '@/assets/help/help-bg.png';
import Image from 'next/image';
import { globalImages } from '@/utils/images/globaIImages';
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';

const Help = () => {
    return (
        <div className='relative z-50 md:h-[327px] h-[150px] -mt-10' style={{
            backgroundImage: `url(${helpBG?.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
        }}>
            <div className='flex items-center justify-center md:gap-32 gap-5 '>
                <div className='md:pt-[15px]'>
                    <Image className='md:block hidden' src={JSON.parse(JSON.stringify(globalImages?.helpTeam))} alt='helpTeam' height={624} width={624} />
                    <Image className='md:hidden h-[150px]' src={JSON.parse(JSON.stringify(globalImages?.helpTeamSm))} alt='helpTeam' height={150} />
                </div>
                <div>
                    <p className='text-white md:text-lg text-[8px]'>Ready to Optimize Your Business And Drive Growth?</p>
                    <h3 className='text-white md:text-3xl text-sm md:w-96'>Get Our Next-Gen Business Solution Today!</h3>
                    <Link href='https://growth.techforing.com/techforing-human/' target='_blank'>
                        <button className='common-btn flex items-center gap-2 md:gap-3 bg-secondary text-white mt-3 md:mt-6 md:!px-6 !px-3'>
                            Start Growing Your Business <GoArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Help;