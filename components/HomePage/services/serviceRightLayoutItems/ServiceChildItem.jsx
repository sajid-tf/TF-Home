import React from 'react';
import Image from 'next/image';
import { AiOutlineArrowRight } from "react-icons/ai";
import { serviceChildItems } from '@/utils/mock/dummyData';
import Link from 'next/link';

const ServiceChildItem = ({ name, itemClick }) => {
    const [isHover, setIsHover] = React.useState(false);
    return (
        <React.Fragment>
            {serviceChildItems?.filter((child) => child?.itemName === name).map((child, index) => (
                <div className={`p-5 h-full ${itemClick ? 'animate-slideUpIn' : 'animate-slideUpInReverse'}`} key={index + 1*3}>
                    <div className='flex items-center justify-between'>
                        <h3 className={`text-2xl text-${child?.content?.titleColor}`}>{child?.content?.title}</h3>
                        <span className='pr-12'>{child?.content?.titleImg}</span>
                    </div>
                    <div className={`border-t border-${child?.content?.titleColor} rounded-t-xl my-5 py-4 px-2`}>
                        <div className='flex items-center justify-center h-fit w-full'>
                            <Image src={child?.content?.mainImg} alt={child?.content?.title} />
                        </div>
                        {child?.content?.isDescTitle && <div>
                            <h4 className={`text-${child?.content?.titleColor} text-xl font-semibold mt-4 px-4`}>{child?.content?.descTitle}</h4>
                        </div>}
                        <div className='px-4 flex flex-col items-center justify-center mt-2'>
                            <p className='text-lightBlack text-justify text-base'>{child?.content?.description}</p>
                        </div>
                        <div className='px-4 mt-6 mb-3'>
                            <div className={`flex items-center ${child?.content?.btnPlacedRight ? 'justify-end' : 'justify-start'} `}>
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
                                    <AiOutlineArrowRight className={`text-lg`} />
                                    <Link href={child?.content?.btnLink} target='_blank'>
                                        <h3 className={`text-lg text-nowrap`}>{child?.content?.btnText}</h3>
                                    </Link>
                                </div> :
                                    <Link href={child?.content?.btnLink} target='_blank'>
                                        <div className='academyExpBtn'>
                                            <AiOutlineArrowRight className={`text-lg academyIcon`} />
                                            <h3 className={`text-lg text-nowrap`}>{child?.content?.btnText}</h3>
                                        </div>
                                    </Link>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};

export default ServiceChildItem;