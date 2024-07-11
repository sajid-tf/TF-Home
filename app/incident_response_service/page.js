import { Button, FourVectorHero, Performance, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { incidentResponseAssessmentData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { incidentResponseDealWithData } from "@/utils/mock/WeDealWithData/WeDealWithData";
import { whyChooseFAQforIncidentResponsePage } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import hero from "@/asset/business-cybersecurity/incident-response/hero.webp";
import Link from "next/link";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import assessmentImg from "@/asset/business-cybersecurity/incident-response/IR_Assessment.webp";
import whyChooseImg from "@/asset/business-cybersecurity/incident-response/IR_WhyChoose.webp";
import ctaImg from '@/asset/business-cybersecurity/incident-response/secure-organization.webp';
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Incident Response Services | Breach Management | TechForing",
  description: "Swiftly respond to system breaches with our cyber incident response services and get actionable steps to mitigate future threats starting today!",
  keywords: "cyber incident response (incident response, cyber incident response plan, cyber incident response service)",
  canonical: "https://techforing.com/incident_response_service/",
};

const page = () => {
  return (
    <section className="flex flex-col md:gap-24 gap-10 md:mb-24 mb-10">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <FourVectorHero
        bgImg={hero?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span className='text-yellowTwo'>INCIDENT </span> <br className='hidden lg:visible' />
          <span>RESPONSE</span> <span>SERVICES</span>
        </h1>}
        description={'When a cyberattack hits, every second counts. TechForing\'s expert Incident Response services are on standby to help you regain control, mitigate damage, and restore operations swiftly.'}
        btnTxt={'Recover Your Business'}
        variants='yellow'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellow'
      />
      <AssessmentServiceSection
        title={"Regain Control & <br/>Mitigate Future Cyber Risk<br/> With Zero Stress"}
        paragraph={"Complex and unpredictable cyber threats are emerging daily, and having an active incident response team can help you mitigate cyber security incidents before it's too late. If your organization is facing an active threat like a Hack incident or Ransomware attack, TechForing's experienced team Can help mitigate those risks in under 60 minutes."}
        variant='yellow'
        image={assessmentImg}
        alt={"Regain Control"}
        position='bottom'
      />
      <VulnerabilityAssessmentSection
        title={"Our Steps"}
        desc={"A robust incident response plan follows 6 distinct steps. These steps help an organization understand and deal with cyber incidents like cyber-breach or security breaches. These steps are interconnected and must be followed in sequence:"}
        renderedData={incidentResponseAssessmentData}
        variants='yellow'
      />
      <section>
        <WeDealWithSection
          title={"TechForing Incident Response Services"}
          subTitle={'TechForing is a leading provider of incident response services. Our experts will swiftly neutralize cyber threats like ransomware attacks, business email compromises, data breaches, etc. We will identify any cyber breach and take necessary actions to recover the system. Our incident response services include:'}
          renderedData={incidentResponseDealWithData}
          variant='tertiary'
        />
      </section>
      <Performance data={performanceData} />
      <WhyChooseSection
        headline={"Why Trust TechForing <br/> as Your Incident Response Partner?"}
        responsiveImgURL={whyChooseImg}
        renderedData={whyChooseFAQforIncidentResponsePage}
        variant="yellow"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellow' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started
            </Link>
          </Button>
        }
        variant="yellow"
        img={ctaImg}
        className={{ borderColor: 'border-yellowTwo' }}
        title="Protect Your Business with Cyber Incident Response!"
        subTitle="Combat cyber threats head-on with our comprehensive incident response services, including hack recovery, malware removal, forensic investigation, data breach analysis, and ransomware removal."
      />
      <TestimonialSection variant="yellowTwo" data={bcsTestimonialData} />
      <BlogSlider color="yellow" />
    </section>
  )
}

export default page

// Example data
const performanceData = [
  {
    value: `<span class='text-yellowTwo text-xl md:text-5xl'>$</span>3.9<span class='text-yellowTwo text-xl md:text-5xl'>m</span>`,
    text: 'Data breaches on SMBs all over the world',
  },
  {
    value: `75<span class='text-yellowTwo text-xl md:text-5xl'>%</span>`,
    text: 'organizations experienced malware activity in 2022',
  },
  {
    value: `43<span class='text-yellowTwo text-xl md:text-5xl'>%</span>`,
    text: 'Cyber attacks target small businesses',
  },
];