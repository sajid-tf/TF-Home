import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { cyberThreatIntelligenceAssessmentData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import WhatWeAccess from "@/components/dynamicSections/WhatWeAccess/WhatWeAccess";
import { cyberThreatIntelligenceAccessData } from "@/utils/mock/WhatWeAccessData/WhatWeAccessData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { cyber_intelligence_whyChooseFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import WeManageCard from '@/components/common/WeManageCard/WeManageCard'
import { expertAreas } from '@/utils/mock/WeManageCardData/WeManageCardData'
import hero from "@/asset/business-cybersecurity/cyber-threat-intelligence/hero.webp";
import Link from "next/link";
import { CyberThreatIntelligence } from "@/utils/images";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import ctiCTA from "@/asset/business-cybersecurity/cyber-threat-intelligence/cti-cta.webp";
import ctiWhyChoose from "@/asset/business-cybersecurity/cyber-threat-intelligence/cit-why-choose.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Cyber Threat Intelligence Services | Stay Ahead | TechForing",
  description: "Equip yourself with the latest knowledge and protect your business from cyber threats with our expert cyber threat intelligence services. Contact us today!",
  keywords: "cyber threat intelligence (threat intelligence)",
  canonical: "https://techforing.com/cyber-threat-intelligence/",
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
          <span className='text-redThree'>CYBER THREAT</span> <br className='hidden lg:visible' />
          <span>INTELLIGENCE</span>
        </h1>}
        description={'Upgrade your security operations with TechForing’s advanced cyber threat intelligence services and protect your business against evolving threats!'}
        btnTxt={'Stay Ahead of Cyber Threats'}
        variants='red'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='red'
      />
      <AssessmentServiceSection
        title={"TECHFORING CYBER <br/> THREAT INTELLIGENCE <br/> SERVICES"}
        paragraph={"As one of the market leaders in threat intelligence services, we strengthen your cyber security program with our expert security consulting services. We focus on different factors that are unique to your organization, such as the vulnerabilities in your security infrastructure, your organization's background, and the threat actors targeting you."}
        variant="redThree"
        position="bottom"
        image={CyberThreatIntelligence?.service}
        alt={"TECHFORING CYBER THREAT INTELLIGENCE SERVICES"}
      />

      <WhatWeAccess
        headline={"Cyber Threat <br/> Intelligence Components We Offer"}
        subHeadline={"Cyber threat intelligence services are a collection of several individual services. <br/> These services include:"}
        renderedData={cyberThreatIntelligenceAccessData}
        noOfGrid={3}
        isBigWidthCard={true}
      />

      <VulnerabilityAssessmentSection
        title={"How We Stay Ahead Of Risks"}
        renderedData={cyberThreatIntelligenceAssessmentData}
        variants='red'
      />
      <WeManageCard
        title={"Our Areas Of Expertise"}
        renderedData={expertAreas}
        variant="redThree"
      />
      <WhyChooseSection
        headline={"Why Choose TechForing for <br/> Your Cyber Threat Intelligence Needs?"}
        responsiveImgURL={ctiWhyChoose}
        renderedData={cyber_intelligence_whyChooseFAQData}
        variant="redThree"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='redThree' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Upgrade Your Threat Intelligence
            </Link>
          </Button>
        }
        variant="red"
        img={ctiCTA}
        className={{ borderColor: 'border-redThree' }}
        title="Is Your Organization Prepared for the Next Cyber Attack?"
        subTitle="Don't wait until it's too late. Contact TechForing today and fortify your defenses against cyber threats."
      />
      <TestimonialSection variant="redThree" data={bcsTestimonialData} />
      <BlogSlider color="redThree" />
    </section>
  )
}

export default page