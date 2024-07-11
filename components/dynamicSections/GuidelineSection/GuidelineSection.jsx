const GuidelineSection = ({ leftSideRenderedData, rightSideRenderedData, title, desc, variants = 'red' }) => {
    const outerDotColorVariants = {
        primary: 'h-9 w-9 lg:h-11 lg:w-11 rounded-full bg-sky/10 flex items-center justify-center',
        secondary: 'h-9 w-9 lg:h-11 lg:w-11 rounded-full bg-secondary/10 flex items-center justify-center',
        red: 'h-9 w-9 lg:h-11 lg:w-11 rounded-full bg-redThree/10 flex items-center justify-center'
    }
    const middleDotColorVariants = {
        primary: 'h-[26px] w-[26px] lg:h-[34px] lg:w-[34px] rounded-full bg-sky/30 flex items-center justify-center',
        secondary: 'h-[26px] w-[26px] lg:h-[34px] lg:w-[34px] rounded-full bg-secondary/30 flex items-center justify-center',
        red: 'h-[26px] w-[26px] lg:h-[34px] lg:w-[34px] rounded-full bg-redThree/30 flex items-center justify-center'
    }
    const innerDotColorVariants = {
        primary: 'h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-sky',
        secondary: 'h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-secondary',
        red: 'h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-redThree'
    }
    const rightBGColorVariants = {
        primary: 'w-[336px] h-[72px] lg:w-full lg:h-[92px] flex rounded-full bg-sky relative',
        secondary: 'w-[336px] h-[72px] lg:w-full lg:h-[92px] flex rounded-full bg-secondary relative',
        red: 'w-[336px] h-[72px] lg:w-full lg:h-[92px] flex rounded-full bg-redThree relative'
    }
    const smallScreenTextVariants = {
        primary: 'visible lg:hidden text-center text-base font-medium pb-2.5 text-sky',
        secondary: 'visible lg:hidden text-center text-base font-medium pb-2.5 text-secondary',
        red: 'visible lg:hidden text-center text-base font-medium pb-2.5 text-redThree'
    }
    return (
        <div className='w-[360px] lg:w-[1200px] mx-auto py-12'>
            <h6 className={`${smallScreenTextVariants[variants]}`}>TechForing</h6>
            <h3 className='font-tertiary text-xl lg:text-4xl text-lightBGText font-bold text-center'>{title ? title : "Tools & Guidelines We Use"}</h3>
            <p className='text-sm lg:text-base text-lightBGText text-justify lg:text-center px-0 lg:px-8 pt-4 pb-10'>{desc ? desc : 'Description'}</p>
            <div className='w-full flex flex-col lg:flex-row gap-12'>
                <div className='w-1/2 flex flex-col'>
                    {leftSideRenderedData?.map((item, index) => (
                        <div className='w-[360px] h-[74px] lg:w-full lg:h-[111px] flex items-center justify-start gap-2 lg:gap-4 lg:pl-2' key={index}>
                            <div className={`${outerDotColorVariants[variants]}`}>
                                <div className={`${middleDotColorVariants[variants]}`}>
                                    <div className={`${innerDotColorVariants[variants]}`}></div>
                                </div>
                            </div>
                            <div className='w-[300px] h-[65px] lg:w-[500px] lg:h-[88px] bg-secondaryLightBG rounded-full flex items-center justify-center'>
                                <div className='w-full lg:w-[440px] px-4 lg:px-0'>
                                    <p className='text-xs lg:text-lg text-lightBGText font-tertiary font-medium' dangerouslySetInnerHTML={{ __html: item?.content }}></p>
                                </div>
                            </div>
                        </div>))}
                </div>
                <div className='w-1/2 flex flex-col gap-2 lg:gap-6'>
                    {rightSideRenderedData?.map((item, index) => (
                        <div className={`${rightBGColorVariants[variants]}`} key={index}>
                            <div className='absolute top-6 left-4 lg:left-10'>
                                <p className='text-base lg:text-4xl text-strongWhite font-bold font-tertiary'>{item?.percentage}</p>
                            </div>
                            <div className='bg-strongWhite h-[66px] w-[270px] lg:h-[86px] lg:w-[402px] rounded-full absolute top-[3px] right-1 flex items-center justify-center'>
                                <div className='w-[240px] lg:w-[350px]'>
                                    <p className='text-sm lg:text-lg font-tertiary font-medium text-lightBGText'>{item?.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GuidelineSection