import React from 'react'

const WeServeCard = ({ content, childEvenOdd, moreThanSixCard = false }) => {
    const evenOddVariants = {
        even: 'bg-even-conic hover:bg-full-conic duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer',
        odd: 'bg-odd-conic hover:bg-full-conic duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer',
        oddBottom: 'bg-bottom-odd-conic hover:bg-full-conic duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer',
    }
    const moreORLessThanSixCardVariants = {
        lessThanOREqualSix: 'w-[180px] h-[180px]',
        moreThanSix: 'w-[160px] h-[160px]'
    }
    return (
        <div className={`${moreThanSixCard ? moreORLessThanSixCardVariants?.moreThanSix : moreORLessThanSixCardVariants?.lessThanOREqualSix} rounded  ${evenOddVariants[childEvenOdd]} p-5 flex flex-col items-center justify-start gap-3 shadow-md`}>
            <div className="w-[80px] h-[74px] flex items-center justify-center p-2">
                {content?.svg ? content?.svg :
                    "Icon Here"}
            </div>
            <h5 className="text-base text-center text-lightBGText font-medium font-tertiary px-2 h-fit">{content?.title ? content?.title : 'Content Title Will Be Here'}</h5>
        </div>
    )
}

export default WeServeCard