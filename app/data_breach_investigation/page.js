import { Button, FourVectorHero, Performance, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { data_breach_VulnerabilityAssessmentData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { data_breach_WhyChooseFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { data_breach_DealWithData } from "@/utils/mock/WeDealWithData/WeDealWithData";
import hero from "@/asset/business-cybersecurity/data-breach-investigation/hero.webp";
import Link from "next/link";
import { dataBreachInvestigation } from "@/utils/images";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import whyChooseImg from "@/asset/business-cybersecurity/data-breach-investigation/DB_WhyChoose.webp";
import ctaImg from "@/asset/business-cybersecurity/data-breach-investigation/DB_CTA.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Data Breach Investigation Experts | TechForing",
  description: "Get expert support in identifying, containing, and mitigating security breaches with our data breach investigation services. Contact us today to get started!",
  keywords: "data breach investigation (data breach)",
  canonical: "https://techforing.com/data_breach_investigation/",
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
          DATA BREACH INVESTIGATION <br />  SERVICE
        </h1>}
        description={'Data breach is a major credibility threat for any organization. Our expert data breach investigators uncover vulnerabilities, recover lost data, and help you regain control – fast.'}
        btnTxt={'Get Immediate Help'}
        variants='yellow'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellow'
      />
      <AssessmentServiceSection
        title={"Data Breach <br/> Investigation Services"}
        paragraph={"Data breaches within your organization can cause you to face major losses, as well as lose your credibility. TechForing always takes a detailed approach to every data breach scenario and performs a thorough investigation to resolve the matter as soon as possible."}
        variant='yellow'
        image={dataBreachInvestigation?.service}
        alt={"Data Breach Investigation Services"}
        position='bottom'
      />
      <VulnerabilityAssessmentSection
        title={"Our Proven Data Breach Investigation Process"}
        desc={"When a data breach strikes, swift and decisive action is critical. Our expert team follows a proven process to get to the bottom of the incident, safeguard your data, and strengthen your security posture:"}
        renderedData={data_breach_VulnerabilityAssessmentData}
        variants='yellow'
      />
      <WeDealWithSection
        subTitle={"TechForing implements various security measures to protect you from different types of data breaches. Some of the common types of data breaches we deal with include:"}
        title={"Types of Data Breach We Deal With"}
        renderedData={data_breach_DealWithData}
        variant='tertiary'
      />
      <Performance data={performanceData} />
      <WhyChooseSection
        headline={"How TechForing Excels In Dealing With Data Breaches"}
        responsiveImgURL={whyChooseImg}
        renderedData={data_breach_WhyChooseFAQData}
        variant="yellow"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellow' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Immediate Help
            </Link>
          </Button>
        }
        variant="yellow"
        img={ctaImg}
        className={{ borderColor: 'border-yellowTwo' }}
        title="Worried About A Data Breach In Your Organization?"
        subTitle="Every second counts. Take the first step today and contact us. Our experts will investigate, recover, and secure your organization from the effects of a data breach."
      />
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