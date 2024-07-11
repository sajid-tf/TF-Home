import Image from "next/image";
import ceoImg from '@/assets/story/Rabiul-Islam.png'
const index = () => {

    return (
        <section>
            {/* Desktop View */}
            <div className="hidden lg:flex items-center justify-between">
                <div className="w-[30%]">
                    <h3 className="text-primary font-bold text-4xl">Our Story</h3>
                    <div className="flex items-center bg-white">
                    <div className="bg-secondary h-[224px] w-[102px] shrink-0"></div>
                        <p className="p-10 text-lightBGBodyText text-justify text-base font-normal">
                            The present CEO & MD Mr. Rabiul Islam has been globally consulting as a cybersecurity specialist since 2008. He never thought to start his career journey in the cybersecurity field,
                            but having an immense amount of passion in cybersecurity,
                            he quickly became a skilled cybersecurity professional.
                        </p>
                    </div>
                </div>
                <div className="w-[70%]"> 
                <Image src={ceoImg} alt="CEO" height={742} width={742}/> 
                </div>
            </div>

            {/* Mobile and tablet View */}
            <div className="flex flex-col lg:hidden">
               <Image src={ceoImg} alt="CEO" height={200} width={360}/> 
               <div className="p-3 flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <div className="bg-secondary h-[20px] w-[12px] shrink-0"></div>
                        <h3 className="text-primary font-bold text-xl">Our Story</h3>
                    </div>
                    <p className="text-lightBGBodyText text-justify text-sm font-normal">
                                The present CEO & MD Mr. Rabiul Islam has been globally consulting as a cybersecurity specialist since 2008. He never thought to start his career journey in the cybersecurity field,
                                but having an immense amount of passion in cybersecurity,
                                he quickly became a skilled cybersecurity professional.
                    </p>
               </div>
            </div>
        </section>
    );
};

export default index;