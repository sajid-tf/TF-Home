
const CircleWrapper = ({children}) => {
    return (
        <div className="h-[234px] w-[234px] bg-secondaryLightBG shadow-lg rounded-full flex items-center justify-center">
        <div className={`h-[220px] w-[220px] border-[6px] border-secondary px-4 rounded-full flex flex-col items-center text-center gap-[10px] justify-center`}>
           {children}
        </div>
        </div>
    );
};

export default CircleWrapper;