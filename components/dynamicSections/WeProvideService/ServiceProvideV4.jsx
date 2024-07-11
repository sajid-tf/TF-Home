import { Button } from "@/components/common";
import Content from "@/components/common/Content";
import Divider from "@/components/common/Divider";
import SheildCheckline from "@/components/common/SheildCheckline";
import cn from "@/utils/helper/cn";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceProvideV4 = ({ color, reverse = false, data }) => {
    return (
        <section className="max-w-[1200px] mx-3 md:mx-auto">
            <Image
                src={data.images.smallScreen.src}
                alt={data.images.smallScreen.alt}
                className="md:hidden w-full"
            />

            <div className="md:translate-y-[150px]  mt-[10px] md:mt-0 relative">
                <Divider horizontal color={color} className="w-full h-1" />
                <div className={cn("absolute -top-11", {
                    "left-1/2 -translate-x-1/2 md:left-1/3 md:-translate-x-1/3": reverse === false,
                    "left-1/2 -translate-x-1/2 md:left-2/3 md:-translate-x-2/3": reverse === true
                })}>
                    <SheildCheckline color={color} icon={data.icon} />
                </div>
            </div>
            <div className={cn("flex", {
                "flex-row-reverse": reverse === true,
                "flex-row": reverse === false,
            })}>
                <div className="w-full md:w-2/3 flex flex-col items-center gap-5 md:pt-[150px]">
                    <h4 className="text-center text-lightBGText text-lg md:text-2xl font-bold capitalize mt-12">{data.title}</h4>
                    <Content className="text-justify px-0 md:px-10 ">{data.para}</Content>

                    <Button color={color} variant="borderLeft" endIcon={<FaArrowRight />} rightMove className="w-full md:w-fit" asChild>
                        <Link href={data.btn.href}>
                            {data.btn.text}
                        </Link>
                    </Button>
                </div>
                <div className={cn("hidden md:block w-1/3 relative", {
                    "mr-10": reverse === false,
                    "ml-10": reverse === true,
                })}>
                    <div className={cn("w-full h-full", {
                        "border-redThree/20": color === "redThree",
                        "border-primary/20": color === "primary",
                        "border-sky/20": color === "sky",
                        "border-secondary/20": color === "secondary",
                        "border-yellow/20": color === "yellow",
                        "border-skyTwo/20": color === "skyTwo",
                        "border-purple/20": color === "purple",
                        "border-purpleTwo/20": color === "purpleTwo",

                        "border-l-[120px]": reverse === false,
                        "border-r-[120px]": reverse === true,
                    })}>

                    </div>
                    <div className={cn("absolute top-0 left-0 z-10 py-10", {
                        "pl-10": reverse === false,
                        "pr-10": reverse === true,
                    })}>
                        <Image
                            src={data.images.largeScreen.src}
                            alt={data.images.largeScreen.alt}
                            className='w-full h-full object-contain object-center'
                        />
                    </div>
                </div>
            </div>

        </section>

    );
};

export default ServiceProvideV4;