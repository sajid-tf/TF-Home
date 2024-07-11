import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/yellow-ebook.png'
import { empowerBulletWithDescData_data_removal } from "@/utils/mock/WeServeSectionData/weServeCardData"
import WeManageCard from "@/components/common/WeManageCard/WeManageCard"
import { WeManageCardData_ms_data_removal } from "@/utils/mock/WeManageCardData/WeManageCardData"
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection"
import { faqData_MS_data_removal } from "@/utils/mock/dummyData"
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider"
import Link from "next/link"
import WeWorkBulletPoint from "@/components/common/WeWorkBulletPoint/WeWorkBulletPoint"
import { dataRemoval, incidentResponse } from "@/utils/images"
import hero from '@/asset/personal-cybersecurity/incident-response/data-removal/hero.webp';
import whyChooseImg from '@/asset/personal-cybersecurity/incident-response/data-removal/DR_2nd.webp';
import drCTA from '@/asset/personal-cybersecurity/incident-response/data-removal/DR_CTA.webp';
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData"
import WeWork from "@/components/common/WeWork/WeWork"
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection"
import { WhyChooseFAQDataDataRemoval } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData"
import SEOHead from "@/components/common/SEOHead/SEOHead"

export const metadata = {
  title: "Expert Personal Data Removal Services | TechForing ",
  description: "Remove your personal data from the internet and protect your digital identity with our top-notch personal data removal services. Contact us today!",
  keywords: "personal data removal (best personal data removal service, remove personal data from the internet, personal data removal services)",
  canonical: "https://techforing.com/mysecurity/data_removal/",
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
          PERSONAL DATA REMOVAL SERVICE
        </h1>}
        description={"Data brokers and cybercriminals are constantly collecting and selling your private data, putting you at risk of identity theft and scams. Take back control of your online privacy before it's too late."}
        btnTxt={"Control My Digital Footprint"}
        variants='yellowTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='yellowTwo'
      />
      <WeWorkBulletPoint
        imgLeftTextRightAlign={true}
        title={"Data Collection: The Ultimate Privacy Breach"}
        image={dataRemoval?.introImg}
        alt={"Data Collection: The Ultimate Privacy Breach Image"}
        bulletPoint={false}
        checkBox={true}
        exploreBtn={false}
        bulletWithDesc={false}
        renderedData={empowerBulletWithDescData_data_removal}
        desc={"Information mining is one of the most profitable businesses in the digital age. Companies collect your data to assemble attributes about you and your family members, which is not only invasive but also unnerving. Limit your online presence; select which data stays with you and you only. <br/><br/> Data brokers & cybercriminals are always mining data from the internet, which includes"}
        lowerDesc={""}
        variant='yellowTwo'
      />
      <WeWork
        imgLeftTextRightAlign={false}
        variant='yellowTwo'
        title={"TechForing's Data Removal Service is Here to Help"}
        desc={"TechForing is one of the leading companies that remove personal information from cyberspace. Our privacy experts contact big data broker companies, come to a common ground, and find a permanent way out, thus protecting you from further internet defamation."}
        image={dataRemoval?.introImg}
        alt={"TechForing's Data Removal Service is Here to Help Image"}
        wrapperImgBG={false}
      />
      <WeManageCard
        title={"How We Remove Your Personal Information from the Internet"}
        renderedData={WeManageCardData_ms_data_removal}
        variant='yellowTwo'
        numberOfCard={3}
      />
      <WhyChooseSection
        headline={"Why Choose TechForing for Your Personal Data Removal?"}
        responsiveImgURL={whyChooseImg}
        renderedData={WhyChooseFAQDataDataRemoval}
        variant="yellowTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='yellowTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Get Started
            </Link>
          </Button>
        }
        img={drCTA}
        className={{ borderColor: 'border-yellow' }}
        title="Take Control of Your Online Privacy Today"
        subTitle="Don't let your personal life become public property. Take control of your online presence and protect yourself from identity theft, online scams, and unwanted intrusions today!"
        variant="yellow"
      />
      <TestimonialSection
        variant="yellowTwo"
        data={pcsTestimonialData}
      />
      <Faq title={'Frequently Asked Questions'} questions={faqData_MS_data_removal} color="yellowTwo" />
      <BlogSlider color="yellow" />
    </div>
  )
}

export default page