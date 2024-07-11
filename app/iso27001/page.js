import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-sky.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { isoCertificationData } from "@/utils/mock/dummyData";
import IsoCertification from "@/components/dynamicSections/IsoCertification";
import ComplianceService from "@/components/dynamicSections/ComplianceService/ComplianceService";
import { ComplianceServiceData } from "@/utils/mock/ComplianceServiceData/ComplianceServiceData";
import Link from "next/link";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseFAQDataFor_iso } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
// images
import heroISOImg from "@/asset/business-cybersecurity/security-compliance/iso-27001/hero.webp";
import isoCTAImg from "@/asset/business-cybersecurity/security-compliance/iso-27001/expert-consultancy.webp";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import introImg from "@/asset/business-cybersecurity/security-compliance/iso-27001/ISO_Intro.webp";
import introTwoImg from "@/asset/business-cybersecurity/security-compliance/iso-27001/ISO_2ndIntro.webp";
import whyChooseImg from "@/asset/business-cybersecurity/security-compliance/iso-27001/ISO_WhyChoose.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "ISO 27001 Consultant",
  description: "Enhance your business security with our ISO 27001 consultants. We'll help implement essential measures and train stakeholders. Contact us today!",
  keywords: "ISO 27001 consulting (ISO 27001 consulting services, ISO 27001 consulting firm, ISO 27001 compliance, ISO 27001 compliance checklist, ISO 27001 compliance audit, ISO 27001 compliance consultants)",
  canonical: "https://techforing.com/iso27001/",
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
        bgImg={heroISOImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>ISO 27001 CONSULTING SERVICE</span>
        </h1>}
        description={'Want to demonstrate your commitment to data security to your customers? ISO  27001 is the badge of honor you need. Get ISO 27001 certified today with our expert consulting service.'}
        btnTxt={'Start Today'}
        variants='skyFour'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='skyFour'
      />
      <AssessmentServiceSection
        title={"Get Expert ISO 27001 <br/> Consultation"}
        paragraph={"Enhance your organization's security posture and protect your valuable information assets with TechForing's expert ISO 27001 consulting services. We guide you through the entire certification process, simplifying compliance and ensuring your information security management system (ISMS) aligns with international best practices."}
        image={introImg}
        alt={"bug bounty program"}
        position='bottom'
        variant="skyFour"
      />

      <IsoCertification color="skyFour" img={introTwoImg} data={isoCertificationData} />
      <ComplianceService
        titleSection={'How We Approach an ISO 27001 Audit'}
        isDesc={false}
        numberOfGrid={1}
        renderData={ComplianceServiceData}
        variant={'skyFour'}
        noOfPaddingBottomAfterTitle={2}
      />
      <WhyChooseSection
        headline={"Why Partner with TechForing for ISO 27001 Compliance?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseFAQDataFor_iso}
        variant={'skyFour'}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='skyFour' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Contact Us Today!
            </Link>
          </Button>
        }
        variant="skyFour"
        img={isoCTAImg}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Ready to Elevate Your Information Security?"
        subTitle="Schedule a free consultation with our experts for a smooth and efficient  ISO 27001 certification process!"
      />
      <BlogSlider color="skyFour" />
    </section>
  )
}

export default page