"use client"
import { globalImages } from '@/utils/images/globaIImages';
import Image from 'next/image';
import React, { Fragment } from 'react';
import CSIImg from '@/assets/assessments/CSI.png';

const AssessmentServiceSection = ({
  role,
  title,
  subtitle,
  paragraph,
  image,
  alt,
  position = 'bottom',
  variant = 'primary',
  reverse = false,
  isBoardImg = false,
  boardImg,
  boardTile,
  boardSubtitle
}) => {
  const boardPositionPosition = {
    center: 'bg-strongWhite w-[600px] h-fit overflow-visible hidden lg:flex',
    bottom: 'bg-strongWhite w-[900px] h-fit overflow-visible hidden lg:flex'
  }
  const boardWidthPosition = {
    center: 'w-[500px] p-8',
    bottom: 'w-[800px] p-10'
  }
  const positionContent = {
    center: 'top-1/2 -translate-y-1/2',
    bottom: 'bottom-0'
  }
  const positionReverseContent = {
    center: 'top-1/2 -translate-y-1/2 right-0',
    bottom: 'bottom-0 right-0'
  }
  const bg = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    redThree: 'bg-redThree',
    yellow: 'bg-yellowTwo',
    purple: 'bg-purpleTwo',
    green: 'bg-green',
    yellowThree: 'bg-yellowThree',
    secondaryTwo: 'bg-secondaryTwo',
    yellowTwo: 'bg-yellowTwo',
    skyThree: 'bg-skyThree',
    skyFour: 'bg-skyFour'
  }
  const borderColor = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    redThree: 'border-redThree',
    yellow: 'border-yellowTwo',
    purple: 'border-purpleTwo',
    green: 'border-green',
    yellowThree: 'border-yellowThree',
    secondaryTwo: 'border-secondaryTwo',
    yellowTwo: 'border-yellowTwo',
    skyThree: 'border-skyThree',
    skyFour: 'border-skyFour'
  }
  return (
    <div className={`w-[360px] h-fit lg:w-[1200px] mx-auto flex flex-col-reverse ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between relative`}>
      <div className='hidden lg:w-[461px] lg:inline'>
        <div className={`${reverse ? positionReverseContent[position] : positionContent[position]} z-10 absolute`}>
          <div className={`mb-1 md:mb-5 flex flex-col ${reverse ? 'items-end' : 'items-start'}`}>
            {role && <p className={`text-2xl md:text-4xl text-lightBGText pb-[10px] ${reverse ? 'text-right' : 'text-left'}`} dangerouslySetInnerHTML={{ __html: role ? role : 'Role' }}></p>}
            {title && <h3 className={`text-4xl font-bold text-lightBGText text-nowrap leading-snug ${reverse ? 'text-right' : 'text-left'} hidden lg:inline`} dangerouslySetInnerHTML={{ __html: title ? title : 'HOW RISK <br /> ASSESSMENT SERVICES <br /> BENEFIT YOUR BUSINESS' }}></h3>}
          </div>
          <div className={`${boardPositionPosition[position]}`}>
            {!reverse && <div className={`w-[100px] ${bg[variant]}`}></div>}
            <div className={`${boardWidthPosition[position]}`}>
              {isBoardImg ? <Fragment>
                <div className='w-[100px] h-[75px]'>
                  <Image src={boardImg ? boardImg : CSIImg} alt={alt ? alt : 'CSE'} className='w-full h-full' />
                </div>
                <h5 className="py-2.5 text-4xl font-bold text-lightBGText">{boardTile}</h5>
                <h6 className="py-2.5 text-2xl font-bold text-lightBGText">{boardSubtitle}</h6>
              </Fragment> :
                <Fragment>
                  {subtitle && <h5 className="pb-[15px] text-[18px] font-medium text-lightBGText">{subtitle}</h5>}
                  <div className='font-tertiary text-lightBGText text-justify' dangerouslySetInnerHTML={{ __html: paragraph ? paragraph : 'Regular risk assessments will give you a clear picture of your security status and how well-prepared you are against potential risks. Risk assessments can also help your organization upgrade its information security. Otherwise, continued use of a compromised system can lead to security breaches, damaging the reputation of your company.' }}></div>
                </Fragment>}
            </div>
            {reverse && <div className={`w-[100px] ${bg[variant]}`}></div>}
          </div>
        </div>
      </div>
      <div className='visible lg:hidden'>
        <div className={`w-[330px] min-h-[230px] bg-strongWhite border-t-[20px] ${borderColor[variant]} -mt-24 p-5`}>
          {role && <p className='text-md text-lightBGText' dangerouslySetInnerHTML={{ __html: role }}></p>}
          {title && <h3 className='text-xl font-bold text-lightBGText leading-snug py-[10px]' dangerouslySetInnerHTML={{ __html: title }}></h3>}
          {paragraph && (
            <div className='font-tertiary text-lightBGText text-justify' dangerouslySetInnerHTML={{ __html: paragraph ? paragraph : 'Regular risk assessments will give you a clear picture of your security status and how well-prepared you are against potential risks. Risk assessments can also help your organization upgrade its information security. Otherwise, continued use of a compromised system can lead to security breaches, damaging the reputation of your company.' }}>
            </div>
          )}
          {isBoardImg && (
            <Fragment>
              <div className='w-[100px] h-[75px] visible lg:hidden'>
                <Image src={boardImg || CSIImg} alt={alt || 'CSE'} className='w-full h-full' />
              </div>
              <h5 className="py-2.5 text-2xl lg:text-4xl font-bold text-lightBGText visible lg:hidden">{boardTile}</h5>
              <h6 className="py-2.5 text-xl lg:text-2xl font-bold text-lightBGText visible lg:hidden">{boardSubtitle}</h6>
            </Fragment>
          )}
        </div>
        {isBoardImg && (
          <Fragment>
            <div className='w-[100px] h-[75px] hidden lg:inline-block'>
              <Image src={boardImg || CSIImg} alt={alt || 'CSE'} className='w-full h-full' />
            </div>
            <h5 className="py-2.5 text-2xl lg:text-4xl font-bold text-lightBGText hidden lg:inline-block">{boardTile}</h5>
            <h6 className="py-2.5 text-xl lg:text-2xl font-bold text-lightBGText hidden lg:inline-block">{boardSubtitle}</h6>
          </Fragment>
        )}
      </div>
      <div className='w-full lg:w-[800px] lg:h-[600px]'>
        <Image className='w-full h-full object-cover' src={image ? image : JSON.parse(JSON.stringify(globalImages?.riskAssessmentImg))} quality={100} alt={alt ? alt : 'Risk Assessment Services'} />
      </div>
    </div>
  );
};

export default AssessmentServiceSection;