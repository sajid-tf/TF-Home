import cn from '@/utils/helper/cn';
import { IoPlaySharp } from 'react-icons/io5';
const Wrapper = ({ children,color }) => {
    return (
        <div className={`flex gap-[18px] items-center`}>
            <IoPlaySharp className={cn('size-6 shrink-0',{
                'text-redThree': color === 'redThree',
                'text-primary': color === 'primary',
                'text-secondary': color === 'secondary',
                'text-yellowTwo': color === 'yellow',
                'text-sky': color === 'sky', 
                'text-purpleTwo': color === 'purpleTwo',
            })} />
            <div className='text-lightBGText text-sm md:text-base'>{children}</div>
        </div>
    );
};

export default Wrapper;