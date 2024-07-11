import { moreNavItems } from '@/utils/mock/dummyData';
import Link from 'next/link';
import React from 'react';

const MoreItems = () => {
    return (
        <div className='p-5 w-full flex'>
            <div className='w-full grid grid-cols-2 gap-8 px-8'>
                {moreNavItems?.map((item, index) => (
                    <div key={index}>
                        <h4 className='text-primary font-semibold'>{item?.category}</h4>
                        <hr className='border-t-8 rounded-sm mb-1 border-lightWhite' />
                        {item?.items?.map((subItem, subIndex) => (
                            <div key={subIndex} className='mb-1 py-1 px-2 hover:bg-lightWhite'>
                                <Link href={subItem?.link} className='text-primary'>
                                    <span className='inline-block hover:translate-x-5 transition-transform'>{subItem?.itemName}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoreItems;