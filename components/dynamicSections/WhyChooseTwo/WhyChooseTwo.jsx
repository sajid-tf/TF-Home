'use client';
import React, { useEffect } from 'react';
import DragonBG from '@/public/Images/why-choose-two/dragon-bg.png';

const WhyChooseTwo = ({ variant = 'secondary', title, subTitle, underSubTitle, renderedData }) => {
    const [hoverItem, setHoverItem] = React.useState(0);

    const borderColor = {
        primary: 'border-primary',
        secondary: 'border-secondary',
        tertiary: 'border-tertiary',
        red: 'border-red',
        yellow: 'border-yellow',
        purple: 'border-purple',
        sky: 'border-sky',
        green: 'border-green',
        redThree: 'border-redThree',
        yellowThree: 'border-yellowThree',
        purpleThree: 'border-purpleThree',
        skyThree: 'border-skyThree',
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setHoverItem((hoverItem) => {
                if (hoverItem === renderedData?.length - 1) {
                    return 0;
                }
                return hoverItem + 1;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, [hoverItem]);
    return (
        <div className="w-full" style={{
            backgroundImage: `url(${DragonBG.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
        }}>
            <div className='w-[360px] lg:w-[1200px] h-fit lg:h-[800px] mx-auto'>
                <div className='w-full h-full flex flex-col-reverse lg:flex-row'>
                    <div className='w-full lg:w-3/5 py-[10px] lg:py-[100px]'>
                        <div className={`w-[80%] border-l-[12px] ${borderColor[variant]} px-5`}>
                            <h2 className='text-2xl lg:text-4xl text-lightBGText font-tertiary font-bold leading-snug uppercase'>{title ? title : "WHY SUCCESSFUL PEOPLE CHOOSE TECHFORING"}</h2>
                        </div>
                        <div className='w-full visible pt-8 lg:hidden'>
                            <div className='w-[320px] h-[320px] rounded-lg'>
                                <div className='h-full w-full rounded-lg imgTransitionEase'></div>
                            </div>
                        </div>
                        <div className='w-full pt-8 lg:pt-12 pb-6 pr-8'>
                            <p className='text-lightBGText text-sm lg:text-lg leading-loose text-justify lg:text-normal'>{subTitle ? subTitle : "At TechForing, we are committed to safeguarding the digital lives of successful people from all over the world. Our White-Glove Cybersecurity & Threat Detection Solutions are designed to provide you with a seamless, personalized solution."}</p>
                            <p className='text-lightBGText text-sm lg:text-lg leading-loose font-semibold'>{underSubTitle ? underSubTitle : "Our commitment to you:"}</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            {renderedData?.map((option, index) => (
                                <div key={index} className='flex items-center justify-start gap-2'
                                    onMouseEnter={() => setHoverItem(index)}
                                    onMouseLeave={() => setHoverItem(hoverItem)}
                                >
                                    <div className={`h-[50px] lg:h-[27px] w-[12px] bg-transparent border-2 ${borderColor[variant]} border-r-transparent ${index === hoverItem ? 'inline-block' : 'invisible'}`}></div>
                                    <p className={`text-lightBGText text-sm lg:text-lg leading-loose pr-6 lg:pr-0 ${index === hoverItem ? 'font-semibold' : 'font-normal'}`} key={index}>{option?.option}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-2/5 relative hidden lg:inline-block'>
                        <div className='w-[60%] h-full bg-secondaryLightBG absolute right-0'></div>
                        <div className='w-[400px] h-[500px] rounded-lg absolute left-0 top-1/2 transform -translate-y-1/2'>
                            <div className='h-full w-full rounded-lg imgTransitionEase'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseTwo;