import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import { CommonCyberThreatsData_political_leaders, HowWeDealPoliticalLegacy, politicalFAQData } from "@/utils/mock/dummyData";
import HowWeApproach from "@/components/dynamicSections/HowWeApproach/HowWeApproach";
import StayAhead from "@/components/dynamicSections/StayAhead/StayAhead";
import { ConciergeServiceForPoliticData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseFAQDataForPoliticalCyberSecurity } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import Title from "@/components/common/Title";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import greenEbook from "@/asset/common/ebook/bgEbook/green-ebook.png";
import Link from "next/link";
import { vipCyberDef } from "@/utils/images"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import whyChooseImg from "@/asset/personal-cybersecurity/whom-we-serve/political-leader/WWS_PL_WhyChoose.webp";
import ctaImg from "@/asset/personal-cybersecurity/whom-we-serve/political-leader/WWS_PL_CTA.webp";
import heroImg from "@/asset/personal-cybersecurity/whom-we-serve/political-leader/PL_HERO.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";
import ConciergeServiceTwo from "@/components/dynamicSections/ConciergeService/ConciergeServiceTwo";

export const metadata = {
  title: "Cyber Protection for Political Leaders | TechForing",
  description: "Safeguard political leaders with our specialized cyber security for government officials, ensuring robust data protection and cyber threat mitigation.",
  keywords: "cyber security for government",
  canonical: "https://techforing.com/mysecurity/political_leaders/",
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
          Political Leaders
        </h1>}
        description={"Political figures are prime targets in today’s digital age. Protect your reputation, and your constituents’ trust, and secure your sensitive information with our concierge cybersecurity solutions for political leaders."}
        btnTxt={"Keep Your Leadership Risk-Free"}
        variants='green'
      />
      <EbookSection
        bg={greenEbook?.src}
        renderedData={EbookData}
        variant='green'
      />
      <AssessmentServiceSection
        title={"Political Leaders’ <br/> Cybersecurity <br/> Nation’s Top Priority"}
        paragraph={"As a political leader, your cybersecurity isn’t just about protecting your data - it’s about safeguarding your reputation, your family, and the trust of your people. The digital landscape is a minefield, and you’re a high-value target. Cyberattacks can expose sensitive information, manipulate public opinion, or even intervene with critical government functions.<br/> <br/> Traditional cybersecurity measures simply aren’t enough under such circumstances. You need a tailored solution that understands the unique threats you face. TechForing’s Concierge Cybersecurity Service is designed specifically for political leaders, offering comprehensive protection for not just your personal information, but also the integrity of your nation’s political system."}
        variant='green'
        image={vipCyberDef?.introImgLeader}
        alt={"Political Leaders"}
        position='bottom'
      />
      <HowWeApproach color={"green"} col={2} hasArrow={false} reverse={false} data={CommonCyberThreatsData_political_leaders} />
      <StayAhead
        variant='green'
      />
      <ConciergeServiceTwo
        title={"Techforing Concierge Cybersecurity <br/> Service - Safeguarding Political Leaders"}
        desc={"Our Concierge Cybersecurity Services provide the ultimate protection for political leaders. We understand the unique challenges you face and offer tailored solutions designed to safeguard your digital presence, reputation, and sensitive information."}
        renderData={ConciergeServiceForPoliticData}
        variant='green'
      />
      <HowWeApproach color={"green"} col={1} hasArrow={true} reverse={true} data={HowWeDealPoliticalLegacy} />
      <WhyChooseSection
        variant="green"
        headline={"Why Political Leaders Choose TechForing"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseFAQDataForPoliticalCyberSecurity}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='green' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Ensure Your Security
            </Link>
          </Button>
        }
        img={ctaImg}
        variant="green"
        title="PROTECT YOUR POLITICAL LEGACY!"
        subTitle="Safeguard your reputation and responsibilities. Embrace advanced cybersecurity tailored for leaders like you."
      />
      <TestimonialSection variant="green" data={pcsTestimonialData} />
      <section>
        <Title className="pt-4 pb-10">Frequently Asked Questions</Title>
        <Faq questions={politicalFAQData} color="green" />
      </section>
      <BlogSlider color="green" />
    </div>
  )
}

export default page