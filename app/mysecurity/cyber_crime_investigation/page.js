import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import AssessmentServiceSection from "@/components/dynamicSections/AssessmentServiceSection/AssessmentServiceSection"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png'
import WeWorkBulletPoint from "@/components/common/WeWorkBulletPoint/WeWorkBulletPoint"
import { WeWorkGridData, cybercrimeInvestigationProcess } from "@/utils/mock/WeServeSectionData/weServeCardData"
import WeWorkGridSection from "@/components/dynamicSections/WeWorkGridSection/WeWorkGridSection"
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { cyberCrimeInvestigationFaqData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import heroCrimeImg from "@/asset/personal-cybersecurity/cyber-investigation/cybercrime-investigation/hero.webp";
import Link from "next/link"
import { cyberCrime } from "@/utils/images"
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import { faqDataCrimeInvestigation } from "@/utils/mock/dummyData"
import cciCTA from "@/asset/personal-cybersecurity/cyber-investigation/cybercrime-investigation/CCI-CTA.jpg"
import cciWhyChoose from "@/asset/personal-cybersecurity/cyber-investigation/cybercrime-investigation/CCI-WhyChoose.webp"
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Cyber Crime Investigation | We Can Stop Them | TechForing",
  description: "Scrutinize, analyze, and recover vital forensic digital data from hacked devices and networks to expose cybercriminals with cybercrime investigation.",
  keywords: "cybercrime investigation (cybercrime investigators. cyber crime investigator,)",
  canonical: "https://techforing.com/mysecurity/cyber_crime_investigation/",
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
        bgImg={heroCrimeImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          CYBER CRIME INVESTIGATION
        </h1>}
        description={"Cybercrimes don’t just target businesses - it’s a real and growing threat to you too. If you have fallen victim to a cyberattack, don’t wait! Investigate, expose, and stop cybercriminals with us today!"}
        btnTxt={"Investigate a Cybercrime Now!"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <AssessmentServiceSection
        title={"Reclaim Your Digital <br/> Life: Cyber Crime <br/> Investigation Service"}
        paragraph="Get comprehensive cybercrime investigation services tailored to your specific needs. With unmatched skills in digital forensics, our cyber crime investigators ensure that no crucial evidence is overlooked. We work tirelessly to help you regain control of your accounts, devices, and online identity."
        image={cyberCrime?.introImg}
        alt={"Cyber Crime Investigation"}
        position='bottom'
        variant="secondaryTwo"
      />
      <WeWorkBulletPoint
        imgLeftTextRightAlign={true}
        title={"How We Can Help You"}
        image={cyberCrime?.expertCyber}
        alt={"Cyber Crime Investigation"}
        bulletPoint={false}
        checkBox={true}
        bulletWithDesc={false}
        renderedData={cybercrimeInvestigationProcess}
        desc={"TechForing Cyber Crime Investigation has a proven record of tracking down the source of cyberattacks and recovering digital evidence. We can help you recover your hacked accounts or devices and enable you to regain control over your digital life. Our personal cyber crime investigation services include:"}
        variant='secondaryTwo'
        exploreBtn={false}
      />
      <WeWorkGridSection
        title={"How We Work"}
        desc={"Every cybercrime is unique. However, most cybercrime investigation approach follows some common steps like recovering file systems from hacked devices, acquiring digital evidence to prosecute cyber crimes, or writing reports to use in legal proceedings are some of the common tasks our computer crime investigator performs. Our cybercrime investigations usually follow a proven framework:"}
        renderedData={WeWorkGridData}
        variant='secondaryTwo'
      />
      <WhyChooseSection
        headline={"Why Choose TechForing Cyber Crime Investigation?"}
        responsiveImgURL={cciWhyChoose}
        renderedData={cyberCrimeInvestigationFaqData}
        variant="secondaryTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Call for a Thorough Investigation
            </Link>
          </Button>
        }
        img={cciCTA}
        className={{ borderColor: 'border-redThree' }}
        title="Fight Back Against Cybercrime!"
        subTitle="If you’ve been targeted by cybercriminals, act fast. Contact TechForing for a free consultation today and let our experienced cybercrime investigators help you fight back!"
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <Faq title={'Frequently Asked Questions'} questions={faqDataCrimeInvestigation} color="secondaryTwo" />
      <BlogSlider color="secondaryTwo" />
    </div>
  )
}

export default page