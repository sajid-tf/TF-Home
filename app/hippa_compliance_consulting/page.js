import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-sky.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import WeWork from "@/components/common/WeWork/WeWork";
import { HIPAAConsultingServicesData } from "@/utils/mock/ComplianceServiceData/ComplianceServiceData";
import ComplianceService from "@/components/dynamicSections/ComplianceService/ComplianceService";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { hippaFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import Link from "next/link";
// images
import heroHIPPAImg from "@/asset/business-cybersecurity/security-compliance/hippa/hero.webp";
import hippaAssessmentBG from "@/asset/business-cybersecurity/security-compliance/hippa/need-hippa-compliance.webp";
import hippaWeWorkImg from "@/asset/business-cybersecurity/security-compliance/hippa/hippa-work-with.webp";
import hippaEmployeeImg from "@/asset/business-cybersecurity/security-compliance/hippa/hippa-employee.webp";
import hippaWhyChooseImgMobile from "@/asset/business-cybersecurity/security-compliance/hippa/hippa-whyChoose.webp";
import hippaCTAImg from "@/asset/business-cybersecurity/security-compliance/hippa/business-safe-risk.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "HIPAA Consulting for Healthcare Providers | TechForing",
  description: "Get expert training on essential cybersecurity measures for healthcare providers with our HIPAA consulting service. Contact us today to learn more.",
  keywords: "HIPAA consulting (HIPAA, HIPAA compliance, HIPAA requirements, HIPAA certification, HIPAA consulting services, HIPAA consulting firms)",
  canonical: "https://techforing.com/hippa_compliance/",
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
        bgImg={heroHIPPAImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>HIPAA CONSULTANT</span> <br className='hidden lg:visible' />
          <span>SERVICES</span>
        </h1>}
        description={'Safeguard Protected Health Information (PHI), Achieve and Maintain Compliance Seamlessly, and Build a Secure Foundation for Your Healthcare Organization with Expert HIPAA Consulting Services'}
        btnTxt={'Protect The Healthcare Data With HIPAA'}
        variants='skyFour'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='skyFour'
      />
      <AssessmentServiceSection
        title={"Why HIPAA <br/> Compliance Matters"}
        paragraph={"Health care providers that handle protected health information (PHI) must adhere to HIPAA regulatory compliance. Whether you're a small practice, a large hospital system, or a business associate, a HIPAA compliance consultant can perform a compliance assessment of your organization to identify gaps in your current security posture, develop and implement effective security policies and procedures, prepare for compliance audits, and minimize the risk of costly data breaches and regulatory fines."}
        image={hippaAssessmentBG}
        alt={"Risk Assessment Services"}
        position='bottom'
        variant="skyFour"
      />
      <div className="flex flex-col gap-16">
        <WeWork
          imgLeftTextRightAlign={false}
          variant='skyFour'
          title={"HIPAA Compliance Consultants from TechForing"}
          desc={"Feel free to reach out to our professional consultant team for a compliance check on your company. Once you are up to speed with all the rules and regulations of the HIPAA compliance program, you can apply for compliance certification. <br/> <br/> An important note: though GDPR and HIPAA compliance are aimed towards the same thing, their scopes are entirely different. So if you aren't GDPR compliant already, feel free to take advantage of our <a href='/gdpr_compliance' target='_blank' class='underline'>GDPR compliance consultancy</a> services. <br/><br/> Having your organization in a state of non-compliance can result in paying hefty fines, which affects the integrity and credibility of the organization."}
          image={hippaWeWorkImg}
          alt={"How We Work"}
          wrapperImgBG={false}
        />
        {/* <ComplianceService
          titleSection={''}
          isDesc={false}
          numberOfGrid={2}
          renderData={HippaComplianceData}
          variant={'skyFour'}
          topBorder={true}
          noOfPaddingBottomAfterTitle={4}
        /> */}
      </div>
      <ComplianceService
        titleSection={'Our Proven HIPAA Compliance Consultancy Process'}
        isDesc={true}
        descSection={'Our HIPAA consulting services follow these steps to ensure your organization has complete HIPAA compliance.'}
        descCenterAlign={true}
        numberOfGrid={1}
        renderData={HIPAAConsultingServicesData}
        variant={'skyFour'}
      />
      <StrategicPartner
        imgLeftTextRightAlign={true}
        title={"Employee Training For HIPPA Compliance"}
        image={hippaEmployeeImg}
        alt={"How We Work"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={false}
        onlyDesc={true}
        renderParagraph={[
          {
            id: 1,
            paragraph: 'Whether you are a CE(Covered Entity) or one of the BAs (Business Associates), it is a must for you to train all your employees to follow the standard policies and procedures based on HIPAA compliance. To make sure your company is maintaining HIPAA compliance, we’ll arrange employee training so all your business associates consider you as a credible company.'
          }
        ]}
        variant='skyFour'
        topLightBG={false}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={false}
        rightDeepBG={true}
      />
      <WhyChooseSection
        headline={"What Makes TechForing HIPAA Consultation Stand Out?"}
        responsiveImgURL={hippaWhyChooseImgMobile}
        renderedData={hippaFAQData}
        variant={'skyFour'}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='skyFour' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        }
        variant="skyFour"
        img={hippaCTAImg}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Protect Your Patients and Your Organization!"
        subTitle="Don't risk non-compliance with HIPAA. Contact us today to ensure your healthcare organization prioritizes patient privacy and data security."
      />
      <BlogSlider color="skyFour" />
    </section>
  )
}

export default page