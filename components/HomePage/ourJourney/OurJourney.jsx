'use client';
import React from 'react';
import journeyBG from '@/assets/journey/path.png';
import { featuredData, journeyData } from '@/utils/mock/dummyData';
import FeaturedInSection from '@/components/dynamicSections/FeaturedInSection/FeaturedInSection';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { OurJourneyBottomOneSvg, OurJourneyBottomTwoSvg, OurJourneyTopOneSvg, OurJourneyTopTwoSvg } from '@/utils/svg/ourJourneySVG';

const options = {
    type: 'slide',
    perPage: 3,
    gap: '0px',
    autoplay: true,
    interval: 6000,
    rewind: true,
    arrows: true,
    pagination: true,
    classes: {
        prev: 'splide__arrow--prev resources_blog-prev !hidden',
        next: 'splide__arrow--next resources_blog-next !hidden',
        pagination: 'splide__pagination max-sm:!hidden',
    },
    breakpoints: {
        450: {
            perPage: 1,
            classes: {
                pagination: 'splide__pagination !visible',
            }
        }
    }
};

const OurJourney = () => {
    const smallTransparentVariant = {
        redOne: 'bg-red/10',
        secondary: 'bg-secondary/10',
        yellowOne: 'bg-yellow/10',
        sky: 'bg-sky/10',
        primary: 'bg-primary/10',
        ash: 'bg-lightBlack/10',
    }
    const textColorVariant = {
        redOne: 'text-red',
        secondary: 'text-secondary',
        yellowOne: 'text-yellow',
        sky: 'text-sky',
        primary: 'text-primary',
        ash: 'text-lightBlack',
    }
    const shapeColorVariant = {
        primary: '#182F59',
        sky: '#4285F4',
        redOne: '#DB162F',
        secondary: '#5BBC2E',
        yellowOne: '#F5BB00',
    }
    return (
        <section className='w-full relative'>
            <div className='w-[360px] lg:w-[1200px] mx-auto'>
                <div className='w-full h-[600px] lg:h-[660px] mt-10' style={{ backgroundImage: `url(${journeyBG?.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className='w-[1100px] mx-auto hidden lg:flex items-center justify-center'>
                        <div className='w-full flex items-center justify-center relative'>
                            <div className='w-2/12 journey-drop-shadow'>
                                <h2 className='text-5xl text-primary leading-tight'>Our <span className='text-secondary'>Journey</span> of 10 Years</h2>
                            </div>
                            <div className='w-10/12'>
                                <Splide options={options} aria-label="Timeline">
                                    {journeyData?.map((data, index) => (
                                        <SplideSlide key={index}>
                                            <div className='w-[310px] h-[360px] flex items-center justify-center my-12 relative'>
                                                <div className='flex flex-col items-start justify-start gap-3 px-10'>
                                                    <h4 className='text-2xl h-fit text-black opacity-95'>{data?.title}</h4>
                                                    <p className='text-sm text-lightBlack text-justify'>{data?.content}</p>
                                                </div>
                                                {index % 2 === 0 ? <div className={`absolute top-0 right-0 ${journeyData?.length - 1 === index ? 'hidden' : ''}`}>
                                                    <OurJourneyTopOneSvg color={shapeColorVariant[data?.top]} />
                                                </div> :
                                                    <div className='absolute top-0 -right-[91px]'>
                                                        <OurJourneyTopTwoSvg color={shapeColorVariant[data?.top]} />
                                                    </div>}
                                                {index % 2 === 0 ? <div className={`absolute bottom-0 -right-[91px] ${journeyData?.length - 1 === index ? 'hidden' : ''}`}>
                                                    <OurJourneyBottomOneSvg color={shapeColorVariant[data?.bottom]} />
                                                </div> :
                                                    <div className='absolute bottom-0 right-0'>
                                                        <OurJourneyBottomTwoSvg color={shapeColorVariant[data?.bottom]} />
                                                    </div>}
                                                <div className={`absolute w-fit h-[78px] flex items-center justify-center px-3 ${index % 2 === 0 ? '-top-10' : '-bottom-10'}`}>
                                                    <span className={`text-[42px] ${textColorVariant[data?.variant]}`}>{data?.year}</span>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    ))}
                                </Splide>
                            </div>
                        </div>
                    </div>
                    <div className='visible lg:hidden px-2'>
                        <div className='flex items-center justify-center journey-drop-shadow'>
                            <h2 className='text-3xl text-primary'>Our <span className='text-secondary'>Journey</span></h2>
                        </div>
                        <div className='w-full'>
                            <Splide options={options} aria-label="Timeline">
                                {journeyData?.map((data, index) => (
                                    <SplideSlide key={index}>
                                        <div className={`flex flex-col items-center justify-center gap-3 mt-5`}>
                                            <div className={`w-[90px] h-[90px] rounded-full flex items-center justify-center ${smallTransparentVariant[data?.variant]}`}>
                                                <h4 className={`text-2xl font-tertiary font-bold ${textColorVariant[data?.variant]}`}>
                                                    {data?.year}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className={`w-full h-fit p-2.5`}>
                                            <p className={`text-base text-lightBGText text-justify`}>
                                                {data?.content}
                                            </p>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </Splide>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full absolute bottom-8'>
                <FeaturedInSection
                    isTitle={true}
                    title={"Featured In"}
                    renderedData={featuredData}
                    variants='default'
                />
            </div>
        </section>
    );
};

export default OurJourney;