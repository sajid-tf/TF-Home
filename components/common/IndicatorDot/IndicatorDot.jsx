import React from 'react';

const IndicatorDot = ({ variant = 'redThree', active, onClick }) => {

    const smallScreenActiveIndicator = {
        sky: 'w-[14px] h-[14px] rounded-full bg-sky transition duration-700 ease-in-out active:scale-125',
        purple: 'w-[14px] h-[14px] rounded-full bg-purpleTwo transition duration-700 ease-in-out active:scale-125',
        yellow: 'w-[14px] h-[14px] rounded-full bg-yellowTwo transition duration-700 ease-in-out active:scale-125',
        red: 'w-[14px] h-[14px] rounded-full bg-redThree transition duration-700 ease-in-out active:scale-125',
        yellowThree: 'w-[14px] h-[14px] rounded-full bg-yellowThree transition duration-700 ease-in-out active:scale-125',
        purpleThree: 'w-[14px] h-[14px] rounded-full bg-purpleThree transition duration-700 ease-in-out active:scale-125',
        secondaryTwo: 'w-[14px] h-[14px] rounded-full bg-secondaryTwo transition duration-700 ease-in-out active:scale-125',
        redOne: 'w-[14px] h-[14px] rounded-full bg-red transition duration-700 ease-in-out active:scale-125',
        secondary: 'w-[14px] h-[14px] rounded-full bg-secondary transition duration-700 ease-in-out active:scale-125',
        ash: 'w-[14px] h-[14px] rounded-full bg-lightBlack transition duration-700 ease-in-out active:scale-125',
        yellowOne: 'w-[14px] h-[14px] rounded-full bg-yellow transition duration-700 ease-in-out active:scale-125',
        primary: 'w-[14px] h-[14px] rounded-full bg-primary transition duration-700 ease-in-out active:scale-125',
    }

    const smallScreenInactiveIndicator = {
        sky: 'w-[10px] h-[10px] rounded-full border border-sky bg-sky/20',
        purple: 'w-[10px] h-[10px] rounded-full border border-purpleTwo bg-purpleTwo/20',
        yellow: 'w-[10px] h-[10px] rounded-full border border-yellowTwo bg-yellowTwo/20',
        red: 'w-[10px] h-[10px] rounded-full border border-redThree bg-redThree/20',
        yellowThree: 'w-[10px] h-[10px] rounded-full border border-yellowThree bg-yellowThree/20',
        purpleThree: 'w-[10px] h-[10px] rounded-full border border-purpleThree bg-purpleThree/20',
        secondaryTwo: 'w-[10px] h-[10px] rounded-full border border-secondaryTwo bg-secondaryTwo/20',
        redOne: 'w-[10px] h-[10px] rounded-full border border-red bg-red/20',
        secondary: 'w-[10px] h-[10px] rounded-full border border-secondary bg-secondary/20',
        ash: 'w-[10px] h-[10px] rounded-full border border-lightBlack bg-lightBlack/20',
        yellowOne: 'w-[10px] h-[10px] rounded-full border border-yellow bg-yellow/20',
        primary: 'w-[10px] h-[10px] rounded-full border border-primary bg-primary/20',
    }
    const handleClick = () => { onClick() };
    return (
        <button onClick={handleClick} className={`${active ? smallScreenActiveIndicator[variant] : smallScreenInactiveIndicator[variant]}`}></button>
    );
};

export default IndicatorDot;