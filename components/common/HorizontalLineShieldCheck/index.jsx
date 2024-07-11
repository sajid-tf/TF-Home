import cn from "@/utils/helper/cn";
import { ShieldCHeckIcon } from "@/utils/svg/SVGImg";
import Divider from "../Divider";


const HorizontalLineShieldCheck = ({color="secondary", className}) => {
    return (
        <div>
            <Divider horizontal color={color} className="w-full h-[2px]"/>
              <div
                className={cn(
                    "bg-secondary w-[78px] h-[78px] rounded-full flex items-center justify-center absolute -translate-y-[39px]",
                    className,
                    {
                    "bg-secondary": color === "secondary",
                    "bg-redThree": color === "redThree",
                    "bg-primary": color === "primary",
                    "bg-sky": color === "sky",
                    "bg-yellow": color === "yellow",
                    "bg-purpleTwo": color === "purpleTwo",
                    }
                )}
                >
                <ShieldCHeckIcon className="w-[50px] h-[50px]"/>
             </div>
        </div>  
    );
};

export default HorizontalLineShieldCheck;