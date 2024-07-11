import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React from 'react';

const ScheduleMan = () => {
    return (
        <Image src={JSON.parse(JSON.stringify(globalImages?.scheduleMan))} alt='scheduleMan' className='cursor-grab' />
    );
};

export default ScheduleMan;