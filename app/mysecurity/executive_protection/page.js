import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import { CommonExecutivesThreats, executiveFAQData, howProtectionWorks } from "@/utils/mock/dummyData";
import HowWeApproach from "@/components/dynamicSections/HowWeApproach/HowWeApproach";
import StayAhead from "@/components/dynamicSections/StayAhead/StayAhead";
import { concierge_executive_protectionData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseFAQDataForExecutiveProtection } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import Title from "@/components/common/Title";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import greenEbook from "@/asset/common/ebook/bgEbook/green-ebook.png";
import Link from "next/link";
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import { vipCyberDef } from "@/utils/images";
import whyChooseImg from "@/asset/personal-cybersecurity/whom-we-serve/business-executive/WWS_CBE_WhyChoose.webp";
import ctaImg from "@/asset/personal-cybersecurity/whom-we-serve/business-executive/WWS_CBE_CTA.webp";
import heroImg from "@/asset/personal-cybersecurity/whom-we-serve/business-executive/CBE_HERO.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";
import ConciergeServiceTwo from "@/components/dynamicSections/ConciergeService/ConciergeServiceTwo";

export const metadata = {
  title: "C-level Executive Protection | Cyber Security Service | TechForing ",
  description: "TechForing Executive Cyber Security Solution safeguards sensitive data and ensures top-tier protection for C-level executives. Call today to get started.",
  keywords: "executive cyber security",
  canonical: "https://techforing.com/mysecurity/executive_protection/",
};

const page = () => {
  return (
    <div className="flex flex-col md:gap-24 gap-10 mb-20">
      <SEOHead
        title={metadata.title}
        metaDesc={metadata.description}
        metaKeywords={metadata.keywords}
        metaCanonical={metadata.canonical}
      />
      <FourVectorHero
        bgImg={heroImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          C-Level Business Executives
        </h1>}
        description={"Secure your professional reputation, your company’s sensitive data, and your family’s security with TechForing Concierge Cybersecurity Services, tailored exclusively for C-Suite executives."}
        btnTxt={"Secure Your Executive Edge"}
        variants='green'
      />
      <EbookSection
        bg={greenEbook?.src}
        renderedData={EbookData}
        variant='green'
      />
      <AssessmentServiceSection
        title={"Why C-Level Executives <br/> Are in the Crosshairs"}
        paragraph={"Cybercriminals are relentlessly innovative, exploiting your busy schedule, reliance on mobile devices, and even targeting your family to gain access. Traditional antivirus and firewalls are simply not enough to defend against these targeted attacks. <br/> <br/> These attacks can lead to devastating financial losses, reputational damage, business disruption, and even personal harm to you and your family.<br/> <br/> TechForing understands the unique threats you face. Our concierge cybersecurity service is tailored to your specific needs, providing proactive defense and 24/7 vigilance to keep you and your business secure."}
        variant='green'
        image={vipCyberDef?.introImgCLevel}
        alt={"C-Level Executive"}
        position='bottom'
      />
      <HowWeApproach color={"green"} col={2} hasArrow={false} reverse={false} data={CommonExecutivesThreats} />
      <StayAhead
        variant='green'
      />
      <ConciergeServiceTwo
        title="TechForing's Concierge Cybersecurity Service - Your Digital Bodyguard"
        desc="At TechForing, we provide premier cybersecurity services for C-Level Executives, their families, assets, and privacy. Our services include-"
        renderData={concierge_executive_protectionData}
        variant='green'
      />
      <HowWeApproach color={"green"} col={1} hasArrow={true} reverse={true} data={howProtectionWorks} />
      <WhyChooseSection
        variant="green"
        headline={"Why C-Suite Executives Trust TechForing?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseFAQDataForExecutiveProtection}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='green' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Immediate Protection
            </Link>
          </Button>
        }
        img={ctaImg}
        variant="green"
        title="Don’t Be The Next Headline!"
        subTitle="Cybercriminals are targeting you 24/7. Act now to get proactive, personalized cybersecurity services with TechForing Concierge Cybersecurity Services."
      />
      <TestimonialSection variant="green" data={pcsTestimonialData} />
      <section>
        <Title className="pt-4 pb-10">Frequently Asked Questions</Title>
        <Faq questions={executiveFAQData} color="green" />
      </section>
      <BlogSlider color="green" />
    </div>
  )
}

export default page