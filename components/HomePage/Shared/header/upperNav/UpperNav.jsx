import React from 'react';
import Link from 'next/link';
import '@/style/UpperNav.css';
import dialer from '@/assets/nav/dialer.png';
import ukFlag from '@/assets/nav/uk.png';
import usaFlag from '@/assets/nav/usa.png';
import whatsapp from '@/assets/nav/whatsapp.png';
import world from '@/assets/nav/earth-americas-solid.svg';

const UpperNav = () => {
    return (
        <div className="top_bar md:block hidden">
            <div className="container flex items-center gap-3 justify-center">
                <ul className="top_bar_menu min-w-[703.5px]">
                    <li>
                        <Link href="/findus" target="_blank"
                            className='text-white flex justify-center items-center gap-2 text-nowrap'
                        >
                            <img className="world_icon w-[15px] h-[15px]" src={world.src} alt="Worldwide Offices" />
                            World Wide Offices
                        </Link>
                    </li>
                    <li className="call_request">
                        <Link href="/get_start" className='hover:underline text-nowrap' target="_blank">Schedule A Meeting</Link>
                    </li>
                    <li className="country_num_wrapper">
                        <strong>Sales</strong>
                        <div className="pl-4 contact_icon dropdown relative">
                            <img className="wts_icon dropdown-toggle" data-toggle="dropdown" src={whatsapp.src} alt="phone" />
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" href="https://wa.me/+16162718544" target="_blank">
                                    <img className="flag_icon" src={usaFlag.src} alt="phone" /> +16162718544
                                </Link>
                                <Link className="dropdown-item" href="https://wa.me/+442038147566" target="_blank">
                                    <img className="flag_icon" src={ukFlag.src} alt="phone" /> +442038147566
                                </Link>
                            </div>
                        </div>
                        <div className="m-0 main_number group">
                            <div className="flex items-center">
                                <div className="icon_flag_wrapper">
                                    <img className="tel_icon" id="dialer_icon" src={dialer.src} alt="phone" />
                                    <img className="tel_icon flag_icon hidden group-hover:block" id="usa_flag" src={usaFlag.src} alt="phone" />
                                </div>
                                <Link href="tel:+1 616 271 8544" className='text-nowrap'>+1 616 271 8544 <i id="caret" className="fas fa-caret-down carret_up" aria-hidden="true"></i>
                                </Link>
                            </div>
                            <div id="dropdown_number">
                                <ul className="country_number">
                                    <li className='flex items-center gap-1'>
                                        <img className="tel_icon flag_icon" src={ukFlag.src} alt="phone" />
                                        <Link href="tel:+442038147566" className='text-nowrap'>+44 203 814 7566</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UpperNav;