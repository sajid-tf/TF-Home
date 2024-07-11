import Image from 'next/image';
import React from 'react';
import techforing from '@/public/Images/regional-office/techforing.png'
import bangladesh from '@/public/Images/regional-office/bd.png'
// import india from '@/public/Images/regional-office/india.png'
import turkey from '@/public/Images/regional-office/turkey.png'
import canada from "@/public/Images/regional-office/canada.png"
import uk from '@/public/Images/regional-office/uk.png'
import usa from '@/public/Images/regional-office/usa.png'
import cn from '@/utils/helper/cn';
import Content from '@/components/common/Content';

const RegionalOffice = ({ color = "secondary", data }) => {
    return (
        <section className='max-w-[1200px] mx-4 md:mx-auto'>
            <div className='flex flex-col gap-3 relative pt-[40px] md:pt-[80px]'>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center gap-1 md:gap-5 items-center">
                    <Image src={usa} alt="usa" width={120} height={120} />
                    <Image src={canada} alt="canada" width={120} height={120} />
                    <Image src={uk} alt="uk" width={120} height={120} />
                    <Image src={techforing} alt="techforing" className='self-start' width={120} height={120} />
                    <Image src={turkey} alt="turkey" width={120} height={120} />
                    {/* <Image src={india} alt="india" width={120} height={120} /> */}
                    <Image src={bangladesh} alt="bangladesh" width={120} height={120} />
                </div>
                <p className={cn('bg-[#F6F6F6] border-b-[2.5px] p-4 md:p-10 text-lightBGBodyText z-10', {
                    'border-secondary': color === 'secondary',
                })}>
                    {data.para1}
                </p>
                <div className='flex flex-col md:flex-row items-center'>
                    <span className={cn('text-end flex-1 self-center text-[120px] font-bold md:text-[150px] drop-shadow-[0_15px_3px_rgba(0,0,0,0.25)]', {
                        'text-secondary': color === 'secondary',
                    })}>
                        {data.specialists}
                    </span>
                    <Content className='flex-1 p-4 md:p-10 leading-6  text-lightBGBodyText'>{data.para2}
                    </Content>
                </div>
            </div>
        </section>
    );
};

export default RegionalOffice;