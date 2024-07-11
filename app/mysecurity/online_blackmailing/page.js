import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png';
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { online_blackmailing_DealWithData } from "@/utils/mock/WeDealWithData/WeDealWithData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { stepsForOnlineBlackmail } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { onlineBlackMailfaqData } from "@/utils/mock/dummyData";
import heroOnlineVictimImg from "@/asset/personal-cybersecurity/cyber-investigation/online-blackmailing-investigation/hero.webp";
import Link from "next/link";
import { onlineBlackmail } from "@/utils/images"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import ctaImg from "@/asset/personal-cybersecurity/cyber-investigation/online-blackmailing-investigation/OnlineBlackmail-CTA.webp";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import onlineBlackmailWhyChoose from '@/asset/personal-cybersecurity/cyber-investigation/online-blackmailing-investigation/whyChoose.webp';
import { WhyChooseOnlineBlackmailFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Online Blackmail Investigators | TechForing",
  description: "Protect your reputation with our online blackmail help. Contact Us to identify and respond to online blackmail/extortion swiftly.",
  keywords: "online blackmail help (online blackmail, online blackmail investigation, online blackmail scams, online blackmail what to do, stop online blackmail)",
  canonical: "https://techforing.com/mysecurity/online_blackmailing/",
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
        bgImg={heroOnlineVictimImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          ONLINE BLACKMAIL INVESTIGATIONS
        </h1>}
        description={"Facing online blackmail? Don’t face it alone! Our online blackmail help will rescue you from online blackmail incidents and remove explicit images & videos from the internet."}
        btnTxt={"Talk To An Expert"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <AssessmentServiceSection
        title={"Get Comprehensive <br/> Online Blackmail Help"}
        paragraph="Online blackmail is a serious crime that can cause immense distress. It involves extorting money or critical information from an individual, usually by threatening the victim with physical harm or career damage by sharing embarrassing or private content with the public, etc. Whether you're facing financial extortion, sextortion, or coercion, our cybersecurity experts have the tools and experience to protect you."
        image={onlineBlackmail.blackmailHelp}
        alt={"Risk Assessment Services"}
        position='bottom'
        variant="secondaryTwo"
      />
      <VulnerabilityAssessmentSection
        title={"How We Deal with Online Blackmail"}
        desc={"TechForing's cybersecurity experts will help you with online blackmail incidents, collect evidence, and suggest solutions. Our online blackmail prevention services will:"}
        renderedData={stepsForOnlineBlackmail}
        variants='secondaryTwo'
      />
      <WeDealWithSection
        title={"Types of Online Blackmail We Handle"}
        renderedData={online_blackmailing_DealWithData}
        variant='secondaryTwo'
      />
      <WhyChooseSection
        headline={"Why Choose TechForing for Online Blackmail Help?"}
        responsiveImgURL={onlineBlackmailWhyChoose}
        renderedData={WhyChooseOnlineBlackmailFAQData}
        variant="secondaryTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Online Blackmail Help Today!
            </Link>
          </Button>
        }
        img={ctaImg}
        className={{ borderColor: 'border-secondaryTwo' }}
        title="Don't Listen to the Threat, Stop Online Blackmail Today!"
        subTitle="Our team of experts is here to deal with blackmailers online. We will work diligently to identify the blackmailer and save you from every harm."
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <Faq title={'Frequently Asked Questions'} questions={onlineBlackMailfaqData} color="secondaryTwo" />
      <BlogSlider color="secondaryTwo" />
    </div>
  )
}

export default page