
import Goal from "@/components/common/MissionVision/Goal";

const MissionVision = ({data}) => {
    return (
        <section className="max-w-[1200px] mx-4 md:mx-auto flex flex-col gap-y-3 md:flex-row items-center">
            {
                data.map((item,index) => (
                    <Goal key={index} icon={item.icon} title={item.title} desc={item.desc} />
                ))
            }
        </section> 
    ); 
};

export default MissionVision;