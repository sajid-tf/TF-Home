import React from 'react';

const RoundItems = ({ variant = 'purpleTwo', renderedData, noOfGrid = 6 }) => {
    const gridNumber = {
        1: 'grid-cols-2 md:grid-cols-1',
        2: 'grid-cols-2 md:grid-cols-2',
        3: 'grid-cols-2 md:grid-cols-3',
        4: 'grid-cols-2 md:grid-cols-4',
        5: 'grid-cols-2 md:grid-cols-5',
        6: 'grid-cols-2 md:grid-cols-6',
        7: 'grid-cols-2 md:grid-cols-7',
        8: 'grid-cols-2 md:grid-cols-8'
    }
    const outerBGVariant = {
        primary: 'bg-sky/20',
        secondary: 'bg-secondaryTwo/20',
        sky: 'bg-skyFour/20',
        yellow: 'bg-yellowThree/20',
        purple: 'bg-purpleThree/20',
        red: 'bg-redThree/20',
        green: 'bg-green/20',
        purpleTwo: 'bg-purpleTwo/20',
    }
    const innerBGVariant = {
        primary: 'bg-sky',
        secondary: 'bg-secondaryTwo',
        sky: 'bg-skyFour',
        yellow: 'bg-yellowThree',
        purple: 'bg-purpleThree',
        red: 'bg-redThree',
        green: 'bg-green',
        purpleTwo: 'bg-purpleTwo',
    }
    return (
        <div className='flex items-center justify-center'>
            <div className={`grid ${gridNumber[noOfGrid]} items-start justify-center gap-[80px]`}>
                {renderedData?.map((item, index) => (
                    <div key={index}>
                        <div className='w-[106px] min-h-[172px] flex flex-col gap-[18px] cursor-pointer'>
                            <div className={`w-full h-[106px] rounded-full flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-105 translate-transform duration-300 ease-linear ${outerBGVariant[variant]}`}>
                                <div className={`w-[78px] h-[78px] rounded-full ${innerBGVariant[variant]} flex items-center justify-center shadow-lg`}>
                                    <div className={`text-5xl text-strongWhite`}>
                                        {item?.icon}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className={`text-lightBGText font-tertiary font-semibold text-center`}>{item?.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoundItems;