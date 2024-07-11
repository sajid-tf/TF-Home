import DividerWrapper from "@/components/common/Services/DividerWrapper";
import Wrapper from "@/components/common/Services/Service/Wrapper";
import Divider from "@/components/common/Divider";
import Image from "next/image";

const Benefits = ({ color, renderData, ImageOne, ImageTwo, ImageAltOne, ImageAltTwo }) => {
    return (
        <section className='max-w-[1200px] mx-4 md:mx-auto'>
            <h3 className='text-center text-lightBGText text-2xl md:text-4xl font-bold mb-5 capitalize'>{renderData.title}</h3>
            <p className="mb-[10px] text-center text-sm md:text-base font-normal ">{renderData.subTitle}</p>
            <div className="flex flex-col md:flex-row">
                <div className='flex-1 flex flex-col gap-3 md:gap-9 px-2 py-3 md:py-10 md:px-10'>
                    {ImageOne && <div className="w-full h-fit lg:w-[480px] lg:h-[250px]">
                        <Image src={ImageOne} alt={ImageAltOne ? ImageAltOne : "company"} className="w-full h-full" />
                    </div>}
                    <h4 className='text-xl md:text-2xl font-bold  text-start'>{renderData.company.header}</h4>
                    <div className='flex flex-col gap-3 md:gap-[22px]'>
                        {renderData.company.steps.map((option, index) => (
                            <Wrapper key={index} color={color}>
                                {option}
                            </Wrapper>
                        ))}
                    </div>
                </div>
                <DividerWrapper color={color} icon={renderData.icon}>
                    <Divider vertical color={color} className="w-[2px] hidden md:block absolute left-1/2 -translate-x-1/2" />
                    <Divider horizontal color={color} className="w-full h-[2px] md:hidden absolute left-1/2 -translate-x-1/2" />
                </DividerWrapper>
                <div className='flex-1 flex flex-col gap-3 md:gap-9 px-2 py-3 md:py-10 md:px-10'>
                    {ImageTwo && <div className="w-full h-fit lg:w-[480px] lg:h-[250px]">
                        <Image src={ImageTwo} alt={ImageAltTwo ? ImageAltTwo : "Researcher"} className="w-full h-full" />
                    </div>}
                    <h4 className='text-xl md:text-2xl font-bold  text-start'>{renderData.hackers.header}</h4>
                    <div className='flex flex-col gap-3 md:gap-[22px]'>
                        {renderData.hackers.steps.map((option, index) => (
                            <Wrapper key={index} color={color}>
                                {option}
                            </Wrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;