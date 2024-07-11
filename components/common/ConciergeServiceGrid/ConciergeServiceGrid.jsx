import React, { Fragment } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";

const ConciergeServiceGrid = ({ color = 'green', noOfGrid = 5, onClick, activeItem, renderData }) => {
    const gridNumberVariant = {
        1: 'grid-cols-1 lg:grid-cols-1',
        2: 'grid-cols-2 lg:grid-cols-2',
        3: 'grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-2 lg:grid-cols-5'
    }
    const cardBGVariant = {
        primary: 'w-full lg:w-[224px] h-[120px] bg-sky/5 shadow-sm rounded-sm p-5 border-b-4 border-sky flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform scale-105',
        sky: 'w-full lg:w-[224px] h-[120px] bg-secondary/5 shadow-sm rounded-sm p-5 border-b-4 border-secondary flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform scale-105',
        yellow: 'w-full lg:w-[224px] h-[120px] bg-yellowThree/5 shadow-sm rounded-sm p-5 border-b-4 border-yellowThree flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform scale-105',
        purple: 'w-full lg:w-[224px] h-[120px] bg-purpleThree/5 shadow-sm rounded-sm p-5 border-b-4 border-purpleThree flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform scale-105',
        red: 'w-full lg:w-[224px] h-[120px] bg-redThree/5 shadow-sm rounded-sm p-5 border-b-4 border-redThree flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform scale-105',
        green: 'w-full lg:w-[224px] h-[120px] bg-green/5 shadow-sm rounded-sm p-5 border-b-4 border-green flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform scale-105',
        inActive: 'w-full lg:w-[224px] h-[120px] bg-secondaryLightBG shadow-sm rounded-sm p-5 flex items-center justify-center cursor-pointer transition duration-500 ease-in-out transform hover:shadow-lg'
    }
    const textColorVariant = {
        primary: 'text-sky font-semibold',
        sky: 'text-secondary font-semibold',
        yellow: 'text-yellowThree font-semibold',
        purple: 'text-purpleThree font-semibold',
        red: 'text-redThree font-semibold',
        green: 'text-green font-semibold',
    }
    const outerBulletBorderVariant = {
        primary: 'border border-sky/15',
        sky: 'border border-secondary/15',
        yellow: 'border border-yellowThree/15',
        purple: 'border border-purpleThree/15',
        red: 'border border-redThree/15',
        green: 'border border-green/15',
    }
    const middleBulletVariant = {
        primary: 'bg-sky/20',
        sky: 'bg-secondary/20',
        yellow: 'bg-yellowThree/20',
        purple: 'bg-purpleThree/20',
        red: 'bg-redThree/20',
        green: 'bg-green/20'
    }
    const innerBulletVariant = {
        primary: 'bg-sky',
        sky: 'bg-secondary',
        yellow: 'bg-yellowThree',
        purple: 'bg-purpleThree',
        red: 'bg-redThree',
        green: 'bg-green',
    }
    const calculateHeight = (length) => {
        if (length === 1) return '100px';
        return `${100 + (length - 1) * 80}px`;
    };
    return (
        <div className={`grid ${gridNumberVariant[noOfGrid]} gap-5 px-3 relative`}>
            {renderData?.map((item, index) => (
                <div key={index}>
                    <div
                        className={`${activeItem === index ? cardBGVariant[color] : cardBGVariant.inActive}`}
                        onClick={() => onClick(index)}
                    >
                        <h5 className={`text-base lg:text-lg ${activeItem === index ? textColorVariant[color] : 'text-lightBGText'} font-tertiary text-center font-medium`}>{item?.title}</h5>
                    </div>
                    {activeItem === index && (
                        <Fragment>
                            <div className='my-2 flex flex-col items-center'>
                                <BiSolidDownArrow className={`${textColorVariant[color]} text-2xl animate-rotate`} />
                            </div>
                            <div className={`rounded-md w-full h-[${calculateHeight(item?.points?.length)}] hidden lg:inline-block`}>
                                <div className='absolute left-0 px-3 lg:px-10 py-2 lg:py-6 flex flex-col gap-5'>
                                    {item?.points?.map((item, index) => (
                                        <div className='w-full lg:w-[1120px] min-h-[58px] flex' key={index}>
                                            <div className='w-[42px] h-full animate-fadeIn'>
                                                <div className={`w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] rounded-full flex items-center justify-center shadow-sm ${outerBulletBorderVariant[color]}`}>
                                                    <div className={`w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full flex items-center justify-center shadow-md ${middleBulletVariant[color]}`}>
                                                        <div className={`w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] rounded-full shadow-xl ${innerBulletVariant[color]}`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-full'>
                                                <h5 className='text-base lg:text-lg text-lightBGText font-tertiary font-semibold capitalize pb-2.5 animate-fadeIn'>{item?.subTitle}</h5>
                                                <p className='text-sm lg:text-base text-lightBGText font-tertiary text-justify animate-fadeIn'>{item?.subDesc}</p>
                                            </div>
                                        </div>))}
                                </div>
                            </div>
                            <div className={`rounded-md w-full h-[240px] visible lg:hidden`}>
                                <div className='absolute left-0 px-3 lg:px-10 py-2 lg:py-6 flex flex-col gap-5'>
                                    {item?.points?.map((item, index) => (
                                        <div className='w-full lg:w-[1120px] min-h-[58px] flex' key={index}>
                                            <div className='w-[42px] h-full animate-fadeIn'>
                                                <div className={`w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] rounded-full flex items-center justify-center shadow-sm ${outerBulletBorderVariant[color]}`}>
                                                    <div className={`w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full flex items-center justify-center shadow-md ${middleBulletVariant[color]}`}>
                                                        <div className={`w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] rounded-full shadow-xl ${innerBulletVariant[color]}`}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-full'>
                                                <h5 className='text-base lg:text-lg text-lightBGText font-tertiary font-semibold capitalize pb-2.5 animate-fadeIn'>{item?.subTitle}</h5>
                                                <p className='text-sm lg:text-base text-lightBGText font-tertiary text-justify animate-fadeIn'>{item?.subDesc}</p>
                                            </div>
                                        </div>))}
                                </div>
                            </div>
                        </Fragment>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ConciergeServiceGrid;