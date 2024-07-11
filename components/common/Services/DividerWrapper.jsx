import cn from "@/utils/helper/cn";

const DividerWrapper = ({ children,color,icon }) => (
  <div className="relative w-full md:w-20 my-10 md:my-0">
    {children}
    <div className={cn("flex items-center justify-center absolute -top-10 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2  text-white rounded-full size-20",{
     "bg-redThree" : color === "redThree",
     "bg-sky" : color === "sky",
     "bg-primary" : color === "primary",
     "bg-secondary" : color === "secondary",
     "bg-yellow" : color === "yellow",
     "bg-skyTwo" : color === "skyTwo",
     "bg-purpleTwo": color === "purpleTwo",
    })} >
      <span className='text-2xl font-bold '>{icon ? icon : "Vs"}</span>
    </div>
  </div>
);

export default DividerWrapper;