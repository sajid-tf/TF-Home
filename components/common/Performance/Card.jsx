import React from 'react';

const Card = ({children}) => {
    return (
        <div className='px-0 md:px-6 py-4 md:py-0  bg-white flex flex-col items-center justify-center flex-1'>
            {children}
        </div>
    );
};

export default Card;