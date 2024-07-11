import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import WeServeSection from "@/components/dynamicSections/WeServeSection/WeServeSection";
import { penetrationService } from "@/utils/mock/WeServeSectionData/weServeCardData";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { penetrationTestingData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import OurFocusSection from "@/components/dynamicSections/OurFocusSection/OurFocusSection";
import { OurFocusData } from "@/utils/mock/OurFocusData/OurFocusData";
import hero from "@/asset/business-cybersecurity/penetration-testing/hero.webp";
import { whyChooseFAQforPenetration } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import Link from "next/link";
import { penetrationTesting } from "@/utils/images";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import ptWhyChooseImg from "@/asset/business-cybersecurity/penetration-testing/pt-why-choose.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Red Team Penetration Testing | Security Assessment | TechForing",
  description: "Our Red Team Penetration Testing simulates cyberattacks against your business IT systems to find exploitable vulnerabilities. Contact us to get started.",
  keywords: "red team penetration testing (penetration testing)",
  canonical: "https://techforing.com/red_team_penetration_testing/",
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
          <span className='text-redThree'>RED TEAM </span> <br className='hidden lg:visible' />
          PENETRATION TESTING
        </h1>}
        description={"TechForing's expert Red Team goes beyond just vulnerability scans, simulating real-world attacks to uncover hidden vulnerabilities in your security infrastructure."}
        btnTxt={'Click Here To Pen Test Your System'}
        variants='red'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='red'
      />
      <AssessmentServiceSection
        title={"Our Approach To <br /> Penetration Testing"}
        paragraph={"TechForing offers a comprehensive approach to penetration testing. We perform system breaches with expert pen testers, leveraging the same tools and methods malicious hackers use. We do it to make the test as realistic as possible. We provide penetration testing for both internally and externally accessible infrastructure and services. This includes web apps, network hosts, hardware, mobile devices, and even humans, through our physical testing and social engineering. We perform penetration testing as one-time or recurring services for maximum protection."}
        variant="redThree"
        position="bottom"
        image={penetrationTesting.approch}
        alt={"Our Approach To Penetration Testing"}
      />
      <WeServeSection
        title={"Industries We Serve"}
        cardItem={penetrationService}
        variant='redThree'
        noOfGrid={7}
      />
      <OurFocusSection
        title={"Our Focus"}
        smallTitle={"Pen Testing That Leaves No Stones Unturned"}
        desc={"We provide penetration testing for many targets–both externally and internally accessible infrastructure and services. This includes web applications, networks, hardware, mobile devices or even humans, through our physical testing. We can deliver our services as a one-time service or on a recurring service for maximum protection."}
        lowerTitle={"Our Penetration Testing Services Focus on:"}
        img={penetrationTesting?.ourFocus}
        renderedData={OurFocusData}
        variant='redThree'
      />
      <VulnerabilityAssessmentSection
        title={"How We Work"}
        desc={"Our pen testers work in a streamlined series of five phases listed below. When put together, these phases form a comprehensive approach for completing a successful penetration test."}
        renderedData={penetrationTestingData}
        variants='red'
      />
      <WhyChooseSection
        headline={"Why Choose TechForing ?"}
        responsiveImgURL={ptWhyChooseImg}
        renderedData={whyChooseFAQforPenetration}
        variant="redThree"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='redThree' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started
            </Link>
          </Button>
        }
        variant="red"
        img={penetrationTesting.secureOrganization}
        className={{ borderColor: 'border-redThree' }}
        title="IS YOUR ORGANIZATION COMPLETELY SECURE?"
        subTitle="Schedule a meeting with us and our cyber security and compliance experts will get in touch with you. We will assess your situation and provide you with the best course of action."
      />
      <TestimonialSection variant="redThree" data={bcsTestimonialData} />
      <BlogSlider color="redThree" />
    </section>
  )
}

export default page