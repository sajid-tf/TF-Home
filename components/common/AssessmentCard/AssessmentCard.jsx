"use client";
import React, { useState } from 'react';
import { Button } from '@/components/common';
import { AssessmentCardSVG } from '@/utils/svg/SVGImg';


const AssessmentCard = ({ title, desc, btnText, icon }) => {
    const [hoveredCard, setHoveredCard] = useState(false)
    return (
        <div className='w-[360px] h-[400px] rounded-xl bg-strongWhite p-10 flex flex-col items-center lg:items-start gap-[18px] relative'
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
        >
            <div className={`absolute w-[106px] h-[106px] bg-strongWhite p-3.5 rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [&.activeCard]:bg-secondary/10 ${hoveredCard ? 'activeCard' : ''}`}>
                <div className={`rounded-full w-[78px] h-[78px] p-3.5 shadow-greenDrop [&.activeCard]:bg-secondary ${hoveredCard ? 'activeCard' : ''}`}>
                    {icon ? icon : <AssessmentCardSVG fillColor={hoveredCard ? '#FFFFFF' : '#182F59'} />}
                </div>
            </div>
            <h4 className='text-2xl font-bold text-primary font-tertiary pt-5 whitespace-nowrap'>{title ? title : "Title"}</h4>
            <p className='text-base font-tertiary text-lightBGBodyText text-justify'>
                {desc ? desc : "Description"}
            </p>
            <Button variant='contained' size='medium' className='px-10'>{btnText ? btnText : 'Button Text'}</Button>
        </div >
    );
};

export default AssessmentCard;