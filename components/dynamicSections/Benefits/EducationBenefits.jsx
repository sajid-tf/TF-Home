import Content from '@/components/common/Content';
import Divider from '@/components/common/Divider';
import DividerWrapper from '@/components/common/Services/DividerWrapper';
import Subtitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';
import Image from 'next/image';
import React from 'react';

const EducationBenefits = ({ color = "secondary", data }) => {
    return (
        <div className='max-w-[1200px] mx-4 md:mx-auto'>
            <Title className="mb-4 text-center">{data?.title}</Title>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='flex-1 p-10 flex flex-col gap-5'>
                    <Image src={data?.benefits[0].image.src} alt={data?.title} />
                    <Subtitle>{data?.benefits[0].subTitle}</Subtitle>
                    <Content>{data?.benefits[0].para}</Content>
                </div>
                <DividerWrapper color={color} icon={data.icon}>
                    <Divider vertical color={color} className="w-[2px] hidden md:block absolute left-1/2 -translate-x-1/2" />
                    <Divider horizontal color={color} className="w-full h-[2px] md:hidden absolute left-1/2 -translate-x-1/2" />
                </DividerWrapper>
                <div className='flex-1 p-10 flex flex-col gap-5'>
                    <Image src={data?.benefits[1].image.src} alt={data?.title} />
                    <Subtitle>{data?.benefits[1].subTitle}</Subtitle>
                    <Content>{data?.benefits[1].para}</Content>
                </div>
            </div>

        </div>
    );
};

export default EducationBenefits;