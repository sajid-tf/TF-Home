import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-purple.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { SMB_MSCAssessmentData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import WeWorkBulletPoint from "@/components/common/WeWorkBulletPoint/WeWorkBulletPoint";
import { manageWithSolutionBulletWithDescData } from "@/utils/mock/WeServeSectionData/weServeCardData";
import { faqDataForManagedCyberSecurityService } from "@/utils/mock/dummyData";
import WeManageCard from "@/components/common/WeManageCard/WeManageCard";
import { managed_cybersecurity_service_card_data } from "@/utils/mock/WeManageCardData/WeManageCardData";
import heroSMBManageImg from "@/assets/hero/business/hero-smb-manage.png";
import Link from "next/link";
import ourApproch from "@/asset/business-cybersecurity/SMB/managed-security-solution/our-approch.webp";
import howWeWork from "@/asset/business-cybersecurity/SMB/managed-security-solution/how-we-work.webp";
import securitySolutions from "@/asset/business-cybersecurity/SMB/managed-security-solution/security-solutions.webp";
import { WhyChooseFAQDataFor_managed_cybersecurity_service } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import smbManageWhyChooseImg from "@/asset/business-cybersecurity/SMB/managed-security-solution/smb-mss-why-choose.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Managed Security Services | Network & IT Solutions | TechForing",
  description: "Detect, protect, and respond to cyberattacks with our managed cybersecurity services. Contact us today to strengthen your business infrastructure.",
  keywords: "managed cybersecurity services (managed cybersecurity service, managed cyber security services, managed cyber security service)",
  canonical: "https://techforing.com/managed_security_services/",
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
        bgImg={heroSMBManageImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span>MANAGED</span> <br className='hidden lg:visible' /> <span>SECURITY</span> <span>SOLUTION</span>
        </h1>}
        description={'Don\'t let cybersecurity concerns slow you down. Our managed solution gives you the protection you need without the hassle of building an in-house team, so you can continue to innovate and grow!'}
        btnTxt={'Secure Your Business'}
        variants='purple'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='purple'
      />
      <AssessmentServiceSection
        title={"The TechForing Advantage"}
        paragraph={"TechForing is a leading managed security services provider. Our services allow small and medium-sized businesses to detect, protect, and respond to unknown security events. Our best-in-class security monitoring and management ensure that we cover most organizations' fundamental online data protection needs with comprehensive, all-in-one services."}
        variant='purple'
        image={ourApproch}
        alt={"Our Approach"}
        position='bottom'
      />
      <WeManageCard
        title={"Cybersecurity We Manage"}
        renderedData={managed_cybersecurity_service_card_data}
        variant='tertiary'
      />
      <VulnerabilityAssessmentSection
        title={"How Our Managed Cybersecurity Services Keep You Secure"}
        desc={"Our comprehensive managed cybersecurity solution goes beyond basic protection. We proactively assess, mitigate, and monitor risks while providing ongoing support and expert guidance to keep your business secure."}
        renderedData={SMB_MSCAssessmentData}
        variants='purple'
      />
      <WeWorkBulletPoint
        imgLeftTextRightAlign={true}
        title={"Our Collaboration Process <br/> With Your Security Provider"}
        image={howWeWork}
        alt={"Our Collaboration Process With Your Security Provider"}
        bulletPoint={true}
        checkBox={false}
        bulletWithDesc={false}
        renderedData={manageWithSolutionBulletWithDescData}
        variant='tertiary'
      />

      <WhyChooseSection
        headline={"Why Choose TechForing Managed Security Solutions?"}
        responsiveImgURL={smbManageWhyChooseImg}
        renderedData={WhyChooseFAQDataFor_managed_cybersecurity_service}
        variant="purple"
      />

      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='purple' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Schedule a Consultation
            </Link>
          </Button>
        }
        variant="purple"
        img={securitySolutions}
        className={{ borderColor: 'border-purpleTwo' }}
        title="Secure Your Business Before It's Too Late!"
        subTitle="Cyberattacks can lead to data breaches, financial losses, and reputational damage. Don't leave your business vulnerable. Get started with Managed Security Solutions today to protect your business from incoming cyberattacks."
      />
      <TestimonialSection variant="purpleTwo" data={bcsTestimonialData} />
      <Faq questions={faqDataForManagedCyberSecurityService} title={'Frequently Asked Questions'} color="purpleTwo" />
      <BlogSlider color="purple" />
    </section>
  )
}

export default page