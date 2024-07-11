"use client";
import { BusinessSecurityContent, PersonalSecurityContent, serviceChildItems, servicesData } from '@/utils/mock/dummyData';
import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import ServiceMainItem from './serviceRightLayoutItems/ServiceMainItem';
import ServiceChildItem from './serviceRightLayoutItems/ServiceChildItem';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import Link from 'next/link';

const ServiceLayout = () => {
    const parentSlide = React.useRef();
    const [isHover, setIsHover] = React.useState(false);
    const [expand, setExpand] = React.useState({
        itemName: servicesData[0]?.serviceName,
        expand: true,
        borderColor: servicesData[0]?.color,
        contentName: "Business Cybersecurity"
    });
    const [clicked, setClicked] = React.useState(false);
    const options1 = {
        direction: 'ttb',
        // wheel: true,
        // releaseWheel: true,
        rewind: true,
        perPage: 1,
        arrows: false,
        height: '560px',
        pagination: true,
        classes: {
            page: 'splide__pagination__page !hidden',
            pagination: 'splide__pagination parent-class-pagination'
        }
    }
    const options2 = {
        rewind: true,
        perPage: 1,
        arrows: false,
        pagination: true,
    }
    const options3 = {
        rewind: true,
        perPage: 1,
        arrows: false,
        pagination: true,
    }
    const handleTab = (index, service) => {
        const parentSliderPagination = document?.querySelector('.parent-class-pagination');
        setExpand({
            itemName: service?.serviceName,
            expand: service?.serviceName === expand?.itemName ? !expand?.expand : true,
            borderColor: service?.color,
            contentName: service?.serviceName
        })
        const sliderPagination = parentSliderPagination?.querySelector(`[aria-label="Go to slide ${index + 1}"]`);
        sliderPagination.click();
    }
    useEffect(() => {
        const parentSliderPagination = document?.querySelector('.parent-class-pagination');
        const allPagination = parentSliderPagination?.querySelectorAll('.splide__pagination__page');
        allPagination?.forEach((item, index) => {
            //is have class .is_active
            if (item.classList.contains('is-active')) {
                setExpand({
                    itemName: servicesData[index]?.serviceName,
                    expand: true,
                    borderColor: servicesData[index]?.color,
                    contentName: servicesData[index]?.serviceName
                })
            }
        })
        if (parentSlide.current) {
            const splideEvent = parentSlide.current.splide.event;
            const splide = parentSlide.current.splide;
            splideEvent.on('active', (slide) => {
                setExpand({
                    itemName: servicesData[slide?.index]?.serviceName,
                    expand: true,
                    borderColor: servicesData[slide?.index]?.color,
                    contentName: servicesData[slide?.index]?.serviceName
                })
            });
            splide.on('mounted', () => {
                splide.mount();
            });
        }
    }, [])
    const ServiceParentItem = ({ content }) => {
        return (
            <div className='px-3'>
                <div className='flex items-center justify-between'>
                    <h3 className={`text-base text-${content?.titleColor}`}>{content?.title}</h3>
                    <div className='pr-12 scale-75'>{content?.titleSvg}</div>
                </div>
                <div className='mt-5'>
                    <p className='text-lightBlack text-justify text-sm'>{content?.description}</p>
                </div>
                <div className='flex items-center gap-5 mt-3'>
                    <Image src={content?.roundImgSm} alt={content?.title} />
                    <div className='flex flex-col gap-3 justify-center'>
                        {
                            content?.lists?.map((item, index) =>
                                <span className={`fadeIn-${index} rounded border-l-2 px-3 py-1 ${item?.class}`} key={index}>{item?.name}</span>
                            )
                        }
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='text-lightBlack text-justify text-sm'>{content?.footerDesc}</p>
                </div>
                <div className='flex items-center justify-center py-4'>
                    <div
                        className={`flex items-center justify-start gap-2 border-l-8 border-${content?.titleColor} text-${content?.titleColor} h-11 w-fit cursor-pointer allService-${content?.titleColor}`}
                        style={{
                            backgroundColor: isHover && `var(--${content?.titleColor})`,
                            color: isHover && 'white',
                            transition: 'background-color 0.5s ease, width 0.5s ease',
                            flexDirection: isHover && 'row-reverse',
                            width: isHover && 'fit-content',
                            justifyContent: isHover && 'space-around',
                            padding: isHover && '0 10px',
                        }}
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <AiOutlineArrowRight className={`text-lg`} />
                        <Link href={content.btnLink}>
                            <h3 className={`text-lg text-nowrap`}>{content?.exploreBtn}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
    const ServiceChildItems = ({ child }) => {
        return (
            <div className='px-3 h-fit'>
                <h1 className={`text-base !w-full border-l-2 border-r-2 border-${child?.content?.titleColor} text-center p-2.5 mb-2.5 text-${child?.content?.titleColor} bg-${child?.content?.titleColor}/10`}>{child?.itemName}</h1>
                <div className='flex gap-4 items-center justify-between'>
                    <h3 className={`text-base text-${child?.content?.titleColor}`}>{child?.content?.title}</h3>
                    <span>{child?.content?.titleImg}</span>
                </div>
                <div>
                    <div className='rounded-lg flex items-center justify-center h-fit w-full'>
                        <Image src={child?.content?.mainImg} alt={child?.content?.title} />
                    </div>
                    {child?.content?.isDescTitle && <div>
                        <h4 className={`text-${child?.content?.titleColor} text-sm font-semibold mt-4 px-4`}>{child?.content?.descTitle}</h4>
                    </div>}
                    <div className='px-4 flex flex-col items-center justify-center mt-2'>
                        <p className='text-lightBlack text-justify text-base'>{child?.content?.description}</p>
                    </div>
                    <div className='px-4 my-3'>
                        <div className={`flex items-center justify-center py-4`}>
                            {!child?.content?.isAcademyExpBtn ? <div
                                className={`flex items-center justify-start gap-2 border-l-8 border-${child?.content?.titleColor} text-${child?.content?.titleColor} h-11 w-fit cursor-pointer allService-${child?.content?.titleColor}`}
                                style={{
                                    backgroundColor: isHover && `var(--${child?.content?.titleColor})`,
                                    color: isHover && 'white',
                                    transition: 'background-color 0.5s ease, width 0.5s ease',
                                    flexDirection: isHover && 'row-reverse',
                                    width: isHover && 'fit-content',
                                    justifyContent: isHover && 'space-around',
                                    padding: isHover && '0 10px',
                                }}
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                            >
                                <AiOutlineArrowRight className={`text-sm`} />
                                <Link href={child?.content?.btnLink} target='_blank'>
                                    <h3 className={`text-sm text-nowrap`}>{child?.content?.btnText}</h3>
                                </Link>
                            </div> :
                                <div className='academyExpBtn'>
                                    <AiOutlineArrowRight className={`text-sm academyIcon`} />
                                    <h3 className={`text-sm text-nowrap`}>{child?.content?.btnText}</h3>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {/* responsive version */}
            <div className='mt-5 serviceLayout_sm md:hidden'>
                <div className='w-full mb-4 grid grid-cols-3 gap-2 justify-between'>
                    {servicesData.map((service, index) => (
                        <div
                            key={index+1}
                            className={`w-full h-14 flex items-center justify-center cursor-pointer mainCard mainCard-${index + 1} ${expand?.itemName === service?.serviceName && expand?.expand ? `activeCard-${index + 1}` : ''}`}
                            onClick={() => handleTab(index, service)}
                        >
                            <h4 className={`text-${service?.color}`}>{service?.serviceName}</h4>
                        </div>
                    ))}
                </div>
                <Splide options={options1} ref={parentSlide} >
                    <SplideSlide>
                        <Splide options={options2}>
                            <SplideSlide>
                                <ServiceParentItem content={BusinessSecurityContent} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Managed Cybersecurity Solution')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Vulnerability Assessment')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Business Hack Recovery')} />
                            </SplideSlide>
                        </Splide>
                    </SplideSlide>
                    <SplideSlide>
                        <Splide options={options3}>
                            <SplideSlide>
                                <ServiceParentItem content={PersonalSecurityContent} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Crypto Scam Investigation')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Fraud & Scam Investigation')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Online Blackmail Investigation')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Personal Hack Investigation')} />
                            </SplideSlide>
                        </Splide>
                    </SplideSlide>
                    <SplideSlide>
                        <Splide options={options3}>
                            <SplideSlide>
                                <ServiceMainItem name='Academy' />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Professional')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Corporate')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Law Enforcement Agency')} />
                            </SplideSlide>
                            <SplideSlide>
                                <ServiceChildItems child={serviceChildItems?.find((child) => child?.itemName === 'Educational Institute')} />
                            </SplideSlide>
                        </Splide>
                    </SplideSlide>
                </Splide>
            </div>
            {/* web version */}
            <div className='serviceLayout mt-14 hidden md:block'>
                <div className='w-full flex'>
                    <div className='serviceItems flex flex-col items-start justify-start gap-3'>
                        {servicesData.map((service, index) => (
                            <div key={index+1*2} className='serviceItem w-full'>
                                <div
                                    className={`p-5 mr-5 cursor-pointer mainCard mainCard-${index + 1} ${expand?.itemName === service?.serviceName && expand?.expand ? `activeCard-${index + 1}` : ''}`}
                                    onClick={() => setExpand({
                                        itemName: service?.serviceName,
                                        expand: service?.serviceName === expand?.itemName ? !expand?.expand : true,
                                        borderColor: service?.color,
                                        contentName: service?.serviceName
                                    })}
                                >
                                    <h4 className={`text-${service?.color}`}>{service?.serviceName}</h4>
                                </div>
                                {expand?.expand && expand?.itemName === service?.serviceName && (
                                    <div className='childItem pl-5 flex flex-col items-start justify-center gap-2'>
                                        {service?.childItems.map((child, index) => (
                                            !child.allServices ?
                                                <div
                                                    key={index+1*2}
                                                    className={`p-5 w-full cursor-pointer cardChildItem-${child?.activeColor} ${expand?.contentName === child?.name ? `activeChildItem-${child?.activeColor}` : ''}`}
                                                    onClick={() => {
                                                        setExpand({
                                                            ...expand,
                                                            contentName: child?.name,
                                                            borderColor: child?.activeColor
                                                        })
                                                        setClicked(!clicked);
                                                    }}
                                                >
                                                    <h3 className='text-lightBlack text-lg w-48'>{child?.name}</h3>
                                                </div>
                                                :
                                                <Link href={child?.link} target="_blank">
                                                    <div
                                                        key={index + 1}
                                                        className={`flex items-center justify-start gap-2 border-l-8 border-${service?.color} text-${service?.color} h-11 w-32 cursor-pointer allService-${service?.color}`}
                                                        style={{
                                                            backgroundColor: isHover && `var(--${service?.color})`,
                                                            color: isHover && 'white',
                                                            transition: 'background-color 0.5s ease, width 0.5s ease',
                                                            flexDirection: isHover && 'row-reverse',
                                                            width: isHover && '180px',
                                                            justifyContent: isHover && 'space-around',
                                                        }}
                                                        onMouseEnter={() => setIsHover(true)}
                                                        onMouseLeave={() => setIsHover(false)}
                                                    >
                                                        <AiOutlineArrowRight className={`text-lg`} />
                                                        <h3 className={`text-lg`}>{child?.name}</h3>
                                                    </div>
                                                </Link>
                                        ))}
                                    </div>)}
                            </div>
                        ))}
                    </div>
                    <div className={`serviceDetails overflow-y-hidden border-l rounded-3xl border-${expand?.borderColor} sideBorder-${expand?.borderColor}`}>
                        {(expand?.contentName === "Business Cybersecurity" || expand?.contentName === "Personal Cybersecurity" || expand?.contentName === "Academy") && (
                            <ServiceMainItem name={expand?.contentName} />
                        )}
                        {(expand?.contentName === "Managed Cybersecurity Solution"
                            || expand?.contentName === "Vulnerability Assessment"
                            || expand?.contentName === "Business Hack Recovery"
                            || expand?.contentName === "Crypto Scam Investigation"
                            || expand?.contentName === "Fraud & Scam Investigation"
                            || expand?.contentName === "Online Blackmail Investigation"
                            || expand?.contentName === "Personal Hack Investigation"
                            || expand?.contentName === "Professional"
                            || expand?.contentName === "Corporate"
                            || expand?.contentName === "Law Enforcement Agency"
                            || expand?.contentName === "Educational Institute"
                        ) && (
                                <ServiceChildItem name={expand?.contentName} itemClick={clicked} />
                            )}
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ServiceLayout;