import { Button } from "@/components/common";
import Content from "@/components/common/Content";
import SheildCheckline from "@/components/common/SheildCheckline";
import cn from "@/utils/helper/cn";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoPlaySharp } from "react-icons/io5";

const ServiceProvideV5 = ({ color, reverse = false, data }) => {
    const iconColor = {
        primary: "text-primary",
        secondary: "text-secondary",
        redThree: "text-redThree",
        sky: "text-sky",
        yellow: "text-yellow",
        purple: "text-purple",
        purpleTwo: "text-purpleTwo",
    }
    return (
        <section className="max-w-[1200px] md:mx-auto">
            <Image
                src={data.images.smallScreen.src}
                alt={data.images.smallScreen.alt}
                className="md:hidden w-full"
            />
            <div className={cn("relative mt-4 md:mt-[100px] border-t-4", {
                "border-primary": color === "primary",
                "border-redThree": color === "redThree",
                "border-sky": color === "sky",
                "border-yellow": color === "yellow",
                "border-secondary": color === "secondary",
                "border-purple": color === "purple",
                "border-purpleTwo": color === "purpleTwo",
            })}>

                <div className={cn("absolute -top-12", {
                    "left-1/2 -translate-x-1/2 md:left-1/3 md:-translate-x-1/3": reverse === false,
                    "left-1/2 -translate-x-1/2 md:left-2/3 md:-translate-x-2/3": reverse === true
                })}>
                    <SheildCheckline color={color} icon={data.icon} />
                </div>

                <div className={cn("flex gap-10", {
                    "flex-row-reverse": reverse === true,
                    "flex-row": reverse === false,
                })}>
                    <div className="w-full md:w-2/3 flex flex-col items-center gap-5">
                        <h4 className="text-center text-lightBGText text-lg md:text-2xl font-bold capitalize mt-12">{data.title}</h4>
                        <Content className="text-justify">{data.para}</Content>

                        {
                            data.list.map((item, index) => (
                                <div key={index} className="flex gap-[14px] items-start">
                                    <div className={cn("shrink-0 w-11 h-8 rounded-full flex items-center justify-center", {
                                        "bg-primary/10": color === 'primary',
                                        "bg-secondary/10": color === 'secondary',
                                        "bg-redThree/10": color === 'redThree',
                                        "bg-sky/10": color === 'sky',
                                        "bg-yellow/10": color === 'yellow',
                                    })}>
                                        <div className={cn("w-6 h-3 flex items-center justify-center rounded-full", {
                                            "bg-primary/20": color === 'primary',
                                            "bg-secondary/20": color === 'secondary',
                                            "bg-redThree/20": color === 'redThree',
                                            "bg-sky/20": color === 'sky',
                                            "bg-yellow/20": color === 'yellow',
                                            "bg-purpleTwo/20": color === 'purpleTwo',
                                        })}>

                                            <IoPlaySharp className={`size-6 ${iconColor[color]}`} />
                                        </div>
                                    </div>
                                    <div>
                                        <Content className="text-justify font-semibold">{item.title}</Content>
                                        <Content className="text-justify">{item.desc}</Content>
                                    </div>
                                </div>
                            ))
                        }
                        <Button color={color} variant="borderLeft" endIcon={<FaArrowRight />} rightMove className="w-full md:w-fit" asChild>
                            <Link href={data.btn.href}>
                                {data.btn.text}
                            </Link>
                        </Button>
                    </div>
                    <div className={cn("hidden md:block w-1/3 relative")}>
                        <div className={cn("w-[150px]  h-full", {
                            "bg-redThree/20": color === "redThree",
                            "bg-primary/20": color === "primary",
                            "bg-sky/20": color === "sky",
                            "bg-secondary/20": color === "secondary",
                            "bg-yellow/20": color === "yellow",
                            "bg-skyTwo/20": color === "skyTwo",
                            "bg-purple/20": color === "purple",
                            "bg-purpleTwo/20": color === "purpleTwo",

                            "float-right": reverse === true,
                        })}>
                        </div>
                        <div className={cn("absolute top-1/2 -translate-y-1/2 h-[90%]")}>
                            <Image
                                src={data.images.largeScreen.src}
                                alt={data.images.largeScreen.alt}
                                className="h-full object-contain object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ServiceProvideV5;