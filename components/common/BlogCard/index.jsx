
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/common';
import { FaChevronRight } from 'react-icons/fa';
import cn from '@/utils/helper/cn';

const BlogCard = ({ img, alt, category, title, desc, link, date, color, className,target }) => {

    return (
        <div className={cn('rounded bg-white shadow-card', className)}>
            <div className='inline-flex justify-center relative w-full h-[200px]'>
                <Image src={JSON.parse(JSON.stringify(img))} alt={alt} fill className='object-cover'/>
            </div>
            <div className="p-6 flex flex-col gap-4 ">
                <h5 className={cn("text-xs px-2 py-1 leading-[18px] w-fit rounded-full border",
                    {
                        "border-primary text-primary": color === 'primary',
                        "border-secondary text-secondary": color === 'secondary',
                        "border-redThree text-redThree": color === 'redThree',
                        "border-green text-green": color === 'green',
                    })}>{category}</h5>
                <h4 className={cn("text-lg font-medium leading-6 truncate",
                    {
                        "text-primary": color === 'primary',
                        "text-secondary": color === 'secondary',
                        "text-redThree": color === 'redThree',
                        "text-green": color === 'green',
                    })}>{title}</h4>
                <p className="text-justify text-lightBGBodyText leading-6 break-words h-[80px]">{desc?desc:"TechForing is the most dynamic..."}</p>
                <div className="flex items-center justify-between pt-4">
                    <p className="text-lightBGBodyText text-xs leading-[18px]">{date}</p>

                    <Button  variant="outlined" size="small" color={color} endIcon={<FaChevronRight />} asChild>
                        <Link href={link} target={target}>
                            Read More
                        </Link>
                    </Button>

                    {/* <Button variant="borderLeft" className="w-full md:w-fit" color={color} asChild>
                    <Link href={item?.btn?.url}>
                        {item?.btn?.text}
                    </Link>
                   </Button> */}

                </div>
            </div>
        </div>
    );
};
export default BlogCard;