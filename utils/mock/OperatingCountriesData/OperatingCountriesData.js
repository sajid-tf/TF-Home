import { FaLocationDot } from "react-icons/fa6";
import ukFlag from '@/assets/operating-country/uk.png';
import usaFlag from '@/assets/operating-country/usa.png';
import turkeyFlag from '@/assets/operating-country/turkey.png';
import canadaFlag from '@/assets/operating-country/canada.png';
import bangladeshFlag from '@/assets/operating-country/bangladesh.png';

const OperatingCountriesData = [
    {
        id: 1,
        country: 'UNITED KINGDOM',
        flagImg: ukFlag,
        alt: 'uk',
        locationIcon: <FaLocationDot className='text-full' />
    },
    {
        id: 2,
        country: 'UNITED STATES',
        flagImg: usaFlag,
        alt: 'usa',
        locationIcon: <FaLocationDot className='text-full' />
    },
    {
        id: 3,
        country: 'CANADA',
        flagImg: canadaFlag,
        alt: 'canada',
        locationIcon: <FaLocationDot className='text-full' />
    },
    {
        id: 4,
        country: 'TURKEY',
        flagImg: turkeyFlag,
        alt: 'turkey',
        locationIcon: <FaLocationDot className='text-full' />
    },
    {
        id: 5,
        country: 'BANGLADESH',
        flagImg: bangladeshFlag,
        alt: 'bangladesh',
        locationIcon: <FaLocationDot className='text-full' />
    }
]

export { OperatingCountriesData }