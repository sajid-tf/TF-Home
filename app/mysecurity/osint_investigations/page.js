import { Button, FourVectorHero, SecureOrganization } from "@/components/common";
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection";
import { EbookData } from "@/utils/mock/EbookData/EbookData";
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png';
import WeWorkBulletPoint from "@/components/common/WeWorkBulletPoint/WeWorkBulletPoint";
import { osIntInvestigationData } from "@/utils/mock/WeServeSectionData/weServeCardData";
import WeWork from "@/components/common/WeWork/WeWork";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import heroOpenSourceImg from "@/asset/personal-cybersecurity/cyber-investigation/online-source-investigation/hero.webp";
import Link from "next/link";
import { osInt } from "@/utils/images"
import LegalizedInvestigation from "@/components/dynamicSections/LegalizedInvestigation/LegalizedInvestigation";
import { LegalInvestigationData } from "@/utils/mock/LegalInvestigation/LegalInvestionData";
import OSINTService from "@/components/dynamicSections/OSINTService/OSINTService";
import { OSINTServiceData } from "@/utils/mock/ProvidedServiceData/ProvidedServiceData";
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseOSINTData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import whyChooseImg from '@/asset/personal-cybersecurity/cyber-investigation/online-source-investigation/OSINT-WhyChoose.webp';
import ctaImg from '@/asset/personal-cybersecurity/cyber-investigation/online-source-investigation/OSINT-CTA.webp';
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "OSINT Investigations | Open Source Intelligence | TechForings",
  description: "TechForing's cutting-edge Open Source intelligence (OSINT) helps you with personal information audits, background checks, and gap identification.",
  keywords: "open source intelligence (OSINT)",
  canonical: "https://techforing.com/mysecurity/osint_investigations/",
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
        bgImg={heroOpenSourceImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          OSINT INVESTIGATION
        </h1>}
        description={"Protect your privacy & reputation, find lost connections, expose hidden threats, and make online decisions with our discreet and confidential OSINT investigations."}
        btnTxt={"Uncover the Hidden Truth"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <WeWorkBulletPoint
        imgLeftTextRightAlign={false}
        title={"OSINT - Gather Information, Without Breaking the Law"}
        image={osInt?.introImg}
        alt={"OSINT - Gather Information, Without Breaking the Law"}
        checkBox={false}
        bulletWithDesc={true}
        renderedData={osIntInvestigationData.techniques}
        renderParagraph={osIntInvestigationData.desc}
        variant='secondaryTwo'
      />
      <WeWork
        imgLeftTextRightAlign={true}
        variant='secondaryTwo'
        title={"Fed Up With All The Privacy Intrusions? We Can Deal With It For You!"}
        desc="Are you tired of working tirelessly to protect your personal data? Are you facing random intrusions, doxxing, and hackers collecting your information? Our OSINT tools and investigation services can liberate you from all the hassle and constant stress. <br/><br/>If you're facing any sort of harassment or cybercrime online, we highly recommend checking out our <a href='/mysecurity' target='_blank' class='underline decoration-sky text-sky visited:text-sky/30 visited:decoration-sky/30'>cyber investigation services</a>."
        image={osInt?.privacyIn}
        alt={"Fed Up With All The Privacy Intrusions? We Can Deal With It For You!"}
        wrapperImgBG={true}
      />
      <LegalizedInvestigation
        renderData={LegalInvestigationData}
        variant='secondaryTwo'
        percentage='100%'
        title={"Legalized Investigation Process Performed By The Book"}
        paragraph={"At TechForing, We never engage in hacking, covert operations, or any other shady tactics. We rely solely on publicly accessible information and strictly adhere to legal and ethical guidelines. Your privacy is our top priority. <br/><br/> We believe in processes that are legalized and transparent. We aren’t using any process that borderlines its legitimacy. Every bit of data we collect is gathered through publicly available information, which falls under the fair use rule. <br/><br/> All our intelligence collection methods are also performed while keeping ethical and civil liberties in mind. We utilize everything we can to ensure a good night’s sleep for our clients under security. <br/><br/> We don’t use any sort of"}
      />
      <OSINTService
        title={'OSINT Services That We Provide'}
        subtile={'Here’s how our OSINT investigations can help you:'}
        variant='secondary'
        renderedData={OSINTServiceData}
        noOfGrid={4}
      />
      <WhyChooseSection
        headline={"Why Trust Us with Your OSINT Investigation?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseOSINTData}
        variant='secondaryTwo'
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started Today
            </Link>
          </Button>
        }
        img={ctaImg}
        className={{ borderColor: 'secondaryTwo' }}
        title="Take Charge of Your Online Narrative"
        subTitle="Protect your privacy, uncover hidden information, and make informed decisions. Contact us today for a confidential consultation. Our OSINT experts are ready to help you navigate the complexities of the online world."
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <BlogSlider color="secondaryTwo" />
    </div >
  )
}

export default page