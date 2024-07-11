
const MobileWrapper = ({roatation,title, children}) => {
    return (
        <div style={{transform: `rotate(${roatation}deg)`}} className="flex items-center gap-10">
          <div className="flex">
            <div className="w-[126px] h-[126px] border-secondary border-[2px] rounded-full relative flex items-center justify-center">
                <svg className="absolute -left-2" xmlns="http://www.w3.org/2000/svg" width="71" height="140" viewBox="0 0 71 140" fill="none">
                    <path d="M70.9609 140C61.7684 140 52.6659 138.189 44.1731 134.672C35.6803 131.154 27.9636 125.998 21.4635 119.497C14.9634 112.997 9.8072 105.281 6.28936 96.7878C2.77154 88.295 0.960934 79.1925 0.960934 70C0.960935 60.8075 2.77154 51.7049 6.28937 43.2121C9.8072 34.7194 14.9634 27.0026 21.4635 20.5025C27.9636 14.0024 35.6803 8.84625 44.1731 5.32843C52.6659 1.8106 61.7684 -4.26525e-06 70.9609 -3.0598e-06L70.9609 70L70.9609 140Z" fill="#5BBC2E"/>
                </svg>
                <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                    <div className="z-10 h-[97px] w-[97px] rounded-full bg-primary flex items-center justify-center">
                        <h2 className="px-4 py-8 text-2xl text-white font-bold" style={{transform: `rotate(${roatation}deg)`}}>{children}</h2>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
            <div className="h-[2px] w-[25px] bg-secondary">
            </div>
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </div>  
           </div> 
           <h4 className={`text-center text-primary font-bold text-xl`} style={{transform: `rotate(${roatation}deg)`}}>{title}</h4>
        </div>
    );
};

export default MobileWrapper;