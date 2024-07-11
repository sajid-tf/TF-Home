import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-sky.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { compliance_consulting_Serve_data } from "@/utils/mock/WeServeSectionData/weServeCardData";
import WeServeSection from "@/components/dynamicSections/WeServeSection/WeServeSection";
import ComplianceConsulting from "@/components/dynamicSections/ComplianceConsulting";
import { complianceConsultingData, weProvideServiceData } from "@/utils/mock/dummyData";
import WeProvideService from "@/components/dynamicSections/WeProvideService/WeProvideService";
import ComplianceService from "@/components/dynamicSections/ComplianceService/ComplianceService";
import { ComplianceCertificationsData } from "@/utils/mock/ComplianceServiceData/ComplianceServiceData";
import Link from "next/link";
// images
import ComplianceOrgImg from "@/asset/business-cybersecurity/security-compliance/css-cta.webp";
import HeroComplianceImg from "@/asset/business-cybersecurity/security-compliance/hero.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import { compliance_consulting_why_choose_data } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import OSINTService from "@/components/dynamicSections/OSINTService/OSINTService";
import { stepsForCompliance_consulting } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import cssWhyChooseImg from "@/asset/business-cybersecurity/security-compliance/css-whyChoose.webp";
import cssIntroImg from "@/asset/business-cybersecurity/security-compliance/css_intro.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Cybersecurity Compliance Consultation | TechForing",
  description: "Stay compliant, stay secure! Our cybersecurity compliance consulting services help you meet regulations and protect your business. Get started today!",
  keywords: "cybersecurity compliance consulting (cybersecurity compliance, cybersecurity compliance services, cybersecurity compliance analyst, cybersecurity compliance certification)",
  canonical: "https://techforing.com/compliance_consulting/",
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
        bgImg={HeroComplianceImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>CYBERSECURITY COMPLIANCE</span> <br className='hidden lg:visible' />
          <span>CONSULTING SERVICES</span>
        </h1>}
        description={'Simplify Compliance Requirements and Safeguard Your Business With Expert Cybersecurity Compliance Consulting'}
        btnTxt={'Consult Us For Complete Compliance'}
        variants='skyFour'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='skyFour'
      />
      <AssessmentServiceSection
        title={"TechForing Cybersecurity <br/> Compliance Consulting"}
        paragraph={"In today's digital landscape, businesses rely heavily on online systems to store sensitive data, making them a prime target for cyberattacks. Cybersecurity compliance regulations aim to protect this information, but navigating the complex and ever-changing requirements can be overwhelming for most businesses. TechForing's cybersecurity compliance consulting services provide expert guidance to help ensure your business is protected and compliant, allowing you to focus on what you do best – growing your business."}
        image={cssIntroImg}
        alt={"TechForing Cybersecurity Compliance Consulting"}
        position='bottom'
        variant="skyFour"
      />
      <ComplianceConsulting color="skyFour" data={complianceConsultingData} />
      <ComplianceService
        titleSection={'Types of Compliance Frameworks and Certifications'}
        isDesc={true}
        descSection={'Compliance certifications are a vital way for businesses to demonstrate their commitment to data security, industry standards, and best practices. Here are three key types of certifications:'}
        numberOfGrid={3}
        renderData={ComplianceCertificationsData}
        variant='skyFour'
        topBorder={true}
        noOfPaddingBottomAfterTitle={0}
      />
      <WeProvideService color="skyFour" renderData={weProvideServiceData} />
      <OSINTService
        variant="skyFour"
        title={"How Our Consultation Works"}
        renderedData={stepsForCompliance_consulting}
        fullBorder={true}
        squareShape={true}
        noOfGrid={4}
      />
      <WeServeSection
        title={"Industries We Serve"}
        cardItem={compliance_consulting_Serve_data}
        variant='skyFour'
      />
      <WhyChooseSection
        headline={"Why Choose TechForing for Cybersecurity Compliance?"}
        responsiveImgURL={cssWhyChooseImg}
        renderedData={compliance_consulting_why_choose_data}
        variant="skyFour"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='skyFour' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started
            </Link>
          </Button>
        }
        variant="skyFour"
        img={ComplianceOrgImg}
        className={{ borderColor: 'border-purpleTwo' }}
        upperTitle={"Ready to Navigate Compliance with Confidence? "}
        title="Get Expert Cybersecurity Compliance Consulting Services!"
        subTitle="Ensure your business meets industry standards with our tailored consulting services covering PCI DSS, ISO 27001, GDPR, HIPAA, and more."
      />
      <TestimonialSection variant="skyFour" data={bcsTestimonialData} />
      <BlogSlider color="skyFour" />
    </section>
  )
}

export default page;