import cn from '@/utils/helper/cn';
import React from 'react';

const Divider = ({ vertical, horizontal, color: dividerColor, className }) => {
    const dividerClasses = cn(
        {
            'bg-primary': dividerColor === 'primary',
            'bg-secondary': dividerColor === 'secondary',
            'bg-sky': dividerColor === 'sky',
            'bg-redThree': dividerColor === 'redThree',
            'bg-yellow': dividerColor === 'yellow',
            'bg-skyTwo': dividerColor === 'skyTwo',
            "bg-purple": dividerColor === 'purple',
            'bg-purpleTwo': dividerColor === 'purpleTwo',

            'h-1 w-full': horizontal, 
            'w-1 h-full': vertical
        },
        className
    )
    return <div className={dividerClasses} />
}

export default Divider;
