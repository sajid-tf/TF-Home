import cn from '@/utils/helper/cn';
import { ShieldCHeckIcon } from '@/utils/svg/SVGImg';
import React from 'react';

const SheildCheckline = ({color, icon}) => {
    return (
            <div
                className={cn(
                " w-[92px] h-[92px] rounded-full flex items-center justify-center",
                {
                    "bg-secondary/20": color === "secondary",
                    "bg-redThree/20": color === "redThree",
                    "bg-primary/20": color === "primary",
                    "bg-sky/20": color === "sky",
                    "bg-yellow/20": color === "yellow",
                    "bg-purple/20": color === "purple",
                    "bg-purpleTwo/20": color === "purpleTwo",
                }
                )}
            >
                <div
                className={cn(
                    "w-[78px] h-[78px] rounded-full flex items-center justify-center",
                    {
                    "bg-secondary": color === "secondary",
                    "bg-redThree": color === "redThree",
                    "bg-primary": color === "primary",
                    "bg-sky": color === "sky",
                    "bg-yellow": color === "yellow",
                    "bg-purple": color === "purple",
                    "bg-purpleTwo": color === "purpleTwo",
                    }
                )}
                > 
                 {
                    icon ? icon : <ShieldCHeckIcon className="text-white w-[50px] h-[50px]"/>
                 }
                </div>
            </div>
    );
};

export default SheildCheckline;