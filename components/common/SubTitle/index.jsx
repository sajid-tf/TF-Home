import cn from "@/utils/helper/cn";

const Subtitle = ({children: subtitleText,className}) => (
    <h4 className={cn('text-lightBGText text-xl md:text-2xl font-bold',className)}>{subtitleText}</h4>
);

export default Subtitle;