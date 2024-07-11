import { Button, FourVectorHero, Performance, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png';
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { hackRecoveryServiceData } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { Why_Choose_For_Hack_recovery_service } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { digitalserviceHandles } from "@/utils/mock/WeDealWithData/WeDealWithData";
import hack_recovery from "@/asset/business-cybersecurity/hack-recovery/hero.webp";
import Link from "next/link";
import { bcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import assessmentImg from "@/asset/business-cybersecurity/hack-recovery/HR_Assessment.webp";
import whyChooseImg from "@/asset/business-cybersecurity/hack-recovery/HR_WhyChoose.webp";
import ctaImg from "@/asset/business-cybersecurity/hack-recovery/HR_CTA.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Hack Recovery Service | Recover Hacked Assets | TechForing",
  description: "Our Business Hack Recovery Service will recover hacked accounts, websites, networks, servers, and data centers. Contact us to learn more.",
  keywords: "hack recovery service",
  canonical: "https://techforing.com/hack_recovery_service/",
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
        bgImg={hack_recovery?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug"><span className='text-yellowTwo'>HACK</span> <br className='hidden lg:visible' /> RECOVERY SERVICE </h1>}
        description={"Hackers don't rest, and neither do we. If your business has been attacked, we can help you respond, recover data, and get back to business."}
        btnTxt={'Recover Your Business From A Hack'}
        variants='yellow'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellow'
      />

      <AssessmentServiceSection
        title={"Stay One Step Ahead of <br/> Cybercriminals"}
        paragraph={"Cyberattacks are a constant threat to modern businesses in the digital age. TechForing specializes in rapid hack recovery, helping you assess the damage, secure your systems, and restore your data. We go beyond just fixing the problem – we fortify your defenses to prevent future breaches and equip you with the knowledge to stay ahead of evolving threats."}
        variant='yellow'
        image={assessmentImg}
        alt={"Hack Recovery"}
        position='bottom'
      />
      <VulnerabilityAssessmentSection
        title={"Our In-Depth Hack Recovery Action Plan"}
        renderedData={hackRecoveryServiceData}
        variants='yellow'
      />
      {/* need to change this section later with real data */}
      <WeDealWithSection
        title={"Digital Assets Hacks We Handle"}
        renderedData={digitalserviceHandles}
        variant='tertiary'
      />
      <Performance data={performanceData} />
      <WhyChooseSection
        headline={"Why Choose TechForing for Hack Recovery?"}
        responsiveImgURL={whyChooseImg}
        renderedData={Why_Choose_For_Hack_recovery_service}
        variant="yellow"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellow' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Investigate & Recover
            </Link>
          </Button>
        }
        variant="yellow"
        img={ctaImg}
        className={{ borderColor: 'border-yellowTwo' }}
        title="Your business is under attack? We've got your back!"
        subTitle="Our cyber security experts will investigate the breach and recover your data. Contact us for a confidential consultation."
      />
      <TestimonialSection variant="yellowTwo" data={bcsTestimonialData} />
      <BlogSlider color="yellow" />
    </section>
  )
}

export default page

const performanceData = [
  {
    value: `50<span class='text-yellowTwo text-xl  md:text-5xl'>%</span>`,
    text: 'of all cyber-attacks are done on SMBs',
  },
  {
    value: `3.4 <span class='text-yellowTwo text-xl md:text-5xl'>bil</span>`,
    text: ' phishing emails are sent daily',
  },
  {
    value: `<span class='text-yellowTwo text-xl md:text-5xl'>$</span>10.5`,
    text: 'trillion Cybercrime costs will reach annually by 2025',
  },
];