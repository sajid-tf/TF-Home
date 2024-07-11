import { footerNavItems } from '@/utils/mock/dummyData';
import whiteLogo from "@/asset/footer/white-logo.webp";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const FooterContent = () => {
    return (
        <div className='w-full h-full flex p-5'>
            <div className='w-1/3 p-5'>
                <div className='flex flex-col items-start justify-between gap-16'>
                    <div className='w-full h-full'>
                        <Image src={whiteLogo} alt='footer-logo' width={214} height={100} />
                    </div>
                    <div>
                        <h6 className='text-sm text-white font-thin pb-3'>Follow Us On</h6>
                        <div className='flex items-center justify-start gap-3'>
                            <a href="https://www.facebook.com/techforing/" target="_blank" className="text-white text-2xl cursor-pointer"><FaFacebook /></a>
                            <a href="https://twitter.com/techforingltd?lang=en" target="_blank" className="text-white text-2xl cursor-pointer"><FaTwitter /></a>
                            <a href="https://www.linkedin.com/company/techforingltd./" target="_blank" className="text-white text-2xl cursor-pointer"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/techforingltd/" target="_blank" className="text-white text-2xl cursor-pointer"><FaInstagramSquare /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/3 p-8 pt-16'>
                <div className='grid grid-cols-3 items-start justify-center gap-3'>
                    {
                        footerNavItems.map((footerNav, index) =>
                            <div key={index}>
                                <h3 className='text-white text-lg font-semibold pb-3'>{footerNav.name}</h3>
                                <ul>
                                    {
                                        footerNav?.items?.map((item, index2) => (
                                            <Link key={index2} href={item?.link}>
                                                <li key={index} className='text-white text-sm py-1.5 hover:text-secondary transition-all hover:translate-x-1'>{item?.name}</li>
                                            </Link>
                                        ))}
                                </ul>
                            </div>
                        )}
                </div>
                <p className='text-white opacity-50 text-xs pt-12 text-right pr-16'>© {new Date().getFullYear()} TechForing Ltd.</p>
            </div>
        </div>
    );
};

export default FooterContent;