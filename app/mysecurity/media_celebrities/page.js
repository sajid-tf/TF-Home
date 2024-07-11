import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import { CommonCyberThreatsForMediaCelebritys, CybersecurityMethodology_Media_Celeb, mediaFAQData } from "@/utils/mock/dummyData";
import HowWeApproach from "@/components/dynamicSections/HowWeApproach/HowWeApproach";
import StayAhead from "@/components/dynamicSections/StayAhead/StayAhead";
import { ConciergeServiceForMediaChelibratyData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseFAQDataForMediaCelebrity } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import Title from "@/components/common/Title";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import greenEbook from "@/asset/common/ebook/bgEbook/green-ebook.png";
import Link from "next/link";
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import { vipCyberDef } from "@/utils/images";
import ctaImg from "@/asset/personal-cybersecurity/whom-we-serve/media-celeb/WWS_MC_CTA.webp";
import whyChooseImg from "@/asset/personal-cybersecurity/whom-we-serve/media-celeb/WWS_MC_WhyChoose.webp";
import heroImg from "@/asset/personal-cybersecurity/whom-we-serve/media-celeb/MC_HERO.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";
import ConciergeServiceTwo from "@/components/dynamicSections/ConciergeService/ConciergeServiceTwo";

export const metadata = {
  title: "Cyber Protection for Media Celebrities | TechForing",
  description: "Protect media celebrities' digital presence and personal information with custom, bespoke cyber protection services. Call now to get started.",
  keywords: "media celebrity cyber security",
  canonical: "https://techforing.com/mysecurity/media_celebrities/",
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
          Media Celebrities
        </h1>}
        description={"Fame comes with unique risks. Protect your privacy, your reputation, and your peace of mind with our Concierge Cybersecurity Solutions, designed for high-profile individuals in the spotlight."}
        btnTxt={"Shield Your Spotlight from Cyber Threats"}
        variants='green'
      />
      <EbookSection
        bg={greenEbook?.src}
        renderedData={EbookData}
        variant='green'
      />
      <AssessmentServiceSection
        title={"Media Celebrity <br/> Cybersecurity Protecting <br/> Your Digital Persona"}
        paragraph={"Cyberattacks pose devastating threats to media celebrities, causing financial loss, reputational damage, emotional distress, and career setbacks. These attacks often involve invasive privacy breaches, the manipulation of personal information, and sophisticated social engineering tactics.<br/> <br/> Traditional security measures are insufficient due to celebrities' high visibility, constant connectivity, and complex digital footprint. The personalized nature of these attacks and the ever-evolving threat landscape necessitate a more adaptive and proactive cybersecurity approach.<br/> <br/> TechForing's Concierge Cybersecurity Service is specifically designed to address these unique challenges, offering cutting-edge protection tailored for media celebrities."}
        variant='green'
        image={vipCyberDef?.introImgMediaCelebrity}
        alt={"Media Celebrity Cybersecurity"}
        position='bottom'
      />
      <HowWeApproach color={"green"} col={2} hasArrow={false} reverse={false} data={CommonCyberThreatsForMediaCelebritys} />
      <StayAhead
        variant='green'
      />
      <ConciergeServiceTwo
        title={"Concierge Cybersecurity Services for Media Celebrities"}
        desc={"Our Concierge Cybersecurity Services for Media Celebrities go beyond traditional cybersecurity measures, delivering a bespoke set of services that protects your digital life, your reputation, and your peace of mind. Here’s how we transform your cybersecurity"}
        renderData={ConciergeServiceForMediaChelibratyData}
        variant='green'
      />
      <HowWeApproach color={"green"} col={1} hasArrow={true} reverse={true} data={CybersecurityMethodology_Media_Celeb} />
      <WhyChooseSection
        variant="green"
        headline={"Why A-List Celebrities Choose TechForing?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseFAQDataForMediaCelebrity}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='green' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Safeguard My Reputation
            </Link>
          </Button>
        }
        img={ctaImg}
        variant="green"
        title="Protect Your Spotlight!"
        subTitle="Don't let a cyberattack tarnish your hard-earned reputation. Protect your privacy, brand, and peace of mind with TechForing: the cybersecurity choice for celebrities."
      />
      <TestimonialSection variant="green" data={pcsTestimonialData} />
      <section>
        <Title className="pt-4 pb-10">Frequently Asked Questions</Title>
        <Faq questions={mediaFAQData} color="green" />
      </section>
      <BlogSlider color="green" />
    </div>
  )
}

export default page