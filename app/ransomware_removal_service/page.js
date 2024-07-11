import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { ransomware_VulnerabilityAssessmentData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { ransomware_whyChooseFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { ransomware_weDealWithData } from "@/utils/mock/WeDealWithData/WeDealWithData";
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { ransomware_faqData } from "@/utils/mock/dummyData";
import Link from "next/link";
import assesmentServiceImage from "@/asset/business-cybersecurity/ransomware-removal/services.webp"
import whyChooseTechforing from "@/asset/business-cybersecurity/ransomware-removal/RR_WhyChoose.webp"
import secureOrganization from "@/asset/business-cybersecurity/ransomware-removal/secureOrganization.webp"
import hero from "@/asset/business-cybersecurity/ransomware-removal/hero.webp";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Ransomware Removal Service & Data Recovery | TechForing",
  description: "Escape the grip of ransomware with our expert removal solutions. Fast, reliable, and tailored for you. Contact us today to secure your data!",
  keywords: "ransomware removal (ransomware removal service, ransomware removal services, ransomware)",
  canonical: "https://techforing.com/ransomware_removal_service/",
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
        bgImg={hero?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          <span className='text-yellowTwo'>RANSOMWARE</span> REMOVAL SERVICES
        </h1>}
        description={'Ransomware attacks can be devastating for businesses. If your business is experiencing a ransomware attack, contact us immediately to remove it & recover your data.'}
        btnTxt={'Recover From Ransomware'}
        variants='yellow'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellow'
      />
      <AssessmentServiceSection
        title={"TechForing Ransomware <br/>  Removal Service"}
        paragraph={"Ransomware attacks can be devastating for both businesses and individuals. Our ransomware removal services started with the goal of helping businesses remove ransomware, mitigate the damage, clear their systems of all malicious software, and recover sensitive systems."}
        variant='yellow'
        image={assesmentServiceImage}
        alt={"Ransomware Removal Services"}
        position='bottom'
      />
      <VulnerabilityAssessmentSection
        title={"How We Eradicate Ransomware"}
        desc={"Our ransomware removal services consist of 3 steps:"}
        renderedData={ransomware_VulnerabilityAssessmentData}
        variants='yellow'
      />
      <WeDealWithSection
        title={"Types of Ransomware We Deal With"}
        renderedData={ransomware_weDealWithData}
        variant='tertiary'
      />

      <WhyChooseSection
        headline={"What Makes Us Best at Ransomware Removal?"}
        responsiveImgURL={whyChooseTechforing}
        renderedData={ransomware_whyChooseFAQData}
        variant="yellow"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellow' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started
            </Link>
          </Button>
        }
        variant="yellow"
        img={secureOrganization}
        className={{ borderColor: 'border-yellowTwo' }}
        title="Act Fast, Don't Pay the Criminals"
        subTitle="Call us today & get help from our ransomware recovery experts."
      />
      <Faq questions={ransomware_faqData} title={'Frequently Asked Questions'} color="yellow" />
      <TestimonialSection variant="yellowTwo" data={bcsTestimonialData} />
      <BlogSlider color="yellow" />
    </section>
  )
}

export default page

const performanceData = [
  {
    value: `<span class='text-yellowTwo text-xl md:text-5xl'>$</span>3.9<span class='text-yellowTwo text-xl md:text-5xl'>m</span>`,
    text: 'Data breaches on SMBs all over the world',
  },
  {
    value: `75<span class='text-yellowTwo text-xl md:text-5xl'>%</span>`,
    text: 'organizations experienced malware activity in 2022',
  },
  {
    value: `43<span class='text-yellowTwo text-xl md:text-5xl'>%</span>`,
    text: 'Cyber attacks target small businesses',
  },
];