'use client'
import ConciergeServiceGrid from '@/components/common/ConciergeServiceGrid/ConciergeServiceGrid';
import Content from '@/components/common/Content';
import Title from '@/components/common/Title';
import React from 'react';

const ConciergeService = ({ title, desc, variant = 'green', renderedData }) => {
    const [activeItem, setActiveItem] = React.useState(0)

    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <div className='flex flex-col gap-8'>
                <Title className="text-center">{title}</Title>
                {
                    desc && <Content className="lg:text-center">{desc}</Content>
                }
            </div>
            <div className='w-full h-fit flex flex-col items-center justify-center gap-5 pt-[42px]'>
                <ConciergeServiceGrid
                    color={variant}
                    noOfGrid={5}
                    onClick={(index) => setActiveItem(index)}
                    activeItem={activeItem}
                    renderData={renderedData}
                />
            </div>
        </div>
    );
};

export default ConciergeService;