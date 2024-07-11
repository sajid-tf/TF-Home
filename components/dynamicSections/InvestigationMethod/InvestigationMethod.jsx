import InvestigationMethodCard from '@/components/common/InvestigationMethodCard/InvestigationMethodCard';
import React from 'react';

const InvestigationMethod = ({ title, noOfGrid = 5, variant = 'secondaryTwo', renderData }) => {
    const gridVariants = {
        1: 'grid grid-cols-2 lg:grid-cols-1 gap-10',
        2: 'grid grid-cols-2 lg:grid-cols-2 gap-10',
        3: 'grid grid-cols-2 lg:grid-cols-3 gap-10',
        4: 'grid grid-cols-2 lg:grid-cols-4 gap-10',
        5: 'grid grid-cols-2 lg:grid-cols-5 gap-10',
        6: 'grid grid-cols-2 lg:grid-cols-6 gap-10',
        7: 'grid grid-cols-2 lg:grid-cols-7 gap-10',
        8: 'grid grid-cols-2 lg:grid-cols-8 gap-10',
        9: 'grid grid-cols-2 lg:grid-cols-9 gap-10',
        10: 'grid grid-cols-2 lg:grid-cols-10 gap-10'
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            <div className='w-full h-full pb-[22px]'>
                <h3 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold capitalize text-center'>{title ? title : "Methods That TechForing Follow For Cyber Crime Investigation"}</h3>
            </div>
            <div className='p-6 flex items-center justify-center'>
                <div className={`${gridVariants[noOfGrid]}`}>
                    {renderData?.map((item, index) => (
                        <InvestigationMethodCard
                            key={index}
                            number={item?.id}
                            item={item?.itemName}
                            color={variant}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InvestigationMethod;