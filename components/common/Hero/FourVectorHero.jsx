import heroBusiness from '@/assets/hero/business/hero-business-cybersecurity.png';
import Link from 'next/link';
import { Button } from '@/components/common';

const FourVectorHero = ({ title, description, btnTxt, bgImg, variants = 'primary' }) => {
    const spanTextVariants = {
        primary: 'text-skyThree',
        secondary: 'text-secondary',
        red: 'text-redThree',
        yellow: 'text-yellowTwo',
        purple: 'text-purpleTwo',
        sky: 'text-skyThree',
        green: 'text-green',
        yellowThree: 'text-yellowThree',
        secondaryTwo: 'text-secondaryTwo',
        yellowTwo: 'text-yellowTwo',
        skyFour: 'text-skyFour'
    }
    const btnBGVariants = {
        primary: 'bg-skyThree hover:border-skyThree hover:bg-transparent hover:text-skyThree',
        secondary: 'bg-secondary hover:border-secondary hover:bg-transparent hover:text-secondary',
        red: 'bg-redThree hover:bg-transparent hover:border-redThree hover:text-redThree',
        yellow: 'bg-yellowTwo hover:border-yellowTwo hover:bg-transparent hover:text-yellowTwo',
        purple: 'bg-purpleTwo hover:border-purpleTwo hover:bg-transparent hover:text-purpleTwo',
        sky: 'bg-skyThree hover:border-skyThree hover:bg-transparent hover:text-skyThree',
        green: 'bg-green hover:border-green hover:bg-transparent hover:text-green',
        yellowThree: 'bg-yellowThree hover:border-yellowThree hover:bg-transparent hover:text-yellowThree',
        secondaryTwo: 'bg-secondaryTwo hover:border-secondaryTwo hover:bg-transparent hover:text-secondaryTwo',
        yellowTwo: 'bg-yellowTwo hover:border-yellowTwo hover:bg-transparent hover:text-yellowTwo',
        skyFour: 'bg-skyFour hover:border-skyFour hover:bg-transparent hover:text-skyFour'
    }
    return (
        <section className='w-full mx-auto h-[450px] md:h-[600px] overflow-hidden shadow-md' style={{
            backgroundImage: `url(${bgImg ? bgImg : heroBusiness?.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="relative w-full lg:max-w-[1200px] mx-auto">
                <div className="w-[300px] md:w-[600px] lg:min-w-[900px] h-fit absolute top-[60px] md:top-[160px] lg:top-[140px] left-6 md:left-10 lg:left-0 flex flex-col items-start justify-center gap-5 z-50">
                    {title ? title : <h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">PROTECT YOUR BUSINESS WITH <br className='hidden lg:visible' /> <span className={`${spanTextVariants[variants]}`}>ENTERPRISE</span> CYBERSECURITY</h1>}
                    <div className='w-full lg:w-[650px]'>
                        <p className="text-sm md:text-base lg:text-lg  font-tertiary text-darkBgText drop-shadow-2xl leading-relaxed" dangerouslySetInnerHTML={{ __html: description ? description : "Description" }}></p>
                    </div>
                    <Button variant="contained" size='medium' color={variants} className="w-fit" asChild>
                        <Link href="/get_start/" target="_blank">
                            {btnTxt ? btnTxt : "Request A Call"}
                        </Link>
                    </Button>
                </div>
            </div>
        </section >
    );
};

export default FourVectorHero;