import cn from '@/utils/helper/cn';

const Title = ({ children: titleText, className }) => (
  <h3 className={cn("text-center text-lightBGText text-2xl md:text-4xl font-bold capitalize", className)}>{titleText}</h3>
);

export default Title;