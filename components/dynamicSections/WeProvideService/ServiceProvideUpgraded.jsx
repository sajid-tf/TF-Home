import { serviceProvideV5Data } from '@/utils/mock/dummyData';
import Image from 'next/image';
import React from 'react';
import { IoPlaySharp } from "react-icons/io5";

const ServiceProvideUpgraded = ({ variant = 'purpleTwo' }) => {
    const iconColor = {
        primary: "text-primary",
        secondary: "text-secondary",
        redThree: "text-redThree",
        sky: "text-sky",
        yellow: "text-yellow",
        purple: "text-purple",
        purpleTwo: "text-purpleTwo",
    }
    const outerBGColor = {
        primary: "border-primary/10",
        secondary: "border-secondary/10",
        redThree: "border-redThree/10",
        sky: "border-sky/10",
        yellow: "border-yellow/10",
        purple: "border-purple/10",
        purpleTwo: "border-purpleTwo/10",
    }
    const innerBGColor = {
        primary: "border-primary/20",
        secondary: "border-secondary/20",
        redThree: "border-redThree/20",
        sky: "border-sky/20",
        yellow: "border-yellow/20",
        purple: "border-purple/20",
        purpleTwo: "border-purpleTwo/20",
    }
    const normalBorderColor = {
        primary: "border-primary",
        secondary: "border-secondary",
        redThree: "border-redThree",
        sky: "border-sky",
        yellow: "border-yellow",
        purple: "border-purple",
        purpleTwo: "border-purpleTwo",
    }
    const bgColor = {
        primary: "bg-primary",
        secondary: "bg-secondary",
        redThree: "bg-redThree",
        sky: "bg-sky",
        yellow: "bg-yellow",
        purple: "bg-purple",
        purpleTwo: "bg-purpleTwo"
    }
    return (
        <div className={`w-[1200px] h-[580px] mx-auto border-t-4 ${normalBorderColor[variant]}`}>
            <div className="w-full h-full flex gap-10 border">
                <div className="w-full border">
                    <div className="w-[106px] h-[106px] bg-purpleTwo/20 flex items-center justify-center rounded-full mx-auto -mt-[58px]">
                        <div className={`w-[78px] h-[78px] ${bgColor[variant]} rounded-full flex items-center justify-center shadow-md`}>
                            {serviceProvideV5Data.bugBountyService.icon}
                        </div>
                    </div>
                    <div className="h-fit mt-[22px] flex flex-col gap-[22px]">
                        <h4 className="text-2xl text-lightBGText font-tertiary font-bold flex items-center justify-center">{serviceProvideV5Data.bugBountyService.title}</h4>
                        <div>
                            <h6 className="text-lightBGText font-tertiary text-justify">{serviceProvideV5Data.bugBountyService.para}</h6>
                        </div>
                        <div className="flex flex-col">
                            {serviceProvideV5Data.bugBountyService.list.map((item, index) => (
                                <div className="py-2.5 flex items-start gap-[14px]" key={index}>
                                    <div className="w-[44px] h-[32px] bg-purpleTwo/10 rounded-full p-2.5 flex items-center justify-center">
                                        <div className="w-full h-full bg-purpleTwo/20 rounded-full flex items-center justify-center">
                                            <IoPlaySharp className={`size-6 text-purpleTwo`} />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <h6 className="text-lightBGText font-tertiary font-semibold">{item?.title}</h6>
                                        <p className="text-lightBGText font-tertiary text-justify">{item?.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[400px] border relative">
                    <div className="w-[150px] h-full bg-purpleTwo/20"></div>
                    <div className="w-full h-fit absolute top-1/2 -translate-y-1/2 z-10">
                        <Image
                            src={serviceProvideV5Data.bugBountyService.images.largeScreen.src}
                            alt={serviceProvideV5Data.bugBountyService.images.largeScreen.alt}
                            className="w-full h-fit"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProvideUpgraded;