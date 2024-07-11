import cn from "@/utils/helper/cn";

const MiniSubtitle = ({children: subtitleText,className}) => (
    <h4 className={cn('text-lightBGText text-base md:text-[18px] font-medium',className)}>{subtitleText}</h4>
);

export default MiniSubtitle;