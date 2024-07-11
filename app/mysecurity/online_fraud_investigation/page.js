import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png';
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { onlineFraudTypes } from "@/utils/mock/WeDealWithData/WeDealWithData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { approchForOnlineFraud } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { fraudInvestigationFaqData } from "@/utils/mock/dummyData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseForOnlineFruadInvestigationFAQ } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import heroOnlineFraudImg from "@/asset/personal-cybersecurity/cyber-investigation/online-fraud-investigation/hero.webp";
import Link from "next/link";
import { onlineFraud } from "@/utils/images"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import whyChooseImg from "@/asset/personal-cybersecurity/cyber-investigation/online-fraud-investigation/OFI-WhyChoose.webp"
import fraudCTA from '@/asset/personal-cybersecurity/cyber-investigation/online-fraud-investigation/cyber-expert.webp';
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Online Fraud Investigation | Prevent Cyber Fraud | TechForing",
  description: "Safeguard your digital assets and defend against online fraud with our online fraud investigation services. Contact us today for peace of mind!",
  keywords: "online fraud investigation (online fraud, fraud investigation, online fraud prevention,)",
  canonical: "https://techforing.com/mysecurity/online_fraud_investigation/",
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
        bgImg={heroOnlineFraudImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          ONLINE FRAUD INVESTIGATION
        </h1>}
        description={"Have You Been a Victim of Online Fraud? Don’t let the fraudsters win! Investigate Online Fraud with Our Expert Team & recover your losses!"}
        btnTxt={"Investigate Today!"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <AssessmentServiceSection
        title={"Online Fraud Victim?<br/> Don’t Stay Silent!"}
        paragraph="Cybercriminals thrive on silence. Don’t let them win! TechForing’s Online Fraud Investigators specialize in investigating online fraud. From romance scams to sophisticated phishing attacks, we have the expertise and cutting-edge tools to track down scammers in the furthest corners of the world and help you reclaim what’s yours.
        Don’t let your losses become permanent - Take the first step to reclaim your money and peace of mind today!"
        image={onlineFraud.introImg}
        alt={"Scammed Online?"}
        position='bottom'
        variant="secondaryTwo"
      />
      <WeDealWithSection
        title={"Types of Online Fraud We Investigate"}
        subTitle={"We investigate all kinds of online frauds, including:"}
        renderedData={onlineFraudTypes}
        variant='secondaryTwo'
      />
      <VulnerabilityAssessmentSection
        title={"Our Proven Approach to Online Fraud Investigations"}
        desc={"Our arsenal of cutting-edge investigative techniques includes:"}
        renderedData={approchForOnlineFraud}
        variants='secondaryTwo'
      />
      <WhyChooseSection
        headline={"Why Choose TechForing Online Fraud Investigation?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseForOnlineFruadInvestigationFAQ}
        variant="secondaryTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started Today!
            </Link>
          </Button>
        }
        img={fraudCTA}
        className={{ borderColor: 'border-secondaryTwo' }}
        title="Don't Let Fraudsters Get Away!"
        subTitle="Contact us today for a free consultation. We're ready to help you fight back against online fraud and reclaim what's yours."
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <Faq title={'Frequently Asked Questions'} questions={fraudInvestigationFaqData} color="secondaryTwo" />
      <BlogSlider color="secondaryTwo" />
    </div>
  )
}

export default page