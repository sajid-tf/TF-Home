import React from 'react';

const WhatWeAccessCard = ({ icon, title, activeItem, isBigWidthCard }) => {
    const cardWidth = {
        small: 'w-[110px] h-full lg:w-[140px]',
        big: 'w-[110px] h-full lg:w-[200px]',
    }
    return (
        <div className={`${isBigWidthCard ? cardWidth.big : cardWidth.small} flex flex-col items-center justify-start gap-[11px] ${activeItem ? 'bg-strongWhite' : 'bg-cardBG'} ${activeItem && 'border-b-4 border-redThree shadow-redDrop'}  rounded-md p-5 cursor-pointer`}>
            <span className='w-[50px] h-[50px]'>
                {React.cloneElement(icon, { fillColor: activeItem ? "" : icon.props.fillColor })}
            </span>
            <h5 className='font-sm text-primary text-center font-tertiary'>{title ? title : 'Web Application'}</h5>
        </div>
    );
};

export default WhatWeAccessCard;