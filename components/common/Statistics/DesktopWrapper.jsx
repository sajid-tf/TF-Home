
const DesktopWrapper = ({roatation,title, children}) => {
    return (
        <div style={{transform: `rotate(${roatation}deg)`}}>
         <h4 className={`text-center text-primary font-bold text-2xl max-w-[80%]`} style={{transform: `rotate(${roatation}deg)`}}>{title}</h4>
        <div className="w-3 h-3 bg-secondary rounded-full translate-x-[95px]"></div>
        <div className="h-[100px] w-[2px] bg-secondary translate-x-[100px]"></div>
        <div className="w-[225px] h-[225px] border-secondary border-[2px] rounded-full relative flex items-center justify-center">
            <svg className="absolute top-1/2 -left-[14px]" xmlns="http://www.w3.org/2000/svg" width="250" height="126" viewBox="0 0 250 126" fill="none">
                <path d="M250 0.560547C250 16.9758 246.767 33.2303 240.485 48.396C234.203 63.5617 224.996 77.3416 213.388 88.9489C201.781 100.556 188.001 109.764 172.835 116.045C157.67 122.327 141.415 125.561 125 125.561C108.585 125.561 92.3303 122.327 77.1646 116.045C61.9989 109.764 48.219 100.556 36.6116 88.9489C25.0043 77.3416 15.7969 63.5617 9.51505 48.396C3.23322 33.2303 -1.43506e-06 16.9758 0 0.560539L125 0.560547H250Z" fill="#5BBC2E" />
            </svg>
            <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                <div className="z-10 h-[150px] w-[150px] rounded-full bg-primary flex items-center justify-center">
                    <h2 className="px-5 py-12 text-5xl text-white font-bold " style={{transform: `rotate(${roatation}deg)`}}>{children}</h2>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DesktopWrapper;