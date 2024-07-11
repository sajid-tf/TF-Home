
import { Button } from '@/components/common';
import cn from '@/utils/helper/cn';
import Link from 'next/link';

const ScheduleCall = ({ title, subTitle, desc, btns, variant = 'primary' }) => {
    const text = {
        primary: 'text-sky',
        secondary: 'text-secondary',
        red: 'text-redThree'
    }
    const bg = {
        primary: 'bg-sky',
        secondary: 'bg-secondary',
        red: 'bg-redThree'
    }
    return (
        <div className='py-12 flex flex-col md:items-center text-center text-lightBGText relative overflow-hidden'>
            {subTitle && <p className={`font-medium pb-4 md:pb-6 text-base md:text-lg ${text[variant]}`}>{subTitle}</p>}
            <h1 className='text-xl md:text-3xl font-bold pb-4 md:pb-6 capitalize'>{title}</h1>
            <p className='pb-8 md:pb-12 leading-6 max-w-[700px]'>{desc}</p>
            <div className=" flex flex-col md:flex-row gap-6">
                {btns.map(btn => (
                    <Button asChild key={btn.id} variant={btn.variant} color={btn.btnColor} size='small' endIcon={btn.icon} className={cn("w-full md:w-[250px]", btn.className)}>
                        <Link href={btn?.link ? btn.link : "/get_start/"} >
                            {
                                btn.text
                            }
                        </Link>
                    </Button>
                ))}
            </div>
            {/* <div className={`w-44 h-12 absolute top-1/2 right-1/2 translate-y-1/2 translate-x-1/2 ${bg[variant]} blur-[130px]`}></div> */}
        </div>
    );
};
export default ScheduleCall;