import { productNavItems } from '@/utils/mock/dummyData';
import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

const ProductItems = () => {
    return (
        <div className='p-5 w-full flex'>
            <div className='grid grid-cols-1 gap-2.5'>
                {productNavItems?.map((item, index) => (
                    <div key={index} className='w-full flex'>
                        <div className='w-2/12 h-full py-2.5 flex items-center justify-center gap-3'>
                            <div className='h-[50px] w-[70px]'>
                                {item?.svgImg}
                            </div>
                            <div className='w-full'>
                                <h6 className='text-lg text-lightBGText font-tertiary font-semibold uppercase'>{item?.name}</h6>
                            </div>
                        </div>
                        <div className='w-10/12 border-l-4 border-secondary px-2.5 py-2 hover:bg-secondary/15 flex flex-col gap-2.5'>
                            <p className='text-justify text-base font-light text-lightBlack' dangerouslySetInnerHTML={{ __html: item?.description }}></p>
                            <Link href={item?.link} target='_blank'>
                                <button className='flex items-center justify-center gap-2 text-secondary text-lg hover:text-xl hover:font-bold translate-transform duration-300 ease-linear'>
                                    {item?.exploreBtn}
                                    <FaArrowRightLong />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductItems;