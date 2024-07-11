import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-sky.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import ComplianceService from "@/components/dynamicSections/ComplianceService/ComplianceService";
import { GDPRComplianceData } from "@/utils/mock/ComplianceServiceData/ComplianceServiceData";
import Link from "next/link";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import { gdpr_compliance_why_choose_data } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
// images
import heroGDPRImg from "@/asset/business-cybersecurity/security-compliance/gdpr/hero.webp";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import thirdSectionImg from "@/asset/business-cybersecurity/security-compliance/gdpr/GDPR_Intro.webp";
import whyChooseImg from "@/asset/business-cybersecurity/security-compliance/gdpr/GDPR_3rd.webp";
import ctaImg from "@/asset/business-cybersecurity/security-compliance/gdpr/GDPR_CTA.webp";
import assessmentServiceImg from "@/asset/business-cybersecurity/ransomware-removal/services.webp"
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "GDPR Compliance & Data Protection Consultancy | TechForing",
  description: "Upgrade your SMB's security infrastructure to meet GDPR compliance requirements with our GDPR consulting service. Contact us to learn more!",
  keywords: "GDPR consulting (GDPR, GDPR compliance, GDPR requirements, GDPR consulting services, GDPR consulting firms, GDPR consulting company)",
  canonical: "https://techforing.com/gdpr_compliance/",
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
        bgImg={heroGDPRImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>GDPR COMPLIANCE</span> <br className='hidden lg:visible' />
          <span>CONSULTANCY</span>
        </h1>}
        description={'Safeguard your customer data, mitigate costly risks, and build lasting trust. Our expert GDPR consulting services simplify the complex regulations and help you avoid hefty fines & reputational damage'}
        btnTxt={'Protect Business Data With GDPR'}
        variants='skyFour'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='skyFour'
      />
      <AssessmentServiceSection
        title={"Ensure Data Protection with <br/> GDPR Compliance <br/> Consultancy"}
        paragraph={"The General Data Protection Regulation (GDPR) is a comprehensive data protection law that revolutionized how organizations handle personal data in the European Union (EU) and beyond.  Ensuring your business is GDPR compliant is not just a legal requirement; it's a foundation for building customer trust and mitigating costly data breaches."}
        variant='skyFour'
        image={assessmentServiceImg}
        alt={"Ensure Data Protection"}
        position='bottom'
      />
      <StrategicPartner
        imgLeftTextRightAlign={false}
        title={"Benefits Of Being GDPR Compliant"}
        image={thirdSectionImg}
        alt={"GDPR Compliance"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        onlyDesc={false}
        renderParagraph={[
          {
            id: 1,
            paragraph: 'GDPR helps organizations to manage personal data effectively & mitigates the risk of data breaches. Other benefits include:'
          }
        ]}
        renderedData={[
          {
            id: 1,
            point: 'Building a good reputation with the customers and clients'
          },
          {
            id: 2,
            point: 'Building customer trust'
          },
          {
            id: 3,
            point: 'Avoid costly data breaches & protect your customer\'s data'
          },
          {
            id: 4,
            point: 'Avoid hefty fines by avoiding data breaches'
          },
          {
            id: 5,
            point: 'Streamline your operations and make your business more efficient'
          }
        ]}
        variant='skyFour'
        topLightBG={false}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={true}
        rightDeepBG={false}
        bigDeepWidth={false}
      />
      <ComplianceService
        titleSection={'How We Ensure GDPR Compliance'}
        isDesc={true}
        descSection={"Whether you're a small business or a large enterprise, we offer a full suite of GDPR consulting services to guide you through the intricacies of the regulation and ensure your compliance"}
        numberOfGrid={3}
        renderData={GDPRComplianceData}
        variant={'skyFour'}
      />
      <WhyChooseSection
        headline={"Why Choose TechForing GDPR Consulting?"}
        responsiveImgURL={whyChooseImg}
        renderedData={gdpr_compliance_why_choose_data}
        variant={'skyFour'}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='skyFour' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Schedule a Free Consultation
            </Link>
          </Button>
        }
        variant="skyFour"
        img={ctaImg}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Protect Your Business from Costly Consequences!"
        subTitle="Don’t risk non-compliance, ensure your business is GDPR compliant, and avoid costly fines. Learn how you can safeguard your business with our GDPR consultancy service today!"
      />
      <BlogSlider color="skyFour" />
    </section>
  )
}

export default page;