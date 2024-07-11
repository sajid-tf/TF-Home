"use client";
import { useEffect } from 'react';
import '@/style/hero.css';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import Link from 'next/link';
// import p1 from '@/assets/business-cyber-security.webp';
import p1 from '@/assets/hero/business/hero-business-cybersecurity.png';
// import p2 from '@/assets/2.png';
import p2 from "@/asset/home-hero/personal-hero.webp"
import p3 from '@/asset/home-hero/growth-hero.webp';
import { Button } from '@/components/common';

const Hero = () => {
    const slide = (direction) => {
        let heroSlider = document.querySelector('.heroSlider');
        let heroItems = document.querySelectorAll('.heroItem');
        heroItems[heroItems.length - 1].remove();
        direction === 'next' && heroSlider.append(heroItems[0]);
        direction === 'prev' && heroSlider.prepend(heroItems[heroItems.length - 2]);
        heroItems.forEach((item, i) => {
            item.classList.remove('active');
        });
        heroSlider = document.querySelector('.heroSlider');
        heroItems = document.querySelectorAll('.heroItem');
        heroItems[1].classList.add('active');
        heroSlider.append(heroItems[0].cloneNode(true));
    }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         slide('next');
    //     }, 8000);

    //     return () => {
    //         clearInterval(interval); // Cleanup interval on component unmount
    //     };
    // }, []);
    return (
        <main className='heroSlider-area w-full h-[420px] md:h-[600px] relative overflow-hidden'>
            <ul className='heroSlider'>
                <li className='heroItem 1'
                    style={{
                        boxShadow: '4px 4px 24px black',
                        backgroundImage: `url(${p1.src})`
                    }}>
                    <div className='container flex md:items-center h-full justify-center md:justify-start'>
                        <div className='w-fit z-50 flex flex-col items-center md:items-start gap-4 md:gap-8'>
                            <div className='w-fit h-fit overflow-hidden'>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white contentHeading font-bold uppercase drop-shadow-lg s2h1'>Business</h3>
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white contentHeading font-bold uppercase drop-shadow-lg s2h2'>CyberSecurity</h3>
                                </div>
                            </div>
                            <div className='md:w-[500px] h-fit s2SubContent'>
                                <p className='text-white text-center md:text-start text-2xl md:text-4xl font-normal capitalize drop-shadow-lg md:w-[460px] pb-4 md:pb-7'>Safeguarding Your Business in the Digital Frontier</p>
                                <div className='flex justify-center md:justify-start'>
                                    {/* <Link target='_blank' href='/business_cybersecurity'>
                                        <button className='md:w-[240px] md:h-[70px] w-[120px] h-[40px] bg-secondary text-white rounded-full text-base md:text-lg'>Explore More</button>
                                    </Link> */}
                                    <Button asChild color="secondary" >
                                        <Link target='_blank' href='/business_cybersecurity'>Explore More</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='heroItem 2 active'
                    style={{
                        boxShadow: '4px 4px 24px black',
                        backgroundImage: `url(${p2.src})`
                    }}>
                    <div className='container flex md:items-center h-full justify-center md:justify-start'>
                        <div className='w-fit z-50 flex flex-col items-center md:items-start gap-4 md:gap-8'>
                            <div className='w-fit h-fit overflow-hidden'>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white contentHeading font-bold uppercase drop-shadow-lg s2h1'>Personal</h3>
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white : contentHeading font-bold uppercase drop-shadow-lg s2h2'>CyberSecurity</h3>
                                </div>
                            </div>
                            <div className='md:w-[500px] h-fit s2SubContent'>
                                <p className='text-white text-center md:text-start text-2xl md:text-4xl font-normal capitalize drop-shadow-lg md:w-[460px] pb-4 md:pb-7'>Unleash the power of your personal cyber armor</p>
                                <div className='flex justify-center md:justify-start'>
                                    <Button asChild color="white" >
                                        <Link target='_blank' href='/mysecurity'>Explore More</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='heroItem 3'
                    style={{
                        boxShadow: '4px 4px 24px black',
                        backgroundImage: `url(${p3.src})`
                    }}>
                    <div className='container flex md:items-center h-full justify-center md:justify-start'>
                        <div className='w-fit z-50 flex flex-col items-center md:items-start gap-4 md:gap-8'>
                            <div className='w-fit h-fit overflow-hidden'>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white contentHeading font-bold uppercase drop-shadow-lg s2h1'>Techforing</h3>
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white contentHeading font-bold uppercase drop-shadow-lg s2h2'>Growth</h3>
                                </div>
                            </div>
                            <div className='md:w-[500px] h-fit s2SubContent'>
                                <p className='text-white text-center md:text-start text-2xl md:text-4xl font-normal capitalize drop-shadow-lg md:w-[460px] pb-4 md:pb-7'>Revolutionize Your Workflow with Our Products</p>
                                <div className='flex justify-center md:justify-start'>
                                    <Button asChild color="secondary" >
                                        <Link target='_blank' href='https://growth.techforing.com'>Visit Site</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='heroItem 1'
                    style={{
                        boxShadow: '4px 4px 24px black',
                        backgroundImage: `url(${p1.src})`
                    }}>
                    <div className='container flex md:items-center h-full justify-center md:justify-start'>
                        <div className='w-fit z-50 flex flex-col items-center md:items-start gap-4 md:gap-8'>
                            <div className='w-fit h-fit overflow-hidden'>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white contentHeading font-bold uppercase drop-shadow-lg s2h1'>Business</h3>
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className='text-center md:text-start text-white contentHeading font-bold uppercase drop-shadow-lg s2h2'>CyberSecurity</h3>
                                </div>
                            </div>
                            <div className='md:w-[500px] h-fit s2SubContent'>
                                <p className='text-white text-center md:text-start text-2xl md:text-4xl font-normal capitalize drop-shadow-lg md:w-[460px] pb-4 md:pb-7'>Safeguarding Your Business in the Digital Frontier</p>
                                <div className='flex justify-center md:justify-start'>
                                    <Link target='_blank' href='/business_cybersecurity'>
                                        <button className='md:w-[240px] md:h-[70px] w-[120px] h-[40px] bg-secondary text-white rounded-full text-base md:text-lg'>Explore More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <nav className='nav flex items-center gap-8 w-full md:w-fit mb:justify-center justify-between md:px-0 px-4'>
                <button
                    onClick={() => slide('prev')}
                    className='active:scale-75 transition-all duration-300'>
                    <IoIosArrowDropleft className='text-white text-4xl prev' name="arrow-back-outline" />
                </button>
                <button
                    onClick={() => slide('next')}
                    className='active:scale-75 transition-all duration-300'>
                    <IoIosArrowDropright className='text-white text-4xl next' name="arrow-forward-outline" />
                </button>
            </nav>
        </main>
    );
};

export default Hero;