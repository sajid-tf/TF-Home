
import React from 'react';
import Title from '@/components/common/Title/index';
import Image from 'next/image';
import whyFranchise from "@/asset/company/franchise/why-franchis.webp"
import { BenefitIcon, EconomiesIcon, NegotiationIcon, ProtectedIcon, RewardIcon, RiskIcon, SuccessIcon, SupportIcon } from '@/components/icons/BusinessCybersecurity';

const WhyTakeFranchise = () => {
    return (
        <section >
            <Title>Why Take Franchise</Title>
            <div className='w-full lg:w-[1200px] h-fit mx-auto pt-[42px]'>
                <div className='w-full h-full flex flex-col lg:flex-row items-center gap-[42px]'>
                    <div className=''>
                        <div className='w-full h-full lg:w-[400px] mx-auto'>
                            <Image alt='Franchise' src={whyFranchise} quality={100} className='w-full h-fit' />
                        </div>
                    </div>
                    <div className='w-full lg:w-[748px] h-full'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            {
                                franchaiseData?.map((item, index) => (
                                    <FranchaiseCard item={item} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FranchaiseCard = ({ item }) => {
    return (
        <div className='w-[364px] h-fit flex gap-5 px-2.5 py-4'>
            <div className="text-secondary">
                {React.cloneElement(item.icon, {
                    className: "w-[40px] h-[40px] md:w-[60px] md:h-[60px]",
                })}
            </div>
            <div>
                <h3 className='md:text-[18px] text-[16px] font-medium'>{item?.title}</h3>
                <p className='text-lightBlack md:text-[16px] text-[14px] pt-2'>{item?.desc}</p>
            </div>

        </div>
    )
}

export default WhyTakeFranchise;


const franchaiseData = [
    {
        id: 1,
        title: "RISK AVOIDANCE",
        desc: "Help you avoid a lot of the risk of starting a new business.",
        icon: <RiskIcon />
    },
    {
        id: 2,
        title: "BENEFIT FROM A BRAND NAME",
        desc: "Connecting with a Brand helps you navigate bureaucracy and get free advice.",
        icon: <BenefitIcon />
    },
    {
        id: 3,
        title: "SUCCESS IS IMMINENT",
        desc: "Investing in a proven formula set by the franchisor makes life easier.",
        icon: <SuccessIcon />
    },
    {
        id: 4,
        title: "MORE SCOPE FOR NEGOTIATION",
        desc: "Easier to negotiate prices to lower levels through buying power of the system.",
        icon: <NegotiationIcon />
    },
    {
        id: 5,
        title: "CLAIM REWARDS",
        desc: "Easier to get funding, More diversified revenue stream.",
        icon: <RewardIcon />
    },
    {
        id: 6,
        title: "RECEIVE ONGOING SUPPORT",
        desc: "Constant operational support from experienced people helps.",
        icon: <SupportIcon />
    },
    {
        id: 7,
        title: "ECONOMIES OF SCALE",
        desc: "The competitive advantage leads to higher operating margins.",
        icon: <EconomiesIcon />
    },
    {
        id: 8,
        title: "ACCESS PROTECTED TERRITORY",
        desc: "Protected within the franchise system where other franchises can't access.",
        icon: <ProtectedIcon />
    },

]
