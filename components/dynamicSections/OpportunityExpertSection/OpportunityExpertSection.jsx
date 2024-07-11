import React from 'react';

const OpportunityExpertSection = ({ title, isDesc = true, description, variant = 'secondary', isNumberTitle = false, renderData }) => {
    const topCornerColorVariant = {
        primary: 'absolute top-0 left-0 w-[80px] h-[60px] bg-sky shadow-lg',
        secondary: 'absolute top-0 left-0 w-[80px] h-[60px] bg-secondary shadow-lg',
        redThree: 'absolute top-0 left-0 w-[80px] h-[60px] bg-redThree shadow-lg',
    }
    const bottomCornerColorVariant = {
        primary: 'absolute bottom-0 left-0 w-[80px] h-[60px] bg-sky shadow-lg',
        secondary: 'absolute bottom-0 left-0 w-[80px] h-[60px] bg-secondary shadow-lg',
        redThree: 'absolute bottom-0 left-0 w-[80px] h-[60px] bg-redThree shadow-lg',
    }
    const textSmallScreenVariants = {
        primary: 'text-sky text-xl font-bold font-tertiary text-center pb-2',
        secondary: 'text-secondary text-xl font-bold font-tertiary text-center pb-2',
        redThree: 'text-redThree text-xl font-bold font-tertiary text-center pb-2',
    }
    const textVariants = {
        primary: 'text-sky',
        secondary: 'text-secondary',
        redThree: 'text-redThree',
    }
    const iconColor = {
        primary: 'text-sky h-full w-full',
        secondary: 'text-secondary h-full w-full',
        redThree: 'text-redThree h-full w-full',
    }
    const descriptionBorder = {
        primary: 'border-l-[10px] border-sky px-4 py-2',
        secondary: 'border-l-[10px] border-secondary px-4 py-2',
        redThree: 'border-l-[10px] border-redThree px-4 py-2',
    }
    return (
        <div className='w-[360px] h-fit lg:w-[1200px] lg:h-[364px] mx-auto'>
            <div className='w-full h-full lg:flex gap-6 hidden'>
                <div className='w-1/3 lg:flex flex-col items-center justify-center gap-[18px] relative hidden'>
                    <div className={`${topCornerColorVariant[variant]}`}></div>
                    <h3 className='w-full text-4xl font-bold font-tertiary text-lightBGText'>{title ? title : 'Opportunity For Cybersecurity Experts'}</h3>
                    {isDesc && <p className='text-base text-lightBGText font-tertiary text-justify'>{description ? description : "Description"}</p>}
                    <div className={`${bottomCornerColorVariant[variant]}`}></div>
                </div>
                <div className='w-2/3 lg:flex items-center justify-center hidden'>
                    <div className='w-full grid grid-cols-2'>
                        {renderData?.map((item, index) => (
                            <div className='w-full min-h-[182px] py-5 px-6 flex flex-col items-start justify-start gap-3 hover:shadow-xl hover:rounded-md hover:scale-105 hover:-translate-y-5 translate-transform duration-300 ease-linear' key={index}>
                                {!isNumberTitle ? <div className='w-full min-h-[60px] flex items-center gap-5'>
                                    <div className='h-full w-[60px] flex items-center justify-center p-2'>
                                        {React.cloneElement(item?.icon, { className: `${iconColor[variant]}` })}
                                    </div>
                                    <h4 className='text-lightBGText text-lg font-tertiary font-semibold'>{item?.title}</h4>
                                </div> :
                                    <div className='w-full min-h-[60px] flex items-center'>
                                        <span className={`${item?.isStartSpanSymbol ? textVariants[variant] : 'text-lightBGText'} text-[48px] font-tertiary font-semibold pt-2`}>{item?.titleStartSpan}</span>
                                        <h4 className='text-lightBGText text-[68px] font-tertiary font-normal'>{item?.title}</h4>
                                        <span className={`${item?.isEndSpanSymbol ? textVariants[variant] : 'text-lightBGText'} text-[48px] font-tertiary font-semibold pt-2`}>{item?.titleEndSpan}</span>
                                    </div>}
                                <div className={`${isNumberTitle ? descriptionBorder[variant] : ''}`}>
                                    <p className='text-lightBGText text-base font-tertiary font-normal text-justify'>
                                        {item?.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='visible lg:hidden p-3'>
                <h6 className={`${textSmallScreenVariants[variant]}`}>Process</h6>
                <h3 className='w-full text-xl font-bold font-tertiary text-lightBGText text-center pb-4'>{title ? title : 'Opportunity For Cybersecurity Experts'}</h3>
                {isDesc && <p className='text-sm text-lightBGText font-tertiary text-center'>{description ? description : "Description"}</p>}
            </div>
            <div className='w-full flex items-center justify-center visible lg:hidden'>
                <div className='w-full grid grid-cols-1'>
                    {renderData?.map((item, index) => (
                        <div className='w-full min-h-[182px] py-5 px-6 flex flex-col items-start justify-start gap-3 hover:shadow-xl hover:rounded-md hover:scale-105 hover:-translate-y-5 translate-transform duration-300 ease-linear' key={index}>
                            {!isNumberTitle ? <div className='w-full min-h-[60px] flex items-center gap-3'>
                                <div className='h-full w-[50px] flex items-center justify-center p-2'>
                                    {React.cloneElement(item?.icon, { className: `${iconColor[variant]}` })}
                                </div>
                                <h4 className='text-lightBGText text-base font-tertiary font-semibold'>{item?.title}</h4>
                            </div> :
                                <div className='w-full min-h-[60px] flex items-center'>
                                    <span className={`${item?.isStartSpanSymbol ? textVariants[variant] : 'text-lightBGText'} text-[28px] font-tertiary font-semibold pt-2`}>{item?.titleStartSpan}</span>
                                    <h4 className='text-lightBGText text-5xl font-tertiary font-normal'>{item?.title}</h4>
                                    <span className={`${item?.isEndSpanSymbol ? textVariants[variant] : 'text-lightBGText'} text-[28px] font-tertiary font-semibold pt-2`}>{item?.titleEndSpan}</span>
                                </div>}
                            <div className={`${isNumberTitle ? descriptionBorder[variant] : ''}`}>
                                <p className='text-lightBGText text-base font-tertiary font-normal text-justify'>
                                    {item?.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OpportunityExpertSection;