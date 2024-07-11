import { Button, Faq, FourVectorHero, SecureOrganization } from "@/components/common"
import EbookSection from "@/components/dynamicSections/EbookSection/EbookSection"
import { EbookData } from "@/utils/mock/EbookData/EbookData"
import bgEbook from '@/asset/common/ebook/bgEbook/bg-book-secondaryTwo.png';
import { nftServicesData, nftServicespara } from "@/utils/mock/WeServeSectionData/weServeCardData";
import VulnerabilityAssessmentSection from "@/components/dynamicSections/VulnerabilityAssessmentSection/VulnerabilityAssessmentSection";
import { nftScamWorkProcess } from "@/utils/mock/VulnerabilityAssessmentData/VulnerabilityAssessmentData";
import WeDealWithSection from "@/components/dynamicSections/WeDealWithSection/WeDealWithSection";
import { nftScamsTypes } from "@/utils/mock/WeDealWithData/WeDealWithData";
import WhyChooseSection from "@/components/dynamicSections/WhyChooseSection/WhyChooseSection";
import { WhyChooseNftScamFAQData } from "@/utils/mock/WhyChooseFAQData/WhyChooseFAQData";
import TestimonialSection from "@/components/dynamicSections/TestimonialSection/TestimonialSection";
import BlogSlider from "@/components/dynamicSections/BlogSlider/BlogSlider";
import { nftScamFaqData } from "@/utils/mock/dummyData";
import StrategicPartner from "@/components/dynamicSections/StrategicPartner/StrategicPartner";
import heroNFTScamImg from "@/asset/personal-cybersecurity/cyber-investigation/nft-scam-investigation/hero.webp";
import Link from "next/link";
import nftScamIntro from '@/asset/personal-cybersecurity/cyber-investigation/nft-scam-investigation/nft-scam.webp';
import { pcsTestimonialData } from "@/utils/mock/TestimonialsData/TestimonialsData";
import nftCTA from '@/asset/personal-cybersecurity/cyber-investigation/nft-scam-investigation/NFTSI-CTA.webp';
import nftWhyChoose from '@/asset/personal-cybersecurity/cyber-investigation/nft-scam-investigation/NFTSI-WhyChoose.webp';
import SEOHead from "@/components/common/SEOHead/SEOHead";

export const metadata = {
  title: "NFT Scam Investigations - Detect & Expose Scammers | TechForing",
  description: "Intercept NFT scammers with our expert NFT scam investigation services. Protect your investments and ensure peace of mind. Contact us today!",
  keywords: "NFT scam investigation (recover stolen NFT, stolen NFT recovery, NFT, NFT scam)",
  canonical: "https://techforing.com/mysecurity/nft_scam_investigation/"
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
        bgImg={heroNFTScamImg?.src}
        title={<h1 className="text-2xl md:text-4xl lg:text-5xl uppercase text-strongWhite font-bold drop-shadow-lg font-tertiary leading-snug">
          NFT SCAM INVESTIGATION
        </h1>}
        description={"NFTs are the newest trend in the blockchain space. And like every trend, it has brought a plethora of scammers with it. If you’ve fallen victim to an NFT scam, reach out to us to recover your lost funds."}
        btnTxt={"Recover Your NFT"}
        variants='secondaryTwo'
      />
      <EbookSection
        bg={bgEbook?.src}
        renderedData={EbookData}
        variant='secondaryTwo'
      />
      <StrategicPartner
        imgLeftTextRightAlign={false}
        title={"TechForing NFT Scam Investigation"}
        image={nftScamIntro}
        alt={"How We Work"}
        bulletPoint={false}
        checkBox={false}
        bulletWithDesc={true}
        onlyDesc={false}
        renderedData={nftServicesData}
        renderParagraph={nftServicespara}
        variant='secondaryTwo'
        topLightBG={false}
        bottomLightBG={true}
        leftLightBG={false}
        rightLightBG={false}
        topDeepBG={false}
        bottomDeepBG={false}
        leftDeepBG={true}
        rightDeepBG={false}
      />
      <VulnerabilityAssessmentSection
        desc={'Our NFT scam investigation techniques include:'}
        title={"How We Work"}
        renderedData={nftScamWorkProcess}
        variants='secondaryTwo'
      />
      <WeDealWithSection
        title={"COMMON NFT SCAMS WE <br/> DEAL WITH"}
        subTitle={"We deal with all kinds of common NFT scams, including"}
        renderedData={nftScamsTypes}
        variant='secondaryTwo'
      />
      <WhyChooseSection
        headlineSub={'At TechForing, we understand the rising concerns and risks associated with NFT scams in today’s digital landscape. Here’s why you should choose us:'}
        headline={"Why TechForing is Your Trusted Partner Against NFT Scams"}
        responsiveImgURL={nftWhyChoose}
        renderedData={WhyChooseNftScamFAQData}
        variant="secondaryTwo"
      />
      <SecureOrganization
        button={
          <Button variant="contained" size='medium' color='secondaryTwo' className="w-full md:w-fit" asChild>
            <Link href="/get_start/" target="_blank">
              Talk to an Expert
            </Link>
          </Button>
        }
        img={nftCTA}
        className={{ borderColor: 'border-secondaryTwo' }}
        title="Don’t Give Up on Your NFTs!"
        subTitle="Our experts can track down the scammers and recover your lost NFT investment. Don’t let the scammers get away, take action now!"
        variant="secondaryTwo"
      />
      <TestimonialSection
        variant="secondaryTwo"
        data={pcsTestimonialData}
      />
      <Faq title={'Frequently Asked Questions'} questions={nftScamFaqData} color="secondaryTwo" />
      <BlogSlider color="secondaryTwo" />
    </div>
  )
}

export default page