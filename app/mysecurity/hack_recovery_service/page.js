import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png'
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection"
import { VulnerabilityAssessmentData_MS_HACK } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData"
import CyberInvestigation from "@/components/dynamicSections/CyberInvestigation"
import { cyberInvestigationData_MS_HACK, faqData_MS_HACK } from "@/utils/mock/dummyData"
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import WeWorkBulletPoint from "@/components/common/WeWorkBulletPoint/WeWorkBulletPoint"
import { whatWeWorkData_MS_HACK } from "@/utils/mock/WeServeSectionData/weServeCardData"
import heroHackImg from "@/asset/personal-cybersecurity/incident-response/hack-recovery/hero.webp";
import Link from "next/link"
import { hackRecovery } from "@/utils/images"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { WhyChoosePCSHackFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import whyChooseImg from "@/asset/personal-cybersecurity/incident-response/hack-recovery/HR_WhyChoose.webp";
import ctaImg from "@/asset/personal-cybersecurity/incident-response/hack-recovery/HR_CTA.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Personal Hack Recovery Services | TechForing ",
  description: "Dealing with a hack incident? Recover lost accounts and remove harmful content with our personalized hack recovery services. Contact today!",
  keywords: "hack recovery services (hacked email recovery, hacked social media recovery, hacked financial account recovery)",
  canonical: "https://techforing.com/mysecurity/hack_recovery_service/",
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
        bgImg={heroHackImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          PERSONAL HACK RECOVERY SERVICES
        </h1>}
        description={"Fallen victim to a hacking attack? We can help you recover your accounts and data. Don’t let the hackers get away with your assets, take the first step towards regaining control."}
        btnTxt={"Recover Your Assets"}
        variants='yellowTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellowTwo'
      />
      <WeWorkBulletPoint
        imgLeftTextRightAlign={false}
        title={"TechForing Hack Recovery Services"}
        desc={"Hack recovery is the method of undoing a hack and mitigating the damage that came from it. Our hack recovery process will-"}
        image={hackRecovery?.introImg}
        alt={"TechForing Hack Recovery Services Image"}
        bulletPoint={true}
        checkBox={false}
        bulletWithDesc={false}
        renderedData={whatWeWorkData_MS_HACK}
        variant='yellow'
      />
      <VulnerabilityAssessmentSection
        title={"Our Approach"}
        desc="TechForing's security experts have years of experience in recovering hacked accounts. We have the skills and tools to approach every situation and provide appropriate solutions.Our hack recovery service uses the following approach-"
        renderedData={VulnerabilityAssessmentData_MS_HACK}
        variants='yellow'
      />
      <CyberInvestigation color="yellowTwo" data={cyberInvestigationData_MS_HACK} />
      <TestimonialSection
        variant="yellowTwo"
        data={pcsTestimonialData}
      />
      <WhyChooseSection
        headline={"Why Choose TechForing for Personal Hack Recovery"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChoosePCSHackFAQData}
        variant="yellowTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellowTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Talk to an Expert
            </Link>
          </Button>
        }
        img={ctaImg}
        className={{ borderColor: 'border-redThree' }}
        title="Don't Let Hackers Win – Reclaim Your Digital Life Now"
        subTitle="Been hacked? Feeling overwhelmed? Take the first step towards recovery. Our experts are ready to help you regain control and security."
        variant="yellow"
      />
      <Faq title={'Frequently Asked Questions'} questions={faqData_MS_HACK} color="yellowTwo" />
      <BlogSlider color="yellow" />
    </div>
  )
}

export default page