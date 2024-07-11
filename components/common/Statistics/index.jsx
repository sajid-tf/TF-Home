
import DesktopWrapper from "./DesktopWrapper";
import stateBG from "@/assets/statistics/bg.png"
import MobileWrapper from "./MoblieWrapper";
const index = () => {
    return (
        <section className="max-w-[1045px] mx-auto">
            <h3 className="text-xl md:text-2xl font-bold md:font-normal text-center text-primary mb-10">WE HAVE PROVIDED CYBERSECURITY SERVICES TO OVER 121+ COUNTRIES</h3>
            {/* desktop View*/}
            <div className="hidden lg:flex  gap-4 items-center justify-center"
                style={{
                    backgroundImage: `url(${stateBG.src})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >

                <DesktopWrapper roatation="0" title="COMPANIES CHOSE US">3400+</DesktopWrapper>
                <DesktopWrapper roatation="180" title="INDIVIDUAL CLIENTS">14k+ </DesktopWrapper>
                <DesktopWrapper roatation="0" title="SATISFIED CLIENTS">99.9%</DesktopWrapper>
                <DesktopWrapper roatation="180" title="SPECIALIST">300+</DesktopWrapper>
            </div>

            {/* Mobile and Tablet view  */}

            <div className="flex flex-col lg:hidden gap-4">
                <MobileWrapper roatation="0" title="COMPANIES CHOSE US">3400</MobileWrapper>
                <MobileWrapper roatation="180" title="INDIVIDUAL CLIENTS">14k+</MobileWrapper>
                <MobileWrapper roatation="0" title="SATISFIED CLIENTS">99.9%</MobileWrapper>
                <MobileWrapper roatation="180" title="SPECIALIST">300+</MobileWrapper>
            </div>
        </section>
    );
};

export default index;