import cn from "@/utils/helper/cn";

const Content = ({ children: content, className }) => (
  <p className={cn("text-sm md:text-base text-lightBGBodyText", className)} dangerouslySetInnerHTML={{ __html: content || '' }}></p>
);
export default Content;