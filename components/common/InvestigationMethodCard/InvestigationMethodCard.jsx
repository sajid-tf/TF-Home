import React from 'react';

const InvestigationMethodCard = ({ number, item, color = 'secondaryTwo' }) => {
    const borderTopVariant = {
        sky: 'w-full h-[110px] border-t-[1.5px] border-sky pt-10 pb-5 px-5',
        secondary: 'w-full h-[110px] border-t-[1.5px] border-secondary pt-10 pb-5 px-5',
        secondaryTwo: 'w-full h-[110px] border-t-[1.5px] border-secondaryTwo pt-10 pb-5 px-5',
        red: 'w-full h-[110px] border-t-[1.5px] border-redThree pt-10 pb-5 px-5',
        purple: 'w-full h-[110px] border-t-[1.5px] border-purpleThree pt-10 pb-5 px-5'
    }
    const outerBGVariant = {
        sky: 'w-[90px] h-[90px] bg-sky/20 rounded-full flex items-center justify-center shadow-lg hover:bg-sky/60 transition duration-300 ease-in-out',
        secondary: 'w-[90px] h-[90px] bg-secondary/20 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/60 transition duration-300 ease-in-out',
        secondaryTwo: 'w-[90px] h-[90px] bg-secondaryTwo/20 rounded-full flex items-center justify-center shadow-lg hover:bg-secondaryTwo/60 transition duration-300 ease-in-out',
        red: 'w-[90px] h-[90px] bg-redThree/20 rounded-full flex items-center justify-center shadow-lg hover:bg-redThree/60 transition duration-300 ease-in-out',
        purple: 'w-[90px] h-[90px] bg-purpleThree/20 rounded-full flex items-center justify-center shadow-lg hover:bg-purpleThree/60 transition duration-300 ease-in-out'
    }
    const textVariant = {
        sky: 'text-[28px] text-sky font-tertiary font-bold',
        secondary: 'text-[28px] text-secondary font-tertiary font-bold',
        secondaryTwo: 'text-[28px] text-secondaryTwo font-tertiary font-bold',
        red: 'text-[28px] text-redThree font-tertiary font-bold',
        purple: 'text-[28px] text-purpleThree font-tertiary font-bold'
    }
    return (
        <div className='w-[150px] min-h-[178px] hover:-translate-y-5 translate-transform duration-700 ease-in-out'>
            <div className='w-full h-[68px] flex items-start justify-center overflow-hidden'>
                <div className={`${outerBGVariant[color]}`}>
                    <div className='w-[62px] h-[62px] bg-strongWhite rounded-full shadow-xl flex items-center justify-center'>
                        <p className={`${textVariant[color]}`}>{number ? number : '1'}</p>
                    </div>
                </div>
            </div>
            <div className={`${borderTopVariant[color]}`}>
                <p className='text-lg text-lightBGText text-center'>{item ? item : 'Item Name'}</p>
            </div>
        </div>
    );
};

export default InvestigationMethodCard;