import { serviceNavItems } from '@/utils/mock/dummyData';
import React from 'react';
import Link from 'next/link';

const ServiceItems = () => {
  const [expand, setExpand] = React.useState({
    itemName: serviceNavItems[0]?.serviceName,
    expand: true,
    borderColor: serviceNavItems[0]?.color,
    contentName: "Business Cybersecurity"
  });
  const borderColorVariants = {
    'primary': 'border-skyThree bg-skyThree/10',
    'secondary': 'border-green bg-green/10',
    'academy': 'border-[#5373AE] bg-[#5373AE]/10',
    'red': 'border-redThree bg-redThree/10',
    'purple': 'border-purpleTwo bg-purpleTwo/10',
    'yellow': 'border-yellowTwo bg-yellowTwo/10',
    'sky': 'border-skyFour bg-skyFour/10',
    'yellowThree': 'border-yellowThree bg-yellowThree/10',
    'secondaryTwo': 'border-secondaryTwo bg-secondaryTwo/10',
  }
  const borderLightColorVariants = {
    'primary': 'border-skyThree/20',
    'secondary': 'border-green/20',
    'academy': 'border-[#5373AE]/20',
    'red': 'border-redThree/20',
    'purple': 'border-purpleTwo/20',
    'yellow': 'border-yellowTwo/20',
    'sky': 'border-skyFour/20',
    'yellowThree': 'border-yellowThree/20',
    'secondaryTwo': 'border-secondaryTwo/20',
  }
  const textColorVariants = {
    'primary': 'text-skyThree',
    'secondary': 'text-green',
    'academy': 'text-[#5373AE]',
    'red': 'text-redThree',
    'purple': 'text-purpleTwo',
    'yellow': 'text-yellowTwo',
    'sky': 'text-skyFour',
    'yellowThree': 'text-yellowThree',
    'secondaryTwo': 'text-secondaryTwo',
  }
  const childColorDivVariants = {
    'primary': 'text-skyThree border-l-2 border-skyThree bg-skyThree/10 hover:bg-skyThree/20',
    'secondary': 'text-green border-l-2 border-green bg-green/10 hover:bg-green/20',
    'academy': 'text-[#5373AE] border-l-2 border-[#5373AE] bg-[#5373AE]/10 hover:bg-[#5373AE]/20',
    'red': 'text-redThree border-l-2 border-redThree bg-redThree/10 hover:bg-redThree/20',
    'purple': 'text-purpleTwo border-l-2 border-purpleTwo bg-purpleTwo/10 hover:bg-purpleTwo/20',
    'yellow': 'text-yellowTwo border-l-2 border-yellowTwo bg-yellowTwo/10 hover:bg-yellowTwo/20',
    'sky': 'text-skyFour border-l-2 border-skyFour bg-skyFour/10 hover:bg-skyFour/20',
    'yellowThree': 'text-yellowThree border-l-2 border-yellowThree bg-yellowThree/10 hover:bg-yellowThree/20',
    'secondaryTwo': 'text-secondaryTwo border-l-2 border-secondaryTwo bg-secondaryTwo/10 hover:bg-secondaryTwo/20',
  }
  const childColorTextVariants = {
    'primary': 'text-lightBGText hover:text-skyThree hover:bg-skyThree/10',
    'secondary': 'text-lightBGText hover:text-green hover:bg-green/10',
    'academy': 'text-lightBGText hover:text-[#5373AE] hover:bg-[#5373AE]/10',
    'red': 'text-lightBGText hover:text-redThree hover:bg-redThree/10',
    'purple': 'text-lightBGText hover:text-purpleTwo hover:bg-purpleTwo/10',
    'yellow': 'text-lightBGText hover:text-yellowTwo hover:bg-yellowTwo/10',
    'sky': 'text-lightBGText hover:text-skyFour hover:bg-skyFour/10',
    'yellowThree': 'text-lightBGText hover:text-yellowThree hover:bg-yellowThree/10',
    'secondaryTwo': 'text-lightBGText hover:text-secondaryTwo hover:bg-secondaryTwo/10',
  }
  return (
    <div className='p-5 w-full flex'>
      <div className='w-1/4 flex flex-col items-start justify-start gap-3'>
        {serviceNavItems?.map((service, index) => (
          service?.link ?
            <Link
              href={service?.link}
              key={index}
              className={`p-5 mr-5 cursor-pointer w-[240px] border-l-4 ${expand?.itemName === service?.serviceName && expand?.expand ? borderColorVariants[service.color] : borderLightColorVariants[service.color]}`}
              onMouseEnter={() => setExpand({
                itemName: service?.serviceName,
                expand: true,
                borderColor: service?.color,
                contentName: service?.serviceName
              })}
            >
              <h5 className={`${textColorVariants[service?.color]} text-lg`}>{service?.serviceName}</h5>
            </Link> :
            <div
              key={index}
              className={`p-5 mr-5 w-[240px] border-l-4 ${expand?.itemName === service?.serviceName && expand?.expand ? borderColorVariants[service.color] : borderLightColorVariants[service.color]}`}
              onMouseEnter={() => setExpand({
                itemName: service?.serviceName,
                expand: true,
                borderColor: service?.color,
                contentName: service?.serviceName
              })}
            >
              <h5 className={`${textColorVariants[service?.color]} text-lg`}>{service?.serviceName}</h5>
            </div>
        ))}
      </div>
      <div className='w-3/4'>
        <div className='grid grid-cols-3 gap-3'>
          {serviceNavItems?.map(item => (
            item?.serviceName === expand?.contentName &&
            item?.data?.map((childItem, index) => (
              <div key={index} style={{ gridColumn: `span ${childItem?.colSpan}` }}>
                {
                  childItem?.link ?
                    <Link href={childItem?.link} className={`leading-8 block text-base font-medium w-full py-1 px-2 cursor-pointer ${childColorDivVariants[childItem?.color]}`}>
                      <span className='inline-block hover:translate-x-5 transition-transform'>{childItem?.itemName}</span>
                    </Link> :
                    <div className={`leading-8 block text-base font-medium w-full py-1 px-2 ${childColorDivVariants[childItem?.color]}`}>
                      <span className='inline-block hover:translate-x-5 transition-transform'>{childItem?.itemName}</span>
                    </div>
                }
                <div className={`pl-5 ${childItem?.haveChildData && 'grid grid-cols-2 gap-3'}`}>
                  {childItem?.childItems?.map((subItem, index) => (
                    <div key={index}>
                      <Link href={subItem?.link} className={`py-1 px-2 block mt-1 cursor-pointer ${childColorTextVariants[childItem?.color]} ${subItem?.strong && "font-medium bg-[#A9C7FF]/10"}`}>
                        <span className='inline-block hover:translate-x-5 transition-transform'>{subItem?.name}</span>
                      </Link>
                      {subItem?.data?.map((data, index) => (
                        <Link href={data?.link} key={index} className={`py-1 px-2 block mt-1 cursor-pointer ${childColorTextVariants[childItem?.color]}`}>
                          <span className='inline-block hover:translate-x-5 transition-transform'>
                            {data?.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;