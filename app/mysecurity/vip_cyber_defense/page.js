import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import { commonCyberThreats, ensureProtection, highNetFAQData } from "@/utils/mock/dummyData";
import HowWeApproach from "@/components/dynamicSections/HowWeApproach/HowWeApproach";
import StayAhead from "@/components/dynamicSections/StayAhead/StayAhead";
// import ConciergeService from "@/components/dynamicSections/ConciergeService/ConciergeService";
import { ConciergeServiceGridData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseVipCyberDefenceFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import Title from "@/components/common/Title";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import greenEbook from "@/asset/common/ebook/bgEbook/green-ebook.png";
import Link from "next/link";
import { vipCyberDef } from "@/utils/images"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import whyChooseImg from "@/asset/personal-cybersecurity/whom-we-serve/high-net-worth-individuals/WWS_HNWI_WhyChoose.webp";
import ctaImg from "@/asset/personal-cybersecurity/whom-we-serve/high-net-worth-individuals/WWS_HNWI_CTA.webp";
import heroImg from "@/asset/personal-cybersecurity/whom-we-serve/high-net-worth-individuals/HNWI_HERO.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";
import ConciergeServiceTwo from "@/components/dynamicSections/ConciergeService/ConciergeServiceTwo";

export const metadata = {
  title: "VIP Cyber Defense for High Net Worth Individuals | TechForing",
  description: "Ensure comprehensive cyber protection for you, your family, and your digital assets with our tailored VIP cyber security services. Call now to get started",
  keywords: "VIP cyber security",
  canonical: "https://techforing.com/mysecurity/vip_cyber_defense/"
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
          HIGH-NET-WORTH INDIVIDUALS
        </h1>}
        description={"Protect your wealth, family, and privacy with TechForing's bespoke cybersecurity services, tailored to the unique needs of high-net-worth individuals."}
        btnTxt={"Secure Your Legacy"}
        variants='green'
      />
      <EbookSection
        bg={greenEbook?.src}
        renderedData={EbookData}
        variant='green'
      />
      <AssessmentServiceSection
        title={"Elite Protection for <br/> High-Net-Worth <br/> Individuals and Families"}
        paragraph={"High-net-worth individuals and their families are prime targets for cybercriminals, viewed as higher-value targets with less protection than large corporations. And with the rise of remote work since COVID-19, the switch to remote work has opened more avenues for cybercriminals to exploit and compromise their privacy. TechForing understands these unique threats, offering bespoke cybersecurity services to safeguard your privacy, your family’s safety, and your assets."}
        variant='green'
        image={vipCyberDef?.introImg}
        alt={"High-Net-Worth Individuals And Their Families"}
        position='bottom'
      />
      <HowWeApproach color={"green"} col={2} hasArrow={false} reverse={false} data={commonCyberThreats} />
      <StayAhead
        variant='green'
      />
      {/* <ConciergeService
        title={"TechForing Concierge Cybersecurity Service"}
        desc={"At TechForing, we provide premier cybersecurity services for high-net-worth individuals, their families, assets, and privacy. Our services include-"}
        renderedData={ConciergeServiceGridData}
        variant='green'
      /> */}
      <ConciergeServiceTwo
        title={"TechForing Concierge Cybersecurity Service"}
        desc={"At TechForing, we provide premier cybersecurity services for high-net-worth individuals, their families, assets, and privacy. Our services include-"}
        renderData={ConciergeServiceGridData}
        variant="green"
      />
      <HowWeApproach color={"green"} col={1} hasArrow={true} reverse={true} data={ensureProtection} />
      <div className="py-10">
        <WhyChooseSection
          variant="green"
          headline={"Why High-Net-Worth Individuals Choose Us"}
          headlineSub={"TechForing Concierge Cybersecurity Services combine top-grade security with excellent client support. Here’s why choosing us is your best decision:"}
          responsiveImgURL={whyChooseImg}
          renderedData={WhyChooseVipCyberDefenceFAQData}
        />
      </div>
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='green' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get an Extensive Security Consultation
            </Link>
          </Button>
        }
        img={ctaImg}
        variant="green"
        title="Don’t Wait Until It’s Too Late!"
        subTitle="Don’t be a low-hanging fruit for cybercriminals. Safeguard your reputation, family, and wealth today with TechForing Concierge Cybersecurity Service Today!"
      />
      <TestimonialSection variant="green" data={pcsTestimonialData} />
      <section>
        <Title className="pt-4 pb-10">Frequently Asked Questions</Title>
        <Faq questions={highNetFAQData} color="green" />
      </section>
      <BlogSlider color="green" />
    </div>
  )
}

export default page