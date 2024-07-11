
import Content from "@/components/common/Content";
import Subtitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import cn from "@/utils/helper/cn";
import { BottomArrowIcon } from "@/utils/svg/SVGImg";
import React from "react";

const HowWeApproach = ({ color, data, col, reverse, hasArrow }) => {
    // Function to generate dynamic class names
    const generateTextColor = (color) => {
        return cn("", {
            "text-primary": color === "primary",
            "text-redThree": color === "redThree",
            "text-sky": color === "sky",
            "text-yellow": color === "yellow",
            "text-secondary": color === "secondary",
            "text-skyTwo": color === "skyTwo",
            "text-purple": color === "purple",
            "text-purpleTwo": color === "purpleTwo",
            "text-secondaryTwo": color === "secondaryTwo",
            "text-green": color === "green",
            "text-yellowTwo": color === "yellowTwo",
        });
    };

    return (
        <section className="w-full md:max-w-[1200px] md:mx-auto px-3">
            <Title className="mb-5">{data.header}</Title>
            <Content className="mb-5 capitalize text-lightBGText text-center">{data.subHeader}</Content>
            <div className={cn('grid pt-4 md:pt-[72px]', {
                'grid-cols-1 gap-10 md:gap-[60px] ': col === 1,
                'grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]': col === 2,
                'grid-cols-3 gap-2': col === 3
            })}>
                {data.contents.map((item, index) => (
                    <div key={index} className={cn("flex flex-col relative md:flex-row gap-3", {
                        "md:flex-row-reverse gap-3": index % 2 !== 0 && reverse,
                    })}>
                        <div className="md:w-[160px] w-[80px] m-auto">
                            <div className={cn("w-[90px] h-[90px] md:w-[135px] md:h-[135px] flex items-center justify-center", {
                                "bg-redThree/20": color === "redThree",
                                "bg-primary/20": color === "primary",
                                "bg-sky/20": color === "sky",
                                "bg-secondary/20": color === "secondary",
                                "bg-yellow/20": color === "yellow",
                                "bg-skyTwo/20": color === "skyTwo",
                                "bg-purple/20": color === "purple",
                                "bg-purpleTwo/20": color === "purpleTwo",
                                "bg-secondaryTwo/20": color === "secondaryTwo",
                                "bg-green/20": color === "green",
                                "bg-yellowTwo/20": color === "yellowTwo",
                            })}>
                                {React.cloneElement(item.icon, {
                                    className: generateTextColor(color)
                                })}
                            </div>
                        </div>
                        <div className={cn("py-2 px-4 md:border-l-4 ", {
                            "md:pl-10 md:pr-1": col = 2,
                            "md:pr-[140px]": index % 2 === 0 && reverse,
                            "md:border-l-0 md:border-r-4 md:pl-[140px] md:pr-10 ": index % 2 !== 0 && reverse,
                            'border-primary': color === 'primary',
                            'border-redThree': color === 'redThree',
                            'border-sky': color === 'sky',
                            'border-yellow': color === 'yellow',
                            'border-secondary': color === 'secondary',
                            'border-secondaryTwo': color === 'secondaryTwo',
                            'border-green': color === 'green',
                            'border-yellowTwo': color === 'yellowTwo',
                        })}>
                            <Subtitle className={cn("mb-2 text-left", {
                                "text-left md:text-right": index % 2 !== 0 && reverse,
                            })}>{item.title}</Subtitle>
                            <Content className="mb-2 text-justify">
                                {item.desc}
                            </Content>
                            <div className="grid grid-cols-1 gap-2 mb-4">
                                {
                                    item?.lists?.map((list, index) => (
                                        <p key={index} className={cn("border-l-4 pl-2 text-lightBGBodyText text-base font-normal leading-6", {
                                            'border-primary': color === 'primary',
                                            'border-redThree': color === 'redThree',
                                            'border-sky': color === 'sky',
                                            'border-yellow': color === 'yellow',
                                            'border-secondary': color === 'secondary',
                                            'border-secondaryTwo': color === 'secondaryTwo',
                                            'border-green': color === 'green',
                                            'border-yellowTwo': color === 'yellowTwo',
                                        })}>{list}</p>
                                    ))
                                }
                            </div>
                            {
                                hasArrow && (
                                    <BottomArrowIcon
                                        className={cn(
                                            "absolute -translate-y-1/2 md:mt-10",
                                            generateTextColor(color),
                                            {
                                                "left-[45%] md:left-[130px]": reverse && index % 2 === 0,
                                                "right-[45%] md:right-[130px]": reverse && index % 2 !== 0,
                                            }
                                        )}
                                    />
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowWeApproach;