"use client";
import { useRef, useEffect } from 'react';
import './../../../style/hero.css';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import heroOneUpper from '@/assets/hero/heroOne-Upper.png';
import heroOneLower from '@/assets/hero/heroOne-Lower.png';
import heroTwoUpper from '@/assets/hero/heroTwo-Upper.png';
import heroTwoLower from '@/assets/hero/heroTwo-Lower.png';
import heroTwoLeft from '@/assets/hero/heroTwo-Left.png';
import heroTwoRight from '@/assets/hero/heroTwo-Right.png';
import heroThreeLeft from '@/assets/hero/heroThree-Left.png';
import heroThreeRight from '@/assets/hero/heroThree-Right.png';
import heroOneLeft from '@/assets/hero/heroOne-Left.png';
import heroOneRight from '@/assets/hero/heroOne-Right.png';
import heroOneUpperSm from '@/assets/hero/heroOne-Upper-sm.png';
import heroOneLowerSm from '@/assets/hero/heroOne-Lower-sm.png';
import heroTwoUpperSm from '@/assets/hero/heroTwo-Upper-sm.png';
import heroTwoLowerSm from '@/assets/hero/heroTwo-Lower-sm.png';
import heroTwoLeftSm from '@/assets/hero/heroTwo-Left-sm.png';
import heroTwoRightSm from '@/assets/hero/heroTwo-Right-sm.png';
import heroThreeLeftSm from '@/assets/hero/heroThree-Left-sm.png';
import heroThreeRightSm from '@/assets/hero/heroThree-Right-sm.png';
import heroOneLeftSm from '@/assets/hero/heroOne-Left-sm.png';
import heroOneRightSm from '@/assets/hero/heroOne-Right-sm.png';
import Link from 'next/link';

