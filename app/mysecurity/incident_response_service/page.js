import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png'
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection"
import { mySecurity_incident_response_service_VulnerabilityAssessmentData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData"
import CyberInvestigation from "@/components/dynamicSections/CyberInvestigation"
import { tfIncidentResponseData_ms_IRC } from "@/utils/mock/dummyData"
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { WhyChooseFAQData_MS_IRC } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import heroIncidentImg from "@/asset/personal-cybersecurity/incident-response/hero.webp";
import Link from "next/link"
import { incidentResponse } from "@/utils/images"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import whyChooseImg from "@/asset/personal-cybersecurity/incident-response/Ir2_WhyChoose.webp";
import ctaImg from "@/asset/personal-cybersecurity/incident-response/Ir2_CTA.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Incident Response Services for individuals | TechForing",
  description: "Secure your personal cybersecurity and respond to critical cybersecurity incidents with our Incident Response Services. Contact us today.",
  keywords: "incident response service (incident response services, cyber incident response, incident response, best incident response service provider)",
  canonical: "https://techforing.com/mysecurity/incident_response_service/",
};


const page = () => {
  return (
    <div className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <FourVectorHero
        bgImg={heroIncidentImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          CYBER INCIDENT RESPONSE SERVICE
        </h1>}
        description={"Facing a cyberattack? Take immediate action! TechForing’s incident response experts contain the damage, restore your systems, and fortify your defenses for the future."}
        btnTxt={"Get Immediate Help]"}
        variants='yellowTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellowTwo'
      />
      <AssessmentServiceSection
        title={"Incident Response <br/> Service - Don't Face <br/> Cyber Threats Alone"}
        paragraph="Facing a cyber incident? We’re here for you! Whether you’re experiencing a data breach, a malware infection, or a ransomware attack, we have the experience and proven methods to respond swiftly and minimize the damage."
        image={incidentResponse?.introImg}
        alt={"Incident Response Service - Don't Face Cyber Threats Alone"}
        position='bottom'
        variant="yellowTwo"
      />
      <VulnerabilityAssessmentSection
        title={"How Our Incident Response Service Works"}
        renderedData={mySecurity_incident_response_service_VulnerabilityAssessmentData}
        desc={'Our personal incident response plan consists of 5 distinct steps. These steps are defined to help you deal with cyber risk/cyberattacks such as cyber breaches or security breaches. Our steps are as follows:'}
        variants='yellowTwo'
      />
      <CyberInvestigation color="yellowTwo" data={tfIncidentResponseData_ms_IRC} />
      <WhyChooseSection
        headline={"Why Choose TechForing as Your Incident Response Partner?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseFAQData_MS_IRC}
        variant="yellowTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellowTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Restore My Security
            </Link>
          </Button>
        }
        img={ctaImg}
        className={{ borderColor: 'border-redThree' }}
        title="Regain Control With Instant Cyber Incident Responses!"
        subTitle="From hack recovery to malware removal, trust our expert team to swiftly respond and restore your personal cybersecurity."
        variant="yellow"
      />
      <TestimonialSection
        variant="yellowTwo"
        data={pcsTestimonialData}
      />
      <BlogSlider color="yellow" />
    </div>
  )
}

export default page