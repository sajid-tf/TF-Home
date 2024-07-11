import ComplianceServiceItem from '@/components/common/ComplianceServiceItem/ComplianceServiceItem';
import React from 'react';

const ComplianceService = ({
    numberOfGrid = 1,
    titleSection,
    isDesc = false,
    descCenterAlign = false,
    descSection,
    renderData,
    variant = 'sky',
    topBorder = false,
    noOfPaddingBottomAfterTitle = 0,
    leftRightBorder = false,
    isSubTitle = false,
    subTitle,
    isSubDesc = false,
    subDesc
}) => {
    const numberOfGridVariant = {
        1: 'py-5 grid grid-cols-1 lg:grid-cols-1 gap-5',
        2: 'py-5 grid grid-cols-1 lg:grid-cols-2 gap-5',
        3: 'py-5 grid grid-cols-1 lg:grid-cols-3 gap-5',
        4: 'py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5',
        5: 'py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5',
        6: 'py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5'
    }
    const titlePaddingBottom = {
        0: 'text-2xl lg:text-4xl text-center font-tertiary font-bold text-lightBGText capitalize',
        1: 'text-2xl lg:text-4xl text-center font-tertiary font-bold text-lightBGText capitalize pb-5',
        2: 'text-2xl lg:text-4xl text-center font-tertiary font-bold text-lightBGText capitalize pb-10',
        3: 'text-2xl lg:text-4xl text-center font-tertiary font-bold text-lightBGText capitalize pb-14',
        4: 'text-2xl lg:text-4xl text-center font-tertiary font-bold text-lightBGText capitalize pb-20',
    }
    const leftRightBorderVariant = {
        sky: 'w-full h-fit border-y-[20px] lg:border-y-0 lg:border-x-[20px] border-skyFour/20 py-12 lg:py-5 lg:px-[80px]',
        green: 'w-full h-fit border-y-[20px] lg:border-y-0 lg:border-x-[20px] border-green/20 py-12 lg:py-5 lg:px-[80px]',
        red: 'w-full h-fit border-y-[20px] lg:border-y-0 lg:border-x-[20px] border-redThree/20 py-12 lg:py-5 lg:px-[80px]',
        purple: 'w-full h-fit border-y-[20px] lg:border-y-0 lg:border-x-[20px] border-purpleThree/20 py-12 lg:py-5 lg:px-[80px]',
        skyThree: 'w-full h-fit border-y-[20px] lg:border-y-0 lg:border-x-[20px] border-skyThree/20 py-12 lg:py-5 lg:px-[80px]',
        skyFour: 'w-full h-fit border-y-[20px] lg:border-y-0 lg:border-x-[20px] border-skyFour/20 py-12 lg:py-5 lg:px-[80px]',
        normal: 'w-full h-fit'
    }
    const subTitleBGColorVariant = {
        sky: 'w-5 min-h-[28px] bg-skyFour shadow-md',
        green: 'w-5 min-h-[28px] bg-green shadow-md',
        red: 'w-5 min-h-[28px] bg-redThree shadow-md',
        purple: 'w-5 min-h-[28px] bg-purpleThree shadow-md',
        skyThree: 'w-5 min-h-[28px] bg-skyThree shadow-md',
        skyFour: 'w-5 min-h-[28px] bg-skyFour shadow-md',
    }
    return (
        <div className='w-[360px] lg:w-[1200px] h-fit mx-auto'>
            {titleSection && <h3 className={`${titlePaddingBottom[noOfPaddingBottomAfterTitle]}`}>{titleSection ? titleSection : "Our Approach"}</h3>}
            {isDesc && <p className={`text-lightBGText ${descCenterAlign ? 'text-center' : 'text-justify'} font-tertiary pt-[22px] pb-12`}>
                {descSection ? descSection : 'Description'}
            </p>}
            {isSubTitle && <div className='w-full h-fit pb-[18px] flex'>
                <div className={`${subTitleBGColorVariant[variant]}`}></div>
                <div className='w-full min-h-[28px] px-4'>
                    <h4 className='text-lg lg:text-2xl text-lightBGText font-tertiary font-bold capitalize'>{subTitle ? subTitle : "Sub Title"}</h4>
                </div>
            </div>}
            {isSubDesc && <div className='w-full h-fit pb-[18px] text-justify'>
                <p>{subDesc ? subDesc : 'Sub Title'}</p>
            </div>}
            <div className={`${leftRightBorder ? leftRightBorderVariant[variant] : leftRightBorderVariant['normal']}`}>
                <div className={`${numberOfGridVariant[numberOfGrid]}`}>
                    {renderData?.map((item, index) => (
                        <ComplianceServiceItem
                            key={index}
                            title={item?.title}
                            description={item?.description}
                            number={item?.id}
                            numberOfGrid={item?.numberOfGrid}
                            isPoint={item?.isPoint}
                            isLowerDescription={item?.isLowerDescription}
                            lowerDescription={item?.lowerDescription}
                            renderItemData={item?.pointData}
                            color={variant}
                            topBorder={topBorder}
                            isDescription={item?.isDescription}
                            isOptions={item?.isOptions}
                            optionsData={item?.optionsData}
                        />))}
                </div>
            </div>
        </div >
    );
};

export default ComplianceService;