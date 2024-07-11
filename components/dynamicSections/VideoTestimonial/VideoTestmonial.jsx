
import Subtitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import Image from "next/image";
import CSIImg from '@/assets/assessments/CSI.png';
const VideoTestmonial = () => {
    return (
        <section className="max-w-[1200px] mx-auto md:border-l-[30px] border-secondary flex flex-col-reverse md:flex-row ">
           <div className="flex-1 flex flex-row md:flex-col gap-2 md:gap-[10px] md:p-10 p-5 md:items-start items-center">
            <Image src={CSIImg} alt="josep ke"  height={74} width={100} className=""/>
            <div className="flex flex-col gap-1.5 md:gap-[10px]">
                <Title className="text-left">Joseph Ke </Title>
                <Subtitle className="text-left">General Manager, CSI Chemical Co. Ltd.</Subtitle>
            </div>
           </div>
           <div className="flex-1">
            <video controls>
               <source src="/images/video-testimonial.mov" alt="Video of testimonial"/>
            </video>
           </div>
        </section>
    )
}
export default VideoTestmonial