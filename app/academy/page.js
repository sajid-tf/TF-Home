import AcademyHero from '@/components/dynamicSections/HeroVariants/AcademyHero';
import React from 'react';
import hero from "@/asset/academy/corporate/hero.webp";

export const metadata = {
    title: "Ethical Hacking Course | Learn from CEH Certified Trainers",
    description: "This Ethical hacking course will help you become an ethical hacker. CEH certified trainers serve online courses for individuals in schools, colleges, universities, Business companies, and law enforcement agencies from beginner to advanced. Learn how to do ethical hacking, vulnerability assessment, penetration testing, etc.",
};

const page = () => {
    return (
        <div className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10">
            <AcademyHero
                title={<h2 className='text-3xl lg:text-[48px] text-strongWhite font-tertiary font-bold uppercase leading-tight drop-shadow-md'>LEADING <span className='text-secondary'> ETHICAL <br className="hidden lg:inline-block" />HACKING </span> COURSE</h2>}
                btnText={"Get Started"}
                textColorVariant={'secondary'}
                bgImage={hero?.src}
            />

        </div>
    );
};

export default page;