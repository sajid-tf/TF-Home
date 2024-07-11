import React from 'react';

const ComplianceServiceItem = ({
    number,
    title,
    description,
    isPoint = false,
    numberOfGrid = 3,
    isLowerDescription = false,
    lowerDescription,
    renderItemData,
    topBorder = false,
    isDescription,
    isOptions,
    optionsData,
    color = 'sky'
}) => {
    const numberOfGridVariant = {
        1: 'grid grid-cols-1 lg:grid-cols-1 gap-2',
        2: 'grid grid-cols-1 lg:grid-cols-2 gap-2',
        3: 'grid grid-cols-1 lg:grid-cols-3 gap-2',
        4: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2',
        5: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2',
        6: 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2'
    }
    const outerLeftBorder = {
        sky: 'border-t-4 lg:border-t-0 lg:border-l-4 border-skyFour pt-12 lg:pt-5 pb-[40px] lg:pb-5 pr-4 pl-4 lg:pr-10 lg:pl-20',
        green: 'border-t-4 lg:border-t-0 lg:border-l-4 border-green pt-12 lg:pt-5 pb-[40px] lg:pb-5 pr-4 pl-4 lg:pr-10 lg:pl-20',
        red: 'border-t-4 lg:border-t-0 lg:border-l-4 border-redThree pt-12 lg:pt-5 pb-[40px] lg:pb-5 pr-4 pl-4 lg:pr-10 lg:pl-20',
        purple: 'border-t-4 lg:border-t-0 lg:border-l-4 border-purpleThree pt-12 lg:pt-5 pb-[40px] lg:pb-5 pr-4 pl-4 lg:pr-10 lg:pl-20',
        skyThree: 'border-t-4 lg:border-t-0 lg:border-l-4 border-skyThree pt-12 lg:pt-5 pb-[40px] lg:pb-5 pr-4 pl-4 lg:pr-10 lg:pl-20',
        skyFour: 'border-t-4 lg:border-t-0 lg:border-l-4 border-skyFour pt-12 lg:pt-5 pb-[40px] lg:pb-5 pr-4 pl-4 lg:pr-10 lg:pl-20',
    }
    const outerTopBorder = {
        sky: 'border-t-4 border-skyFour pt-12 lg:pt-20 pb-[40px] lg:pb-[60px] px-4 lg:px-10',
        green: 'border-t-4 border-green pt-12 lg:pt-20 pb-[40px] lg:pb-[60px] px-4 lg:px-10',
        red: 'border-t-4 border-redThree pt-12 lg:pt-20 pb-[40px] lg:pb-[60px] px-4 lg:px-10',
        purple: 'border-t-4 border-purpleThree pt-12 lg:pt-20 pb-[40px] lg:pb-[60px] px-4 lg:px-10',
        skyThree: 'border-t-4 border-skyThree pt-12 lg:pt-20 pb-[40px] lg:pb-[60px] px-4 lg:px-10',
        skyFour: 'border-t-4 border-skyFour pt-12 lg:pt-20 pb-[40px] lg:pb-[60px] px-4 lg:px-10',
    }
    const outerBGLeftColor = {
        sky: 'bg-skyFour/20 left-1/2 lg:-left-10 -top-12 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2',
        green: 'bg-green/20 left-1/2 lg:-left-10 -top-12 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2',
        red: 'bg-redThree/20 left-1/2 lg:-left-10 -top-12 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2',
        purple: 'bg-purpleThree/20 left-1/2 lg:-left-10 -top-12 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2',
        skyThree: 'bg-skyThree/20 left-1/2 lg:-left-10 -top-12 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2',
        skyFour: 'bg-skyFour/20 left-1/2 lg:-left-10 -top-12 lg:top-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2',
    }
    const outerBGTopColor = {
        sky: 'bg-skyFour/20 -top-12 left-1/2 transform -translate-x-1/2',
        green: 'bg-green/20 -top-12 left-1/2 transform -translate-x-1/2',
        red: 'bg-redThree/20 -top-12 left-1/2 transform -translate-x-1/2',
        purple: 'bg-purpleThree/20 -top-12 left-1/2 transform -translate-x-1/2',
        skyThree: 'bg-skyThree/20 -top-12 left-1/2 transform -translate-x-1/2',
        skyFour: 'bg-skyFour/20 -top-12 left-1/2 transform -translate-x-1/2',
    }
    const innerBGColor = {
        sky: 'w-[45px] h-[61px] rounded-full bg-skyFour flex items-center justify-center shadow-md',
        green: 'w-[45px] h-[61px] rounded-full bg-green flex items-center justify-center shadow-md',
        red: 'w-[45px] h-[61px] rounded-full bg-redThree flex items-center justify-center shadow-md',
        purple: 'w-[45px] h-[61px] rounded-full bg-purpleThree flex items-center justify-center shadow-md',
        skyThree: 'w-[45px] h-[61px] rounded-full bg-skyThree flex items-center justify-center shadow-md',
        skyFour: 'w-[45px] h-[61px] rounded-full bg-skyFour flex items-center justify-center shadow-md',
    }
    const innerBorderColor = {
        sky: 'px-2.5 border-l-4 border-skyFour',
        green: 'px-2.5 border-l-4 border-green',
        red: 'px-2.5 border-l-4 border-redThree',
        purple: 'px-2.5 border-l-4 border-purpleThree',
        skyThree: 'px-2.5 border-l-4 border-skyThree',
        skyFour: 'px-2.5 border-l-4 border-skyFour',
    }
    return (
        <div className={`w-fit h-fit ${topBorder ? outerTopBorder[color] : outerLeftBorder[color]} relative translate-transform duration-700 ease-in-out`}>
            <div className={`w-[73px] h-[89px] rounded-full flex items-center justify-center shadow-md absolute ${topBorder ? outerBGTopColor[color] : outerBGLeftColor[color]}`}>
                <div className={`${innerBGColor[color]}`}>
                    <h5 className='text-[28px] text-strongWhite font-bold font-tertiary'>{number ? number : "1"}</h5>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {title && <h4 className='text-xl lg:text-2xl text-lightBGText font-tertiary font-bold'>{title ? title : "Set Up ISMS Policy"}</h4>}
                {isDescription && <p className='text-justify text-lightBGText font-tertiary' dangerouslySetInnerHTML={{ __html: description ? description : "Description" }}></p>}
                {isOptions && <div className='grid grid-cols-1 gap-2'>
                    {optionsData?.map((item, index) => (<div className='flex flex-col' key={index}>
                        <p className='text-textBGText font-tertiary'>{item?.item}</p>
                    </div>))}
                </div>}
                {isPoint && <div className={`${numberOfGridVariant[numberOfGrid]}`}>
                    {renderItemData?.map((item, index) => (<div className={`${innerBorderColor[color]}`} key={index}>
                        <p className='text-textBGText font-tertiary'>{item?.point}</p>
                    </div>))}
                </div>}
                {isLowerDescription && (
                    <p className='text-textBGText font-tertiary text-justify'>
                        {lowerDescription || "Lower Description"}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ComplianceServiceItem;