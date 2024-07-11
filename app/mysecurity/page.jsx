import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import bgEbook from '@/asset/common/ebook/bgEbook/green-ebook.png';
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection";
import ProvidedServiceSection from "@/components/dynamicSections/ProvidedServiceSection/ProvidedServiceSection";
import { FinestSolutionsData, WeServeWhomData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import StayAhead from "@/components/dynamicSections/StayAhead/StayAhead";
import WeServeWhom from "@/components/dynamicSections/WeServeWhom/WeServeWhom";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import { mysecurityfaqData } from "@/utils/mock/dummyData";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import Link from "next/link";
import { pcsMySecurity } from '@/utils/images';
import hero from "@/asset/personal-cybersecurity/hero.webp"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import WhyChooseTwo from "@/components/dynamicSections/WhyChooseTwo/WhyChooseTwo";
import { WhyChooseTwoData } from "@/utils/mock/WhyChooseTwoData/WhyChooseTwoData";
import ctaImg from '@/asset/personal-cybersecurity/PC_CTA.webp';
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "Personal Cybersecurity Services | TechForing",
  description: "Protect your digital life with our personal cybersecurity services. Stay safe online with expert guidance and tailored solutions. Contact us to get started.",
  keywords: " Personal cybersecurity services (personal cybersecurity, personal cyber security, personal cyber security consultant, personal cybersecurity consultant)",
  canonical: "https://techforing.com/mysecurity/",
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
          SECURE YOUR DIGITAL LIFE
        </h1>}
        description={"Our White-Glove Cybersecurity and Threat-Detection Solutions Offer High-End Solutions to High-Net-Worth Individuals, Corporate Executives, And Their Households."}
        btnTxt={"Get In Touch"}
        variants='green'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='green'
      />
      <AssessmentServiceSection
        title={"Safeguarding Your Digital <br/> Fortress"}
        paragraph={`High-Net-Worth equals High-Risk. As a High-Net-Worth Individual, your wealth, influence, reputation, and sensitive information make you a lucrative target for cybercriminals.<br/><br/>
        TechForing Personal Cybersecurity Services deliver exclusive white-glove cybersecurity solutions tailored to the unique needs of you and your family - ensuring your online safety and peace of mind.`}
        image={pcsMySecurity.digitalFortress}
        alt={"Safeguard your digital fortess image"}
        position='bottom'
        variant="green"
      />
      <ProvidedServiceSection
        title={"Experience The Finest Cybersecurity Solutions"}
        desc={"We take pride in safeguarding the digital lives of High-Net-Worth Individuals and Corporate Executives, along with their family and households. Our exclusive white-glove personal cybersecurity services include:"}
        renderedData={FinestSolutionsData}
        imgAlignRight={false}
      />
      <StayAhead
        variant='green'
      />
      <WeServeWhom
        title={"Whom We Serve"}
        renderedData={WeServeWhomData}
        variant='green'
      />
      <WhyChooseTwo
        title={"WHY SUCCESSFUL PEOPLE CHOOSE TECHFORING"}
        subTitle={"At TechForing, we are committed to safeguarding the digital lives of successful people from all over the world. Our White-Glove Cybersecurity & Threat Detection Solutions are designed to provide you with a seamless, personalized solution."}
        underSubTitle={"Our commitment to you:"}
        renderedData={WhyChooseTwoData}
      />
      <TestimonialSection
        variant="green"
        data={pcsTestimonialData}
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='green' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Request A Quote
            </Link>
          </Button>
        }
        img={ctaImg}
        className={{ borderColor: 'border-green' }}
        title="Get Professional Cyber Investigation Services at Your Fingertips!"
        subTitle="Protect yourself from online threats. Our cyber investigators specialize in uncovering scams, fraud, and identity theft."
        variant="green"
      />
      <Faq color="green" questions={mysecurityfaqData} title={'Frequently Asked Questions'} />
      <BlogSlider color="green" />
    </div>
  )
}

export default page