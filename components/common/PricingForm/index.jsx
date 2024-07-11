
import Background from "@/asset/personal-cybersecurity/explore/pricing/Pricing Form Section Image.webp"

const PricingForm = () => {
    return (
        <section className=" w-[95%] md:w-[1200px] md:h-[750px] h-fit mx-auto my-2 flex items-center justify-center" style={{
            backgroundImage: `url(${Background.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>

            <div className="md:w-[1040px] my-4 p-4 md:h-[680px] z-20 text-white bg-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-[40px]">
                <div className="md:w-[550px]">
                    <p className="md:p-[40px] p-[15px]  border-t-[8px] md:border-t-0 md:border-l-[10px] border-secondary text-[18px] text-center md:text-left md:text-[36px] font-bold">
                        SCHEDULE A FREE CONSULTATION AT YOUR PREFERRED DATE AND TIME
                    </p>
                </div>
                <div>
                    {/* Katra Form will be here   */}
                    <p>katra katra</p>
                </div>
            </div>
        </section>
    );
};

export default PricingForm;