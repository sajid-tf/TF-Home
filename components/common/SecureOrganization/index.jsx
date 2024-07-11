import Image from 'next/image';
import React from 'react';

const SecureOrganization = ({ upperTitle, title, subTitle, button, img, variant = 'primary' }) => {
  const birderColor = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    red: 'border-redThree',
    yellow: 'border-yellowTwo',
    purple: 'border-purpleTwo',
    sky: 'border-skyThree',
    yellowThree: 'border-yellowThree',
    secondaryTwo: 'border-secondaryTwo',
    green: "border-green",
    skyFour: 'border-skyFour',
  }
  return (
    <div className="flex flex-col-reverse md:flex-row items-center relative container px-3 md:px-0">
      <div className="md:relative space-y-3 md:w-[730px] py-5 md:py-10 md:pl-20 md:pr-5">
        {upperTitle && <h5 className='text-[22px] text-lightBGText font-tertiary'>{upperTitle}</h5>}
        <h3 className='hidden md:block text-4xl font-bold text-lightBGText'>{title}</h3>
        <p className='text-lightBGBodyText text-sm md:text-lg font-light leading-6 text-center md:text-left'>{subTitle}</p>
        {button}
        <div className={`hidden md:block absolute bottom-0 left-full bg-[#ffffff99] h-full w-[120px] border-r-4 ${birderColor[variant]}`}></div>
        <div className={`md:hidden mx-auto absolute bottom-44 left-1/2 -translate-x-1/2 bg-[#ffffff99] w-[80%] h-fit border-t-4 ${birderColor[variant]} flex items-center justify-center`}>
          <h2 className='text-base text-[#000] text-center font-medium py-2'>{title}</h2>
        </div>
      </div>
      <div className='md:w-[695px] md:h-[450px] w-full h-full'>
        <Image src={JSON.parse(JSON.stringify(img))} alt="Secure Organization"  className='h-full w-full object-contain' quality={100}  />
      </div>
    </div>
  );
};

export default SecureOrganization;
