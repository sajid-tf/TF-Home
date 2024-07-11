'use client';
import React from 'react';
import footerBG from '@/asset/footer/footer-bg.webp';
import FooterContent from './FooterContent';
import whiteLogo from "@/asset/footer/white-logo.webp";
import bgVideo from "@/assets/videoplayback.webm"
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { footerNavItems } from '@/utils/mock/dummyData';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';
import Subtitle from '@/components/common/SubTitle';
import Content from '@/components/common/Content';

const Footer = () => {
  const [active, setActive] = React.useState(1)

  const katraFrom = (
    <iframe
      title="YourIframe"
      width="50%"
      height="180px"
      srcDoc={`
        <html lang="en">
        <head>
        </head>
        <body>
        <div>
        <style>
          body {
            background-color: transparent !important;
          }
          .kartra_optin_tpl_0 {
            max-width: 100% !important;
          }
          .kartra_optin_wrapper {
            border: none !important;
          }
          .kartra_optin_content_wrapper_inner {
            padding: 10px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
          }
          .kartra_optin_controls,
          .kartra_optin_cg.kartra_optin_field {
            height: 100% !important;
          }
          [class^=kartra_optin_tpl_].kartra_optin_tpl_0 .kartra_optin_cg .kartra_optin_controls i.kartra_optin_i {
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
          [class^=kartra_optin_tpl_] .kartra_optin_asterisk:before {
            display: none !important;
          }
          .kartra_optin_controls input {
            height: 100% !important;
            font-size: 14px !important;
            background-color: white !important;
            border-radius: 8px !important;
          }
          #kartra_optin_form_fields_container {
            display: flex;
            flex-direction:column;
            width: 100%;
            gap: 10px;
            align-items: center;
          }
          .kartra_optin_cg.kartra_optin_field {
            margin-bottom: 0 !important;
            width: 100% !important;
          }
          .kartra_optin_content_wrapper_inner button {
            margin-top: 0 !important;
            border-radius: 8px !important;
            white-space: nowrap !important;
            padding-top: 8px !important;
            padding-bottom: 8px !important;
            font-size: 16px !important;
          }
          .kartra_optin_field-label.kartra-optin-checkbox {
            color: #fff !important;
          }
          .kartra-optin-checkbox small {
            color: #fff !important;
            border: 1px solid #fff !important;
          }
          .kartra-optin-checkbox {
            color: #fff !important;
          }
          .kartra_gdpr_popover_button {
            display: none !important;
          }
          // @media (max-width: 768px) {
          //   #kartra_optin_form_fields_container {
          //     width: 100% ;
          //     flex-direction: column;
          //   }
          //   .kartra_optin_content_wrapper_inner {
          //     margin-bottom: 10px !important;
          //   }
          //   .kartra_optin_cg.kartra_optin_field {
          //     width: 100% !important;
          //   }
          // }
        </style>
        <div class="kartra_optin_container9f61408e3afb633e50cdf1b20de6f466"></div>
        </div>
        <script src="https://app.kartra.com/optin/98dlF1hiOkXc"></script>
        </body>
        </html>
      `}
      className="w-full"
    ></iframe>
  );
  return (
    <footer>
      <div className='relative shadow-lg hidden md:block' style={{
        backgroundImage: `url(${footerBG?.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '700px',
        backdropFilter: 'blur(6px)',
        zIndex: 1
      }}>
        <div className='absolute inset-0' style={{ zIndex: 2 }}>
          <div className='relative w-full h-full'>
            <video autoPlay muted loop preload="none" className='h-full w-full object-cover'>
              <source src={bgVideo} type="video/webm" /> 
            </video>
            <div className='absolute top-0 left-0 w-full h-full opacity-30' style={{ background: 'linear-gradient(86deg, #182F59 0%, #5BBC2E 100%)', backdropFilter: 'blur(6px)' }}></div>
          </div>
        </div>
        <div className='flex items-center justify-center relative z-50 container px-20'>
          <div className='flex flex-row items-center justify-center gap-6 pt-12 px-5 w-full'>
            <Subtitle className=' text-white text-center w-1/2'>KEEP UP WITH CYBERWORLD TRENDS & SUBSCRIBE TO OUR NEWSLETTER</Subtitle>
            <div className='w-1/2'>
              {katraFrom}
            </div>
          </div>
        </div>
        <div className='footerContent z-50'>
          <FooterContent />
        </div>
      </div>
      <div className='md:hidden bg-primary'>
        <div className='p-4'>
          <div className='w-full h-full mb-2'>
            <Image className='m-auto' src={whiteLogo} alt='footer-logo' width={160} height={100} />
          </div>
        </div>
        <Content className='text-white text-center max-w-[254px] mx-auto'>KEEP UP WITH CYBERWORLD TRENDS & SUBSCRIBE TO OUR NEWSLETTER</Content>
        {katraFrom}
        {/* <div className='h-[1px]'> */}
        <div className='w-3/4 h-[1px] bg-secondary m-auto'></div>
        {/* </div> */}
        <div className='p-4'>
          {
            footerNavItems.map((footerNav, index) => {
              return (
                <div key={index}>
                  <div className='flex items-center justify-between py-2 cursor-pointer'
                    onClick={() => {
                      if (active === footerNav.id) {
                        setActive(null)
                      } else {
                        setActive(footerNav.id)
                      }
                    }}
                  >
                    {
                      footerNav.link ?
                        <Link href={footerNav.link} className='hover:translate-x-1 duration-300'>
                          <span className='font-medium text-secondary'>{footerNav.name}</span>
                        </Link>
                        :
                        <span className='font-medium text-secondary'>{footerNav.name}</span>
                    }
                    {
                      footerNav?.items?.length > 0 &&
                      <MdKeyboardArrowDown className='text-secondary text-2xl' />
                    }
                  </div>
                  {
                    active === footerNav.id &&
                    footerNav?.items?.length > 0 &&
                    <div className='px-2 text-white'>
                      <ul className='flex flex-col'>
                        {footerNav?.items.map((singleItem, index2) => (
                          singleItem.link ?
                            <Link href={singleItem.link} key={index2 + index} className='hover:translate-x-1 duration-300'>
                              <li className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all'>
                                {singleItem.name}
                              </li>
                            </Link>
                            :
                            <li
                              className='py-2.5 px-1 text-sm leading-3 cursor-pointer hover:text-secondary transition-all'
                              key={index}
                            >
                              {singleItem.name}
                            </li>
                        ))}
                      </ul>
                    </div>
                  }
                  <div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='h-[1px] bg-secondary'></div>
        <div className='flex items-center justify-between px-9 py-6'>
          <div className='flex flex-col justify-center items-center gap-1'>
            <h6 className='text-xs text-white font-thin'>Follow Us On</h6>
            <div className='flex items-center justify-start gap-3'>
              <FaFacebook className='text-white text-base cursor-pointer' />
              <FaTwitter className='text-white text-base cursor-pointer' />
              <FaLinkedin className='text-white text-base cursor-pointer' />
              <FaInstagramSquare className='text-white text-base cursor-pointer' />
            </div>
          </div>
          <p className='text-white opacity-50 text-xs text-right'>© {new Date().getFullYear()} TechForing Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;