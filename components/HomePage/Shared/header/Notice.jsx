"use client";
import Link from 'next/link'
import React from 'react'
import { TbAlertTriangle } from 'react-icons/tb';
import { ImCancelCircle } from "react-icons/im";

const Notice = () => {
  const [showWarning, setShowWarning] = React.useState(true);

  React.useEffect(() => {
    if (localStorage.getItem('showWarning') === 'false') {
      setShowWarning(false);
    }
  }, [])
  return (showWarning ?
    <div className='py-2 max-sm:px-2 max-sm:pr-4 md:py-4 relative' style={{ background: '#7C251D' }}>
      <div className='container flex items-center gap-2 md:gap-5 justify-center text-white'>
        <div className='flex items-center gap-1'>
          <TbAlertTriangle className='text-yellow text-2xl animate-blind' />
          <span>Alert</span>
        </div>
        <p className='md:block hidden'>
          <span className="marquee_text">Please be aware of copycats and scammers who are pretending to be TechForing.</span>
        </p>
        <marquee
          className="marquee md:hidden block"
          behavior="scroll"
          direction="left"
          scrollamount="3"
        >
          <span className="marquee_text">  Please be aware of copycats and scammers who are pretending to be TechForing.</span>
        </marquee>
        <button className='text-nowrap bg-[#A43028] border-0 rounded py-1 px-2.5 text-sm active:scale-95 transition-all duration-200'>
          <Link className='leading-normal' href="/scammers_list/" >Details Here</Link>
        </button>
      </div>
      <ImCancelCircle
        onClick={() => {
          setShowWarning(false)
          localStorage.setItem('showWarning', 'false')
        }}
        className='text-white text-base font-black absolute top-0 md:top-1/2 md:-translate-y-1/2 right-0 md:right-2 cursor-pointer  rounded-full' />
    </div> : ''
  )
}

export default Notice