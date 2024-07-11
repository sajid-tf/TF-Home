'use client';
import React from 'react';
import { ConciergeActiveArrowIcon } from './ConciergeSVG';
import Content from '@/components/common/Content';

const ConciergeServiceTwo = ({ variant = 'green', renderData, title, desc }) => {
    const [active, setActive] = React.useState(1);
    const [borderAlign, setBorderAlign] = React.useState('left');
    const [clicked, setClicked] = React.useState(false);

    const buttonsLeftVariant = {
        inactive: 'border-r border-dashed border-lightBGBodyText/50',
        green: 'border-l-4 border-green bg-green/5 translate-transform duration-300 ease-in-out',
    }
    const buttonsRightVariant = {
        inactive: 'border-l border-dashed border-lightBGBodyText/50',
        green: 'border-r-4 border-green bg-green/5 translate-transform duration-300 ease-in-out',
    }
    const roundLeftVariant = {
        inactive: 'w-[60px] h-[60px] border border-dashed border-lightBGBodyText/50 -right-8 flex items-center justify-center',
        active: 'w-[80px] h-[80px] rounded-full shadow-conciergeDropShadow -right-10 flex items-center justify-center transition-all duration-300 ease-in-out'
    }
    const roundRightVariant = {
        inactive: 'w-[60px] h-[60px] border border-dashed border-lightBGBodyText/50 -left-8 flex items-center justify-center',
        active: 'w-[80px] h-[80px] rounded-full shadow-conciergeDropShadow -left-10 flex items-center justify-center transition-all duration-300 ease-in-out'
    }
    const activeIcon = {
        active: 'w-[40px] h-[40px] text-green',
        inactive: 'w-[30px] h-[30px] text-lightBGBodyText/50'
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
    const borderVariants = {
        primary: 'border-sky',
        sky: 'border-secondary',
        yellow: 'border-yellowThree',
        purple: 'border-purpleThree',
        red: 'border-redThree',
        green: 'border-green',
    }
    const mobileBorderVariants = {
        primary: 'border-t-4 border-primary bg-primary/5',
        sky: 'border-t-4 border-sky bg-sky/5',
        yellow: 'border-t-4 border-yellow bg-yellow/5',
        purple: 'border-t-4 border-purple bg-purple/5',
        red: 'border-t-4 border-red bg-red/5',
        green: 'border-t-4 border-green bg-green/5',
        inactive: 'border-t border-dashed border-lightBGBodyText/50 bg-lightBGBodyText/5'
    }
    const mobileRoundVariant = {
        inactive: 'w-[45px] h-[45px] rounded-full border border-dashed border-lightBGBodyText/50 -top-[2px]',
        active: 'w-[65px] h-[65px] rounded-full shadow-conciergeDropShadow -top-[5px] transition-all duration-300 ease-in-out'
    }
    const mobileActiveIcon = {
        active: 'w-[32px] h-[32px] text-green',
        inactive: 'w-[24px] h-[24px] text-lightBGBodyText/50'
    }
    const textVariant = {
        primary: 'text-primary',
        sky: 'text-sky',
        yellow: 'text-yellowThree',
        purple: 'text-purpleThree',
        red: 'text-redThree',
        green: 'text-green',
    }
    return (
        <div className='w-full lg:w-[1200px] h-fit lg:h-fit mx-auto'>
            <div className='flex flex-col gap-4 lg:gap-8'>
                <h3 className="text-center text-lightBGText text-2xl md:text-4xl font-bold capitalize" dangerouslySetInnerHTML={{ __html: title ? title : '' }}></h3>
                {desc && <Content className="px-3 text-justify lg:text-center lg:px-0">{desc}</Content>}
            </div>
            <div className='w-full h-full pt-[42px] lg:flex hidden'>
                <div className='w-3/12 flex flex-col items-center justify-center flex-shrink-0'>
                    {renderData.filter((_, index) => index < 5).map((item, index) =>
                        <div key={index} className={`w-[250px] h-[120px] py-5 pl-5 pr-[60px] cursor-pointer flex items-center justify-center ${active === item?.id ? buttonsLeftVariant[variant] : buttonsLeftVariant.inactive} relative`}
                            onClick={() => {
                                setActive(item?.id);
                                setBorderAlign('left');
                                setClicked(!clicked);
                            }}
                        >
                            <h5 className='text-lg text-lightBGText text-center font-tertiary font-medium'>{item?.title}</h5>
                            <div className={`${active === item?.id ? roundLeftVariant.active : roundLeftVariant.inactive} rounded-full absolute top-1/2 -translate-y-1/2 bg-strongWhite`}>
                                {React.cloneElement(item?.icon, { className: `${active === item?.id ? activeIcon.active : activeIcon.inactive}` })}
                            </div>
                            {active === item?.id && (
                                <div className='absolute -right-20 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out'>
                                    <ConciergeActiveArrowIcon className={`${textVariant[variant]}`} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className='w-6/12 flex items-center justify-center'>
                    <div className={`w-[500px] min-h-[420px] flex flex-col items-center justify-center gap-5 bg-green/5 ${borderAlign === 'left' ? 'border-r-4' : 'border-l-4'} ${borderVariants[variant]} p-10 transition-all duration-300 ease-in-out`}>
                        {renderData.find(item => item?.id === active)?.details.map((item, index) => (
                            <div className='w-full flex items-start gap-2.5' key={index}>
                                <div className={`${clicked ? 'animate-slide-in' : 'animate-slide-in-two'}`}>
                                    <div className={`w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] rounded-full flex items-center justify-center shadow-sm ${outerBulletBorderVariant[variant]}`}>
                                        <div className={`w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full flex items-center justify-center shadow-md ${middleBulletVariant[variant]}`}>
                                            <div className={`w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] rounded-full shadow-xl ${innerBulletVariant[variant]}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex flex-col'>
                                    <h5 className={`text-base lg:text-lg ${textVariant[variant]} font-tertiary font-semibold capitalize ${clicked ? 'animate-slide-in' : 'animate-slide-in-two'}`}>{item?.title}</h5>
                                    <p className={`text-sm lg:text-base text-lightBGText font-tertiary text-justify ${clicked ? 'animate-slide-in' : 'animate-slide-in-two'}`}>{item?.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-3/12 flex flex-col items-center justify-center flex-shrink-0'>
                    {renderData.filter((_, index) => index >= 5).map((item, index) =>
                        <div key={index} className={`w-[250px] h-[120px] py-5 pr-5 pl-[60px] cursor-pointer flex items-center justify-center ${active === item?.id ? buttonsRightVariant[variant] : buttonsRightVariant.inactive} relative`}
                            onClick={() => {
                                setActive(item?.id);
                                setBorderAlign('right');
                                setClicked(!clicked);
                            }}
                        >
                            <h5 className='text-lg text-lightBGText text-center font-tertiary font-medium'>{item?.title}</h5>
                            <div className={`${active === item?.id ? roundRightVariant.active : roundRightVariant.inactive} rounded-full absolute top-1/2 -translate-y-1/2 bg-strongWhite`}>
                                {React.cloneElement(item?.icon, { className: `${active === item?.id ? activeIcon.active : activeIcon.inactive}` })}
                            </div>
                            {active === item?.id && (
                                <div className='absolute -left-20 top-1/2 -translate-y-1/2 rotate-180 transition-all duration-300 ease-in-out'>
                                    <ConciergeActiveArrowIcon className={`${textVariant[variant]}`} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className='lg:hidden visible flex items-center justify-center pt-[50px]'>
                <div className='grid grid-cols-1 items-center justify-center gap-10'>
                    {renderData.map((item, index) => (
                        <div key={index} className='w-full'>
                            <div className={`w-[330px] h-[100px] py-2.5 pt-2.5 flex items-center justify-center cursor-pointer ${active === item?.id ? mobileBorderVariants[variant] : mobileBorderVariants.inactive} relative`}
                                onClick={() => {
                                    setActive(item?.id);
                                    setClicked(!clicked);
                                }}
                            >
                                <h5 className='text-lg text-lightBGText text-center font-tertiary font-medium'>{item?.title}</h5>
                                <div className={`flex items-center justify-center bg-strongWhite absolute -translate-y-1/2  ${active === item?.id ? mobileRoundVariant.active : mobileRoundVariant.inactive}`}>
                                    {React.cloneElement(item?.icon, { className: `${active === item?.id ? mobileActiveIcon.active : mobileActiveIcon.inactive}` })}
                                </div>
                                {active === item?.id &&
                                    <div className='absolute -bottom-[28px] left-1/2 -translate-x-1/2 rotate-90 transition-all duration-300 ease-in-out'>
                                        <ConciergeActiveArrowIcon className={`${textVariant[variant]}`} />
                                    </div>}
                            </div>
                            {active === item?.id &&
                                <div className={`w-[330px] h-fit p-5`}>
                                    <div className='flex flex-col gap-2.5'>
                                        {item?.details.map((item, index) => (
                                            <div className='w-full flex items-start gap-2.5' key={index}>
                                                <div className={`${clicked ? 'animate-slide-in' : 'animate-slide-in-two'}`}>
                                                    <div className={`w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] rounded-full flex items-center justify-center shadow-sm ${outerBulletBorderVariant[variant]}`}>
                                                        <div className={`w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] rounded-full flex items-center justify-center shadow-md ${middleBulletVariant[variant]}`}>
                                                            <div className={`w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] rounded-full shadow-xl ${innerBulletVariant[variant]}`}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full flex flex-col'>
                                                    <h5 className={`text-base lg:text-lg ${textVariant[variant]} font-tertiary font-semibold capitalize ${clicked ? 'animate-slide-in' : 'animate-slide-in-two'}`}>{item?.title}</h5>
                                                    <p className={`text-sm lg:text-base text-lightBGText font-tertiary text-justify ${clicked ? 'animate-slide-in' : 'animate-slide-in-two'}`}>{item?.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ConciergeServiceTwo;