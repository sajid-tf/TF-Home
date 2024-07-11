import React from 'react';

const WeServeSection = ({ subTitle, title, description, cardItem, variant = 'red', noOfGrid = 6 }) => {
    const textVariants = {
        primary: 'text-sky',
        secondary: 'text-secondary',
        redThree: 'text-redThree',
        secondaryTwo: 'text-secondaryTwo',
        skyFour: 'text-skyFour',
    }
    const gridNumber = {
        5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
        6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
        7: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-7',
        8: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8'
    }
    return (
        <div className='lg:w-[1200px] mx-auto px-2'>
            {
                subTitle &&
                <h5 className={`font-tertiary text-lg font-medium uppercase ${textVariants[variant]}`}>{subTitle}</h5>
            }
            <h3 className='text-lightBGText font-tertiary text-4xl font-bold'>{title ? title : "Title Here"}</h3>
            {
                description &&
                <p className='text-lightBGText font-tertiary text-base mt-4'>{description}</p>
            }
            <div className={`pt-12 grid ${gridNumber[noOfGrid]} gap-6 px-2`}>
                {cardItem?.map((item, index) => (
                    <div key={index} className='col-span-1'>
                        {item?.card}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeServeSection;