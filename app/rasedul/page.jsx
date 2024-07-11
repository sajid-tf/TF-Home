
import { CyberSecurityPartners, Faq, FourVectorHero, MissionVision, Performance, ProvideServices } from "@/components/common";
import CTABanner from "@/components/common/CTABanner";
import RegionalOffice from "@/components/common/RegionalOffice/RegionalOffice";
import Benefits from "@/components/dynamicSections/Benefits";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import ComplianceConsulting from "@/components/dynamicSections/ComplianceConsulting";
import CyberInvestigation from "@/components/dynamicSections/CyberInvestigation";
import IsoCertification from "@/components/dynamicSections/IsoCertification";
import OfferServices from "@/components/dynamicSections/OfferServices";
import PCICompliance from "@/components/dynamicSections/PCICompliance";
import ProtectionBanner from "@/components/dynamicSections/ProtectionBanner";
import ServiceProvideV4 from "@/components/dynamicSections/WeProvideService/ServiceProvideV4";
import ServiceProvideV5 from "@/components/dynamicSections/WeProvideService/ServiceProvideV5";
import WeProvideService from "@/components/dynamicSections/WeProvideService/WeProvideService";
import WhiteGloveProtection from "@/components/dynamicSections/WhiteGloveProtection";
import MissionVisionData from "@/utils/mock/MissionVisionData";

import { OfferServicesData, benefitsData, complianceConsultingData, controlDigitalSecurityData, cyberInvestigationData, faqData, independentCybersecurityPartners, isoCertificationData, pciComplianceData, protectionBannerData, provideServicesData, regionalOfficeData, serviceProvideV4Data, serviceProvideV5Data, tfIncidentResponseData, weProvideServiceData, whiteGloveProtectionData } from '@/utils/mock/dummyData';

const page = () => {
    return (
        <div className=''>
            <FourVectorHero
                variants='primary'
            />
            <h1 className="mb-5 text-center">Mission and Vision</h1>
            <MissionVision data={MissionVisionData} />
            <h1 className="mb-5 text-center">  test International regional office</h1>
            <RegionalOffice color="secondary" data={regionalOfficeData} />
            <h1 className="mb-5 text-center">Performance</h1>
            <Performance />
            <h1 className="mb-5 text-center">Faq</h1>
            <Faq questions={faqData} />
            <h1 className="mb-5 text-center">Blog</h1>
            <BlogSlider />
            <h1 className="mb-5 text-center">Service</h1>
            <ProvideServices renderData={provideServicesData} color="yellow" />
            <h1 className="mb-5 text-center"></h1>
            <CyberSecurityPartners renderData={independentCybersecurityPartners} color="sky" />
            <h1 className="mb-5 text-center">Benefits</h1>
            <Benefits color="purpleTwo" renderData={benefitsData} />
            <h1 className="mb-5 text-center"></h1>
            <WeProvideService color="sky" renderData={weProvideServiceData} />
            <PCICompliance color="yellow" data={pciComplianceData} />
            <div className="w-full flex justify-center">
                <ComplianceConsulting color="redThree" data={complianceConsultingData} />
            </div>
            <div className="mt-5">
                <IsoCertification color="yellow" data={isoCertificationData} />
            </div>
            <div className="mt-5 flex flex-col gap-20">
                <ServiceProvideV4 color="redThree" data={serviceProvideV4Data.smbSolutions} />
                <ServiceProvideV4 color="purple" reverse data={serviceProvideV4Data.enterpriseSolutions} />
            </div>
            <div className="mt-5 flex flex-col gap-10">
                <ServiceProvideV5 color="primary" data={serviceProvideV5Data.cloudSecurity} />
                <ServiceProvideV5 color="redThree" data={serviceProvideV5Data.bugBountyService} reverse />
            </div>
            <div className="my-10"></div>
            <h1 className="text-center">Services We Offer</h1>
            <OfferServices renderData={OfferServicesData} color="sky" />
            <div className="my-10">
                <CyberInvestigation color="yellowTwo" data={cyberInvestigationData} />
            </div>
            <div className="my-10">
                <CyberInvestigation color="redThree" data={tfIncidentResponseData} />
            </div>
            <div className="my-10">
                <WhiteGloveProtection color="redThree" data={whiteGloveProtectionData} />
            </div>
            <div className="my-10">
                <ProtectionBanner color="secondary" data={protectionBannerData} />
            </div>
            <div>
                <CTABanner color="primary" data={controlDigitalSecurityData} />
            </div>
        </div>
    );
};

export default page;