import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-purple.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseCloudSecurityService } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { approchDataForCloudSecurityService } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import { faqDataForCloudSecurity } from "@/utils/mock/dummyData";
import { whatWeWorkBulletWithDescData, whatWeWorkBulletWithDescParagraphData } from "@/utils/mock/WeServeSectionData/weServeCardData";
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { cloudManageDealWithData } from "@/utils/mock/WeDealWithData/WeDealWithData";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import Link from "next/link";
// images
import heroCloudManageImg from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/hero.webp";
import ManageCloudImg from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/why-cloud-security.webp";
import cloudManageWhyChooseImgMobile from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/mcs-why-choose.webp";
import cloudManageOrgImg from "@/asset/business-cybersecurity/enterprise/managed-cloud-security/mcs-cta.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Cloud Security Managed Services | TechForing",
  description: "Safeguard your business with our cloud security managed services offering 24/7 monitoring, threat detection, and incident response. Contact today!",
  keywords: "cloud security managed services",
  canonical: "https://techforing.com/cloud_security_service/",
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
        bgImg={heroCloudManageImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>CLOUD SECURITY MANAGED</span> <br className='hidden lg:visible' /> <span>SERVICES</span>
        </h1>}
        description={'Businesses are rapidly adopting cloud technology to stay competitive. However, moving data to a cloud environment also comes with unexpected, unpleasant outcomes. Our managed cloud security services help your organization combat these challenges.'}
        btnTxt={'Secure Your Cloud Infrastructure'}
        variants='purple'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='purple'
      />
      <StrategicPartner
        imgLeftTextRightAlign={true}
        title={"Why TechForing Cloud <br/> Security Managed Services?"}
        image={ManageCloudImg}
        alt={"Managed Cloud Services"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        onlyDesc={false}
        renderParagraph={whatWeWorkBulletWithDescParagraphData}
        renderedData={whatWeWorkBulletWithDescData}
        variant='tertiary'
        topLightBG={false}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={false}
        rightDeepBG={true}
        bigDeepWidth={false}
      />
      <VulnerabilityAssessmentSection
        title={"Our Approach"}
        desc="TechForing's managed security team will monitor your cloud environments 24/7. We will take an in-depth look at your security integrity, existing capabilities, compliance maturity, and growth trajectory to estimate a comprehensive roadmap. Our end-to-end managed security services include:"
        renderedData={approchDataForCloudSecurityService}
        variants='purple'
      />
      <WeDealWithSection
        title={"Types of <br/> Cloud-Managed Security We Cover"}
        subTitle={"Our managed cloud security services cover a variety of cloud services and key security capabilities:"}
        renderedData={cloudManageDealWithData}
        variant='purpleTwo'
      />
      <WhyChooseSection
        headline={"Why Choose Us for Your Cloud Cybersecurity Needs"}
        responsiveImgURL={cloudManageWhyChooseImgMobile}
        renderedData={WhyChooseCloudSecurityService}
        variant="purple"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='purple' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Schedule a Call
            </Link>
          </Button>
        }
        variant="purple"
        img={cloudManageOrgImg}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Take the Next Step of Your Business’s Cloud Journey"
        subTitle="Let our experts help you secure your cloud environment and protect your valuable data."
      />
      <TestimonialSection variant="purpleTwo" data={bcsTestimonialData} />
      <Faq questions={faqDataForCloudSecurity} title={'Frequently Asked Questions'} color="purpleTwo" />
      <BlogSlider color="purple" />
    </section>
  )
}

export default page