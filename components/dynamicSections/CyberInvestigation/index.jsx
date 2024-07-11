import { Button } from "@/components/common";
import Content from "@/components/common/Content";
import MiniSubtitle from "@/components/common/MiniSubtitle";
import Subtitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import cn from "@/utils/helper/cn";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CyberInvestigation = ({ color, data }) => {
    return (
        <section className="max-w-[1200px] md:mx-auto mx-3">
            {
                data?.header &&
                <Title className="mb-5">{data.header}</Title>
            }
            {
                data?.subheader &&
                <Content className="mb-5 text-lightBGText text-center capitalize">{data.subheader}</Content>
            }
            <div className="flex flex-col gap-5 md:gap-24">
                {data?.contents.map((item, index) => (
                    <div key={index} className={cn("flex flex-col-reverse relative md:flex-row gap-4", {
                        "md:flex-row-reverse md:border-r-4": index % 2 !== 0,
                        "md:flex-row md:border-l-4": index % 2 === 0,

                        'border-primary': color === 'primary',
                        'border-redThree': color === 'redThree',
                        'border-sky': color === 'sky',
                        'border-yellow': color === 'yellow',
                        'border-yellowTwo': color === 'yellowTwo',
                        'border-secondary': color === 'secondary',
                        'border-secondaryTwo': color === 'secondaryTwo'

                    })}>
                        <div className={cn("basis-full relative md:static md:basis-2/3 pt-14 md:py-5 md:pl-20 md:pr-10 border-t-4 md:border-t-0", {

                            'border-primary': color === 'primary',
                            'border-redThree': color === 'redThree',
                            'border-sky': color === 'sky',
                            'border-yellow': color === 'yellow',
                            'border-yellowTwo': color === 'yellowTwo',
                            'border-secondary': color === 'secondary',
                            'border-secondaryTwo': color === 'secondaryTwo'
                        })}>
                            <div className={cn("flex z-10 w-[106px] h-[106px] absolute top-0 -translate-y-1/2 md:top-1/2 md:-translate-y-1/2 rounded-full items-center justify-center", {
                                'bg-primary/20': color === 'primary',
                                'bg-redThree/20': color === 'redThree',
                                'bg-sky/20': color === 'sky',
                                'bg-yellow/20': color === 'yellow',
                                'bg-yellowTwo/20': color === 'yellowTwo',
                                'bg-secondary/20': color === 'secondary',
                                'bg-secondaryTwo/20': color === 'secondaryTwo',

                                'left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2': index % 2 !== 0,
                                'left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-1/2': index % 2 === 0,

                            })}>
                                <div className={cn("w-[78px] h-[78px] rounded-full flex items-center justify-center", {
                                    'bg-primary': color === 'primary',
                                    'bg-redThree': color === 'redThree',
                                    'bg-sky': color === 'sky',
                                    'bg-yellow': color === 'yellow',
                                    'bg-yellowTwo': color === 'yellowTwo',
                                    'bg-secondary': color === 'secondary',
                                    'bg-secondaryTwo': color === 'secondaryTwo',

                                })}>

                                    {
                                        item?.icon ? item?.icon : <label className="transition-transform text-[28px] hover:scale-150 font-bold text-white">
                                            {index + 1}
                                        </label>
                                    }
                                </div>
                            </div>
                            <Subtitle className="mb-2">{item.title}</Subtitle>
                            {item?.lists?.length === 0 && <MiniSubtitle className="mb-2 capitalize">{item.subtitle}</MiniSubtitle>}
                            <Content className="mb-2">
                                {item?.desc}
                            </Content>
                            {
                                item?.lists?.length > 0 && <MiniSubtitle className="mb-2 capitalize">{item.subtitle}</MiniSubtitle>
                            }

                            {item?.lists && <div className="grid grid-cols-2 gap-2 py-[10px] mb-2">
                                {
                                    item.lists.map((item, index) => (
                                        <p key={index} className={cn("border-l-4 pl-2 text-lightBGBodyText text-base font-normal leading-6", {
                                            'border-primary': color === 'primary',
                                            'border-redThree': color === 'redThree',
                                            'border-sky': color === 'sky',
                                            'border-yellow': color === 'yellow',
                                            'border-yellowTwo': color === 'yellowTwo',
                                            'border-secondary': color === 'secondary',
                                            'border-secondaryTwo': color === 'secondaryTwo'
                                        })}>{item}</p>
                                    ))
                                }
                            </div>}
                            {
                                item?.btn && <Button color={color} variant="text" styles={false} endIcon={<FaArrowRight />} rightMove className="my-3 w-full md:w-fit" asChild>
                                    <Link href={item.btn.src}>
                                        {item.btn.label}
                                    </Link>
                                </Button>
                            }
                        </div>
                        <div className="basis-full relative md:basis-1/3">
                            <div className={cn("hidden md:block w-[175px] h-full", {
                                "bg-redThree/20": color === "redThree",
                                "bg-primary/20": color === "primary",
                                "bg-sky/20": color === "sky",
                                "bg-secondary/20": color === "secondary",
                                "bg-yellow/20": color === "yellow",
                                "bg-yellowTwo/20": color === "yellowTwo",
                                "bg-skyTwo/20": color === "skyTwo",
                                "bg-purple/20": color === "purple",
                                "bg-purpleTwo/20": color === "purpleTwo",
                                "bg-secondaryTwo/20": color === "secondaryTwo",

                                "float-right": index % 2 !== 0,
                                "float-left": index % 2 === 0
                            })}>

                            </div>
                            <div className={cn("static md:absolute md:top-1/2 md:-translate-y-1/2", {
                                "md:left-[50px] md:translate-x-[50px]": index % 2 !== 0,
                                "md:right-[50px] md:-translate-x-[50px]": index % 2 === 0,
                            })}>
                                <div className="w-full md:w-[250px] h-auto md:h-[250px]">
                                    <Image
                                        src={item.images.src}
                                        alt={item.images.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CyberInvestigation;