import { AcademyContent, BusinessSecurityContent, PersonalSecurityContent } from '@/utils/mock/dummyData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceMainItem = ({ name }) => {
    const [isHover, setIsHover] = React.useState(false);
    const renderContent = name === "Business Cybersecurity" ? BusinessSecurityContent
        : name === "Personal Cybersecurity" ? PersonalSecurityContent :
            name === "Academy" ? AcademyContent :
                {};

    const animationSlideUp = name === "Business Cybersecurity" ? 'animate-slide-up' : name === "Personal Cybersecurity" ? 'animate-slide-down' : 'animate-slide-up-down';
    return (
        <div className={`md:py-5 py-0 md:px-5 px-3 h-full ${animationSlideUp}`}>
            <div className='flex items-center justify-between'>
                <h3 className={`text-base md:text-2xl text-${renderContent?.titleColor}`}>{renderContent?.title}</h3>
                <span className='pr-12 scale-75 md:scale-100'>
                    {renderContent?.titleSvg}
                </span>
            </div>
            <div className='mt-5'>
                <p className='text-lightBlack text-justify text-sm md:text-base'>{renderContent?.description}</p>
            </div>
            {renderContent?.isRoundImg ?
                <div className='flex items-center justify-center h-96 w-full'>
                    <Image src={renderContent?.roundImg} alt={renderContent?.title} />
                </div> :
                <div className='flex flex-col md:flex-row items-center justify-center my-2 md:my-0 gap-2 md:gap-12 md:h-[400px] h-fit w-full'>
                    {renderContent?.middleContent?.map((content, index) => (
                        <div key={index} className='flex gap-2 md:gap-0 md:flex-col flex-row items-center justify-start h-full w-full md:w-1/3 md:mt-16'>
                            <span className='md:p-0 p-2.5 w-10 h-10 md:w-20 md:h-20 academyBG rounded-full flex items-center justify-center'>{content?.mainImg}</span>
                            <div>
                                <h4 className={`text-${renderContent?.titleColor} text-base font-semibold md:my-4`}>{content?.mainTitle}</h4>
                                <p className='text-lightBlack text-justify text-base hidden md:block'>{content?.mainDesc}</p>
                            </div>
                        </div>
                    ))}
                </div>}
            <div className='flex md:flex-row flex-col items-center justify-between gap-2 md:mt-8 w-full'>
                <div className='w-full md:w-3/4 md:p-3'>
                    <p className='md:text-center md:text-base text-sm text-lightBlack'>{renderContent?.footerDesc}</p>
                </div>
                <div className='flex items-center justify-end'>
                    {!renderContent?.isAcademyExploreBtn ? <div
                        className={`flex items-center justify-start gap-2 border-l-8 border-${renderContent?.titleColor} text-${renderContent?.titleColor} h-11 w-fit cursor-pointer allService-${renderContent?.titleColor}`}
                        style={{
                            backgroundColor: isHover && `var(--${renderContent?.titleColor})`,
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
                        <Link href={renderContent?.btnLink} target='_blank'>
                            <h3 className={`text-lg text-nowrap`}>{renderContent?.exploreBtn}</h3>
                        </Link>
                    </div>
                        :
                        <Link href={renderContent?.btnLink} target='_blank'>
                            <div className='academyExpBtn'>
                                <AiOutlineArrowRight className={`text-lg academyIcon`} />
                                <h3 className={`text-lg text-nowrap`}>{renderContent?.exploreBtn}</h3>
                            </div>
                        </Link>}
                </div>
            </div>
        </div>
    );
};

export default ServiceMainItem;