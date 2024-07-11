import { Button, FourVectorHero, SecureOrganization, Services } from "@/components/common"
import AssessmentProcess from "@/components/dynamicSections/AssessmentProcess/AssessmentProcess"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import { ServicesCardData } from "@/utils/mock/Services/Services"
import { WhyChooseFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book.png';
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import Organization from "@/components/HomePage/services/trustedOrganization/Organization"
import { organizationData } from "@/utils/mock/dummyData"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import WhatWeAccess from '@/components/dynamicSections/WhatWeAccess/WhatWeAccess';
import { WhatWeAccessData } from '@/utils/mock/WhatWeAccessData/WhatWeAccessData';
import Link from "next/link"
import { cybersecurityRiskAssessment } from "@/utils/images"
import hero from "@/asset/business-cybersecurity/risk-assessment/hero.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import raCTAImg from "@/asset/business-cybersecurity/risk-assessment/ra-cta.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Cyber Security Risk Assessment Services for Business | TechForing",
  description: "Assess your system's resilience against cyberattacks to protect your business with Cybersecurity Risk Assessment Services. Visit now to learn more.",
  keywords: "cyber security risk assessment",
  canonical: "https://techforing.com/cybersecurity_risk_assessment/",
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
        bgImg={hero?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary"> Risk <br className='hidden lg:visible' /> <span className="text-redThree">Assessment</span>  Services</h1>}
        description={"Online business operations face constant cyber attacks worldwide. Risk assessment services can help these organizations to improve their security posture and avoid cyber security breaches"}
        btnTxt={"Perform A Risk Assessment Right Now"}
        variants='red'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='red'
      />
      <AssessmentServiceSection
        title={"Assess Your Risk Scores <br/> With TechForing <br/> Risk Assessment Services"}
        paragraph={"Regular risk assessments will give you a clear picture of your security status and how well-prepared you are against potential risks. Risk assessments can also help your organization upgrade its information security. Otherwise, continued use of a compromised system can lead to security breaches, damaging the reputation of your company."}
        variant="redThree"
        position="bottom"
        image={cybersecurityRiskAssessment.benefitBuisness}
        alt={"Risk Assessment Services"}
      />
      <WhatWeAccess
        headline={"Our Area of Expertise"}
        renderedData={WhatWeAccessData}
      />
      <AssessmentProcess />
      <Services
        servicesData={ServicesCardData}
        headline={"Elevate Your Cybersecurity With <br/> TechForing Risk Assessment Services"}
        color='redThree' />
      <Organization
        isTitle={false}
        renderedData={organizationData}
        BGColor='light'
      />
      <WhyChooseSection
        headline={"Why Trust TechForing Risk Assessment Services?"}
        responsiveImgURL={raCTAImg}
        renderedData={WhyChooseFAQData}
        variant="redThree"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='redThree' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Secure Your Business
            </Link>
          </Button>
        }
        variant="red"
        img={cybersecurityRiskAssessment.secureOrganization}
        title="Risk-Free Your Business Operation With Proactive Cybersecurity"
        subTitle="Don’t wait for a breach, proactively assess and mitigate vulnerabilities with a comprehensive risk assessment today!"
      />
      <TestimonialSection variant="redThree" data={bcsTestimonialData} />
      <BlogSlider color="redThree" />
    </div >
  )
}

export default page