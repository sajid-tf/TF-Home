import cn from '@/utils/helper/cn';
import { IoPlaySharp } from 'react-icons/io5';
const PlayList = ({ children, color }) => {
    return (
        <div className={`flex gap-[18px] items-center`}>
            <IoPlaySharp className={cn('size-6 shrink-0', {
                'text-redThree': color === 'redThree',
                'text-primary': color === 'primary',
                'text-secondary': color === 'secondary',
                'text-yellowTwo': color === 'yellow',
                'text-sky': color === 'sky',
                'text-purpleTwo': color === 'purpleTwo',
                'text-skyFour': color === 'skyFour',
            })} />
            <div className='text-lightBGText text-justify text-sm md:text-base'>{children}</div>
        </div>
    );
};

export default PlayList;