import { Button, FourVectorHero, ProvideServices, SecureOrganization } from "@/components/common"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-yellowThree.png';
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import WeWorkBulletPoint from "@/components/common/WeWorkBulletPoint/WeWorkBulletPoint"
import { pcsBenefits } from "@/utils/mock/WeServeSectionData/weServeCardData"
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection"
import { incidentResponseWorks } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData"
import { conciergeCybersecurity } from "@/utils/mock/dummyData"
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { concierge_WhyChooseFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import Link from "next/link"
import { conciergeCyber } from "@/utils/images"
import hero from "@/asset/personal-cybersecurity/concierge-cybersecurity/hero.webp";
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import whyChoose from "@/asset/personal-cybersecurity/concierge-cybersecurity/CC_WhyChoose.webp";
import ctaImg from "@/asset/personal-cybersecurity/concierge-cybersecurity/CC_CTA.webp";
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Concierge Cybersecurity For HNWIs | TechForing ",
  description: "Elevate your personal cybersecurity to the next level with our Concierge Cybersecurity services, tailored for high net worth individuals. Get started today.",
  keywords: "concierge cybersecurity services (personal cybersecurity, high net worth individual cybersecurity, cybersecurity for high net worth individuals)",
  canonical: "https://techforing.com/concierge_cybersecurity/",
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
        bgImg={hero?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          WHITE-GLOVE CONCIERGE CYBERSECURITY
        </h1>}
        description={"High-Profile Individuals Face Unique Cyber Threats. Protect Yours and Your Family's Privacy, Finances, and Reputation With Our Concierge Cybersecurity Services."}
        btnTxt={"Start Your Membership"}
        variants='yellowThree'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellowThree'
      />
      <AssessmentServiceSection
        title={"Concierge <br/> Cybersecurity"}
        paragraph="TechForing provides a high-end personal cyber security service for most of the most influential people. We identify, secure, and enlighten you on potential threats to your devices, social media, email, and private data. Our Concierge Cyber Security Services will protect you and your family from all cybercrimes. Our services offer hack prevention & protection of your and your family's sensitive information like online accounts, credit reports, Personal Identifiable Information (PII), phone numbers, social security numbers, etc. Our virus removal solution will also make sure that your mobile devices, personal computers, tablets, etc. are free from malware and virus attacks."
        image={conciergeCyber.conciergeImg}
        alt={"Concierge Cybersecurity image"}
        position='bottom'
        variant="yellowThree"
      />
      <WeWorkBulletPoint
        imgLeftTextRightAlign={true}
        title={"How Personal Cybersecurity <br/> Services Benefit You"}
        image={conciergeCyber.benefitsServices}
        alt={"Personal Cybersecurity Services Benefit You"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        renderedData={pcsBenefits}
        renderParagraph={[{ paragraph: 'Our personal cybersecurity services will provide you with the following benefits:' }]}
        variant='yellowThree'
      />
      <VulnerabilityAssessmentSection
        title={"How We Deliver 360° Protection"}
        renderedData={incidentResponseWorks}
        variants='yellowThree'
      />
      <ProvideServices renderData={conciergeCybersecurity} color="yellowThree" bulletPoint />
      <WhyChooseSection
        headline={"Why Choose TechForing as Your Cybersecurity Concierge?"}
        responsiveImgURL={whyChoose}
        renderedData={concierge_WhyChooseFAQData}
        variant="yellowThree"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellowThree' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Schedule a Confidential Consultation
            </Link>
          </Button>
        }
        img={ctaImg}
        className={{ borderColor: 'border-redThree' }}
        title="Your Digital Life Deserves the Highest Level of Protection."
        subTitle="Don't Risk Your Reputation, Finances, or Peace of Mind. Partner with TechForing and get bespoke cybersecurity solutions based on your unique needs."
        variant="yellowThree"
      />
      <TestimonialSection
        variant="yellowThree"
        data={pcsTestimonialData}
      />
      <BlogSlider color="yellowThree" />
    </div>
  )
}

export default page