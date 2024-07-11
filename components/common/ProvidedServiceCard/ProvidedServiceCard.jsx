import React from 'react';

const ProvidedServiceCard = ({ active, variant, itemName, onClick }) => {
    const backgroundVariant = {
        red: 'bg-redThree transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
        yellow: 'bg-yellowTwo transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
        purple: 'bg-purpleTwo transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
        sky: 'bg-sky transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
        yellowThree: 'bg-yellowThree transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
        purpleThree: 'bg-purpleThree transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
        secondaryTwo: 'bg-secondaryTwo transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl',
    }
    const borderVariant = {
        red: 'border-b-4 border-redThree transition duration-500 ease-in-out transform hover:shadow-xl hover:bg-redThree/5',
        yellow: 'border-b-4 border-yellowTwo transition duration-500 ease-in-out transform hover:shadow-xl hover:bg-yellowTwo/5',
        purple: 'border-b-4 border-purpleTwo transition duration-500 ease-in-out transform hover:shadow-xl hover:bg-purpleTwo/5',
        sky: 'border-b-4 border-sky transition duration-500 ease-in-out transform hover:shadow-xl hover:bg-sky/5',
        yellowThree: 'border-b-4 border-yellowThree transition duration-500 ease-in-out transform hover:shadow-xl hover:bg-yellowThree/5',
        purpleThree: 'border-b-4 border-purpleThree transition duration-500 ease-in-out transform hover:shadow-xl hover:bg-purpleThree/5',
        secondaryTwo: 'border-b-4 border-secondaryTwo transition duration-500 ease-in-out transform hover:shadow-xl hover:bg-secondaryTwo/5',
    }
    const handleClick = () => { onClick() };
    return (
        <div onClick={handleClick} className={`flex items-center justify-center min-w-[270px] min-h-fit py-5 px-10 shadow-lg rounded-sm cursor-pointer ${active ? backgroundVariant[variant] : borderVariant[variant]}`}>
            <h4 className={`text-2xl font-tertiary font-bold uppercase ${active ? 'text-white' : 'text-lightBGText'}`}>{itemName ? itemName : "Item Name"}</h4>
        </div>
    );
};

export default ProvidedServiceCard;