const Hero2 = () => {
  const splideRef = useRef(null);
  const options = {
    type: 'fade',
    rewind: true,
    perPage: 1,
    autoplay: true,
    interval: 6000,
    height: '100%',
    weight: '100%',
    arrows: false,
  };
  useEffect(() => {
    const mySlide = document?.querySelectorAll('.imgArea');
    const mySlideContent = document?.querySelectorAll('.sliderContent');
    if (splideRef.current) {
      const splideEvent = splideRef.current.splide.event;
      const splide = splideRef.current.splide;
      splideEvent.on('active', (slide) => {
        const activeSlider = mySlide?.[slide.index]
        mySlide?.forEach((slide, index) => {
          if (index !== slide.index) {
            slide.classList.remove('active');
          }
        });
        activeSlider?.classList.add('active');
        // content
        const activeContent = mySlideContent?.[slide.index]
        mySlideContent?.forEach((slide, index) => {
          if (index !== slide.index) {
            slide.classList.remove('active');
          }
        });
        activeContent?.classList.add('active');
      });
      splide.on('mounted', () => {
        splide.mount();
      });
    }
  }, []);
  return (
    <section className='hero-container'>
      <div className='w-full md:w-[1440px] h-[400px] md:h-[700px] mx-auto'>
        <Splide options={options} ref={splideRef} aria-label="My Favorite Images"
        >
          <SplideSlide className='relative'>
            <div className='imgArea active w-full md:w-[1440px] h-[400px] md:h-[700px]'>
              <div className='flex  indexOneTop'>
                <Image className='hidden md:block' src={heroTwoUpper} alt='hero' />
                <Image className='hidden md:block' src={heroOneUpper} alt='hero' />

                <Image className='md:hidden min-w-full' src={heroTwoUpperSm} alt='hero' />
                <Image className='md:hidden min-w-full' src={heroOneUpperSm} alt='hero' />
              </div>
              <div className='flex indexOneBottom'>
                <Image className='hidden md:block' src={heroOneLower} alt='hero' />
                <Image className='hidden md:block' src={heroTwoLower} alt='hero' />

                <Image className='md:hidden min-w-full' src={heroOneLowerSm} alt='hero' />
                <Image className='md:hidden min-w-full' src={heroTwoLowerSm} alt='hero' />
              </div>
            </div>
            <div className='h-full w-full absolute top-0 sliderContent active'>
              {/* <div className='w-[1440px] h-[700px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%" fill="none" className='animated-svg'>
                                    <path d="M0 700H1440L0 0V700Z" fill="url(#paint0_angular_2_12525)" fillOpacity="0.4" />
                                    <defs>
                                        <radialGradient id="paint0_angular_2_12525" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1440 700) rotate(-154.075) scale(1601.12 3293.74)">
                                            <stop stopColor="#00122E" />
                                            <stop offset="1" stopColor="#00122E" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div> */}
              <div className='md:w-4/5 w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex md:flex-row flex-col justify-between items-start md:items-center md:gap-0 gap-3'>
                <div className='w-fit h-fit overflow-hidden'>
                  <div className="overflow-hidden">
                    <h3 className='text-white text-4xl md:text-6xl font-bold uppercase drop-shadow-lg s2h1'>Business</h3>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className='text-white text-4xl md:text-6xl font-bold uppercase drop-shadow-lg s2h2'>CyberSecurity</h3>
                  </div>
                </div>
                <div className='md:w-[500px] h-fit s2SubContent'>
                  <p className='text-white text-2xl md:text-4xl font-normal capitalize drop-shadow-lg md:w-[460px] pb-4 md:pb-7'>Safeguarding Your Business in the Digital Frontier</p>
                  <Link target='_blank' href='/business_cybersecurity'>
                    <button className='md:w-[240px] md:h-[70px] w-[120px] h-[40px] bg-strongWhite rounded-full text-base md:text-lg'>Explore More</button>
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='relative'>
            <div className='imgArea scale-[1.185] md:scale-1 flex w-full md:w-[1440px] h-[400px] md:h-[700px]'>
              <div className='flex flex-col indexTwoLeft'>
                <Image className='hidden md:block' src={heroThreeLeft} alt='hero' />
                <Image className='hidden md:block' src={heroTwoLeft} alt='hero' />

                <Image className='md:hidden' src={heroThreeLeftSm} alt='hero' />
                <Image className='md:hidden' src={heroTwoLeftSm} alt='hero' />
              </div>
              <div className='flex flex-col indexTwoRight'>
                <Image className='hidden md:block' src={heroTwoRight} alt='hero' />
                <Image className='hidden md:block' src={heroThreeRight} alt='hero' />

                <Image className='md:hidden' src={heroTwoRightSm} alt='hero' />
                <Image className='md:hidden' src={heroThreeRightSm} alt='hero' />
              </div>
            </div>
            <div className='h-full w-full absolute top-0 sliderContent'>
              {/* <div className='w-full md:w-[1440px] h-[400px] md:h-[700px]'>
                                <svg width="100%" height="100%" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg" className='animated-svg2'>
                                    <path d="M1440 700H0L1440 -2V700Z" fill="url(#paint0_angular_835_12655)" fillOpacity="0.4" />
                                    <defs>
                                        <radialGradient id="paint0_angular_835_12655" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.000193119 700) rotate(-25.9249) scale(1601.12 3293.74)">
                                            <stop stopColor="#1A0E0D" />
                                            <stop offset="1" stopColor="#9A6F42" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div> */}
              <div className='md:w-4/5 w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex md:flex-row flex-col justify-between items-start md:items-center md:gap-0 gap-3'>
                <div className='w-fit h-fit overflow-hidden'>
                  <div className="overflow-hidden">
                    <h3 className='text-white text-4xl md:text-6xl font-bold uppercase drop-shadow-lg s2h1'>Personal</h3>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className='text-white text-4xl md:text-6xl font-bold uppercase drop-shadow-lg s2h2'>CyberSecurity</h3>
                  </div>
                </div>
                <div className='md:w-[500px] h-fit s2SubContent'>
                  <p className='text-white text-2xl md:text-4xl font-normal capitalize drop-shadow-lg md:w-[460px] pb-4 md:pb-7'>Unleash the power of your personal cyber armor</p>
                  <Link target='_blank' href='/mysecurity'>
                    <button className='md:w-[240px] md:h-[70px] w-[120px] h-[40px] bg-strongWhite rounded-full text-base md:text-lg'>Explore More</button>
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide className='relative'>
            <div className='imgArea scale-[1.185] md:scale-1 flex w-full md:w-[1440px] h-[400px] md:h-[700px]'>
              <div className='flex flex-col indexThreeLeft'>
                <Image className='hidden md:block' src={heroThreeLeft} alt='hero' />
                <Image className='hidden md:block' src={heroOneLeft} alt='hero' />

                <Image className='md:hidden' src={heroThreeLeftSm} alt='hero' />
                <Image className='md:hidden' src={heroOneLeftSm} alt='hero' />
              </div>
              <div className='flex flex-col indexThreeRight'>
                <Image className='hidden md:block' src={heroOneRight} alt='hero' />
                <Image className='hidden md:block' src={heroThreeRight} alt='hero' />

                <Image className='md:hidden' src={heroOneRightSm} alt='hero' />
                <Image className='md:hidden' src={heroThreeRightSm} alt='hero' />
              </div>
            </div>
            <div className='h-full w-full absolute top-0 sliderContent'>
              {/* <div className='w-full md:w-[1440px] h-[400px] md:h-[700px]'>
                                <svg width="689" height="100%" viewBox="0 0 689 700" fill="none" xmlns="http://www.w3.org/2000/svg" className='animated-svg3 ml-auto'>
                                    <path d="M689 701H0V-1H689V701Z" fill="url(#paint0_angular_835_12862)" fillOpacity="0.4" />
                                    <defs>
                                        <radialGradient id="paint0_angular_835_12862" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-4.3038e-05 701) rotate(-90) scale(702 1444.12)">
                                            <stop stopColor="#B06F01" />
                                            <stop offset="1" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div> */}
              <div className='md:w-4/5 w-11/12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex md:flex-row flex-col justify-between items-start md:items-center md:gap-0 gap-3'>
                <div className='w-fit h-fit overflow-hidden'>
                  <div className="overflow-hidden">
                    <h3 className='text-white text-4xl md:text-6xl font-bold uppercase drop-shadow-lg s2h1'>Techforing</h3>
                  </div>
                  <div className="overflow-hidden">
                    <h3 className='text-white text-4xl md:text-6xl font-bold uppercase drop-shadow-lg s2h2'>Growth</h3>
                  </div>
                </div>
                <div className='md:w-[500px] h-fit s2SubContent'>
                  <p className='text-white text-2xl md:text-4xl font-normal capitalize drop-shadow-lg md:w-[460px] pb-4 md:pb-7'>Revolutionize Your Workflow with Our Products</p>
                  <Link target='_blank' href='https://growth.techforing.com'>
                    <button className='md:w-[240px] md:h-[70px] w-[120px] h-[40px] bg-strongWhite rounded-full text-base md:text-lg'>Visit Site</button>
                  </Link>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default Hero2;