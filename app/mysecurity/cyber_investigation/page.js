import { Button, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import CyberInvestigation from "@/components/dynamicSections/CyberInvestigation";
import { pcsCyberInvestigationData } from "@/utils/mock/dummyData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import heroCyberInvestigationImg from "@/asset/personal-cybersecurity/cyber-investigation/hero.webp";
import Link from "next/link";
import introImg from "@/asset/personal-cybersecurity/cyber-investigation/intro-img.webp";
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { InvestigationMethodDataCY } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import { WhyChooseCYFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import whyChooseImg from "@/asset/personal-cybersecurity/cyber-investigation/CI_ WhyChoose.webp"
import ctaImg from "@/asset/personal-cybersecurity/cyber-investigation/CI_CTA.webp"
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Cyber Investigation Services | Digital Forensics | TechForing",
  description: "Unravel cyber mysteries with our comprehensive cyber investigation services. From crypto scams to identity theft, we've got you covered. Contact us today",
  keywords: "cyber investigation (cyber investigation services, cyber investigator, digital forensics, cyber crime investigation)",
  canonical: "https://techforing.com/cyber_investigation/",
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
        bgImg={heroCyberInvestigationImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          CYBER INVESTIGATION SERVICES
        </h1>}
        description={"Fallen victim to a cybercrime? Are you feeling lost and unsure of what to do next? TechForing is Here to help! Don’t let the cybercriminals escape, reclaim your peace of mind and recover your losses with our comprehensive cyber investigation services!"}
        btnTxt={"Take Down Cybercriminals"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <AssessmentServiceSection
        title={"Get Help from Expert <br/> Cyber Investigators"}
        paragraph="Cybercrime is an unfortunate reality in today’s digital world. TechForing’s team of expert cyber investigators is dedicated to helping you fight this growing threat of cyberattacks. Our comprehensive cyber investigation services combine cutting-edge technology and proven strategies to protect you and your assets, so you can confidently navigate the cyber world!"
        image={introImg}
        alt={"Victim of a Cyber Attack"}
        position='bottom'
        variant="secondaryTwo"
      />
      <CyberInvestigation color="secondaryTwo" data={pcsCyberInvestigationData} />
      <VulnerabilityAssessmentSection
        title={"Our Proven Methodology"}
        renderedData={InvestigationMethodDataCY}
        variants='secondaryTwo'
      />
      <WhyChooseSection
        headline={"Why Choose TechForing ?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseCYFAQData}
        variant="secondaryTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Let Us Fight for You
            </Link>
          </Button>
        }
        img={ctaImg}
        className={{ borderColor: 'border-redThree' }}
        title="Don't Let Cybercriminals Win!"
        subTitle="Your Peace of Mind is a Click Away - Take the first step towards justice and recover your lost assets today!"
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <BlogSlider color="secondaryTwo" />
    </div>
  )
}

export default page;